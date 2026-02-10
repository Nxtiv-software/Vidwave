import Button from "../components/Button";
import { FaArrowRight } from "react-icons/fa";


function Hero() {
  return (
    <section className="bg-gray-100 min-h-screen grid grid-cols-1 lg:grid-cols-12 mt-16 sm:mt-20 md:pl-20 lg:pl-24">
        <div className="lg:col-span-8 flex items-center justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-12 lg:py-0">
            <div className="max-w-2xl flex flex-col gap-4 sm:gap-6 md:gap-8">
                <p className="text-sm sm:text-base">Making Waves in Visual Storytelling</p>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-medium leading-tight">VidWave <span className="sm:block">Studios</span></h1>
                <p className="text-sm sm:text-base leading-relaxed">Premium video production studio dedicated to crafting compelling narratives that captivate audiences and elevate brands. From concept to completion, we deliver excellence in every frame.</p>
                <div className="flex flex-row gap-3">
                <Button textcolors='secondary' iconColor='secondary' variant="primary" size="sm" icon={<FaArrowRight color="#000" />}>WHAT WE DO</Button>
                <Button textcolors='secondary' iconColor='primary' variant='secondary' size='sm' icon={<FaArrowRight color="#fff"/>}>CONTACT US</Button>
                </div>
            </div>
        </div>
        <div className="hidden lg:flex lg:col-span-4 items-center justify-center">
{/* <img className="w-100" src={hero} alt="" /> */}
        </div>
    </section>
  )
}
export default  Hero;