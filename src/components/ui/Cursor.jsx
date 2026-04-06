import { useEffect, useRef, memo } from "react";

function Cursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    // Check if the device has a hoverable pointing device and motion shouldn't be reduced
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mediaQuery.matches || reduceMotionQuery.matches) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mouseX = 0,
      mouseY = 0;
    let followerX = 0,
      followerY = 0;
    let rafId = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Cursor (the small dot) follows exactly
      cursor.style.left = mouseX - 6 + "px";
      cursor.style.top = mouseY - 6 + "px";
    };

    const animate = () => {
      // Follower (the ring) follows with a slight delay
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      follower.style.left = followerX - 18 + "px";
      follower.style.top = followerY - 18 + "px";
      rafId = requestAnimationFrame(animate);
    };

    const onMouseEnterLink = () => {
      cursor.style.transform = "scale(1.5)";
      cursor.style.backgroundColor = "var(--secondary)";
      follower.style.width = "60px";
      follower.style.height = "60px";
      follower.style.left = followerX - 30 + "px";
      follower.style.top = followerY - 30 + "px";
      follower.style.backgroundColor = "var(--primary / 0.1)";
      follower.style.borderColor = "var(--secondary)";
    };

    const onMouseLeaveLink = () => {
      cursor.style.transform = "scale(1)";
      cursor.style.backgroundColor = "var(--primary)";
      follower.style.width = "36px";
      follower.style.height = "36px";
      follower.style.backgroundColor = "transparent";
      follower.style.borderColor = "var(--primary)";
    };

    const interactiveSelector =
      'a, button, [role="button"], input, textarea, select, .interactive';
    document.addEventListener("mousemove", onMouseMove);
    animate();

    const attachedElements = new WeakSet();
    const attachInteractiveListeners = () => {
      document.querySelectorAll(interactiveSelector).forEach((el) => {
        if (attachedElements.has(el)) return;
        el.addEventListener("mouseenter", onMouseEnterLink);
        el.addEventListener("mouseleave", onMouseLeaveLink);
        attachedElements.add(el);
      });
    };

    attachInteractiveListeners();
    const observer = new MutationObserver(attachInteractiveListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.querySelectorAll(interactiveSelector).forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterLink);
        el.removeEventListener("mouseleave", onMouseLeaveLink);
      });
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor-dot" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  );
}

export default memo(Cursor);
