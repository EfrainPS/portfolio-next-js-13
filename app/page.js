import MainSection from '../components/views/MainSection/MainSection'
import Projects from '../components/views/Projects/Projects'
import Skills from '../components/views/Skills/Skills'
import Reviews from '../components/views/Reviews/Reviews'
import Navbar from "../components/common/Navbar/Navbar"
import CallToAction from '../components/views/CallToAction/CallToAction'

import contentData from "../content/es.json"


export default function Home() {

  const navBarOptions = contentData.navBar.options

  return (
    <main>
      <Navbar content={contentData["navBar"]} />
      {navBarOptions[0].active ? <MainSection content={contentData["mainView"]} /> : null}
      {navBarOptions[1].active ? <Projects content={contentData["projectView"]} /> : null}
      {navBarOptions[2].active ? <Skills content={contentData["skillsView"]} /> : null}
      {navBarOptions[3].active ? <Reviews content={contentData["reviewsView"]}/> : null}
      {navBarOptions[4].active ? <CallToAction content={contentData["CallToAction"]} /> : null}
    </main>
  )
}
