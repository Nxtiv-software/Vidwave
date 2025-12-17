import NavBar from "../components/NavBar"
import SideBar from "../components/SideBar"
import Projects from "../pages/Projects"




const ProjectsLayout = () => {
  return (
    <div>
      <NavBar/>
       <SideBar/>
       <Projects/>
       {/* <Footer/> */}
    </div>
  )
}

export default ProjectsLayout
