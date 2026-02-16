import React from 'react'
import HeroSection from '../components/sections/HeroSection'
import { ScrollProgress } from '../components/layout/ScrollProgress'
import AboutMeSection from '../components/sections/AboutSection'
import GoalsSection from '../components/sections/GoalsSection'
import ExperiencesSection from '../components/sections/ExperienceSection'
import ProjectsSection from '../components/sections/ProjectsSection'
import SkillsSection from '../components/sections/SkillsSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import FAQSection from '../components/sections/FAQSection'
import ResumeSection from '../components/sections/ResumeSection'
import ContactSection from '../components/sections/ContactSection'

const Home = () => {
  return (
    <div>
      <ScrollProgress/>
      <HeroSection /> 
      <AboutMeSection/>
      <GoalsSection/>
      <ExperiencesSection/>
      <ProjectsSection/>
      <SkillsSection/>
      <TestimonialsSection/>
      <FAQSection/>
      <ResumeSection/>
      <ContactSection/>
    </div>
  )
}

export default Home
