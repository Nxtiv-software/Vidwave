import NavBar from "../components/NavBar"
import SideBar from "../components/SideBar"
import Projects from "../pages/Projects"




const ProjectsLayout = () => {
  return (
    <>
      <NavBar/>
       <SideBar >
        <p>PROJECTS</p>
       </SideBar>
       <Projects/>
       {/* <Footer/> */}
    </>
  )
}

export default ProjectsLayout
