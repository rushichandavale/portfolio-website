 
import { Quote } from "lucide-react"; 
import { Images } from "@/lib/images";

 

export default function TestimonialCard({ testimonial }) {
  return (
    <figure className="relative w-full h-full cursor-pointer overflow-hidden rounded-3xl p-8
    border border-slate-800 bg-slate-900/40 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-primary/30 hover:bg-slate-900/60 group">
      <div className="flex flex-col h-full gap-y-6">
        <div className="flex justify-between items-start">
          <Quote className="h-10 w-10 text-primary/40 group-hover:text-primary transition-colors duration-300" />
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-500 text-sm">★</span>
            ))}
          </div>
        </div>
        
        <blockquote className="text-slate-300 text-lg leading-relaxed italic flex-grow font-medium">
          &quot;{ testimonial.quote }&quot;
        </blockquote>
        
        <figcaption className="mt-6 flex items-center gap-4 border-t border-slate-800 pt-6">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-25 blur transition duration-300 group-hover:opacity-50" />
            <img
              src={ testimonial.avatarUrl || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&h=100&auto=format&fit=crop" }
              alt={ testimonial.author }
              width={ 56 }
              height={ 56 }
              className="relative h-14 w-14 rounded-full object-cover border-2 border-slate-800 shadow-inner"
            />
          </div>
          <div className="flex flex-col">
            <cite className="font-bold not-italic text-white text-lg group-hover:text-primary transition-colors">
              { testimonial.author }
            </cite>
            <cite className="text-sm not-italic text-slate-400 font-medium">
              { testimonial.company }
            </cite>
          </div>
        </figcaption>
      </div>
    </figure>
  );
}
