import MainSection from '@/components/views/MainSection/MainSection'
import Projects from '@/components/views/Projects/Projects'
import Skills from '@/components/views/Skills/skills'
import styles from "./Page.module.css"


export default function Home() {
  
  return (
    <main>
      <MainSection />
      <Projects />
      <Skills />
    </main>
  )
}
