import NavBar from "../components/NavBar"
import SideBar from "../components/SideBar"
import BringIdeas from "../pages/BringIdeas"
import Footer from "../pages/Footer"
import Hero from "../pages/Hero"
import OurStudio from "../pages/OurStudio"
import OurTeam from "../pages/OurTeam"

function MainLayout() {
    return (
       <>
       <NavBar/>
       <SideBar><p>HOMEPAGE</p></SideBar>
       <Hero/>
       <OurStudio/>
       <BringIdeas/>
       <OurTeam/>
       <Footer/>
       </>
    )
}

export default MainLayout
