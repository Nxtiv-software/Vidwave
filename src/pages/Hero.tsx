import Button from "../components/Button";
import { FaArrowRight } from "react-icons/fa";
import hero from "../../public/Hero.jpg";

function Hero() {
  return (
    <section className="bg-gray-100 h-screen grid grid-cols-12 mt-10">
        <div className="col-span-8 flex items-center justify-center">
            <div className="w-2xl flex flex-col gap-8">
                <p>Making Waves in Visual Storytelling</p>
                <h1 className="text-7xl">VidWave <span className="block">Studios</span></h1>
                <p className="">Premium video production studio dedicated to crafting compelling narratives that captivate audiences and elevate brands. From concept to completion, we deliver excellence in every frame.</p>
                <div className="flex gap-3 ">
                <Button textcolors='secondary' iconColor='secondary' variant="primary" size="sm" icon={<FaArrowRight color="#000" />}>WHAT WE DO</Button>
                <Button textcolors='secondary' iconColor='primary' variant='secondary' size='sm' icon={<FaArrowRight color="#fff"/>}>CONTACT US</Button>
                </div>
            </div>
        </div>
        <div className="col-span-4 flex items-center justify-center">
<img className="w-100" src={hero} alt="" />
        </div>
    </section>
  )
}
export default  Hero;