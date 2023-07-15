import MainSection from '@/components/views/MainSection/MainSection'
import MainSection from '../components/views/MainSection/MainSection'
import Projects from '../components/views/Projects/Projects'
import Skills from '../components/views/Skills/skills'
import Navbar from "../components/common/Navbar/Navbar"
import CallToAction from '../components/views/CallToAction/CallToAction'

import contentData from "../content/en.json"


export default function Home() {
  
  return (
    <main>
      <Navbar content={contentData["navBar"]}/>
      <MainSection content={contentData["mainView"]}/>
      <Projects content={contentData["projectView"]}/>
      <Skills content={contentData["skillsView"]}/>
      <CallToAction content={contentData["CallToAction"]}/>
    </main>
  )
}
