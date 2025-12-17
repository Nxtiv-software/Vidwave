import { FaArrowRight } from "react-icons/fa";
import Button from "../components/Button";
import img from "../../public/team.jpg"

function OurTeam() {
  return (
    <section
      className="
    h-screen flex justify-center bg-gray-100"
    >
      <div className="grid grid-cols-12 items-center justify-center w-6xl pt-10">
        <div className="col-span-8 h-full flex flex-col gap-10 justify-center">
          <h1 className="text-7xl font-medium">
            Meet <span className="block mt-3">Our Team</span>
          </h1>
          <div className="w-100 text-gray-700 leading-relaxed font-light flex flex-col gap-5">
            <p className="">
              Meet the creative minds behind VidWave Studios. Our team of
              award-winning directors, skilled cinematographers, and innovative
              editors combines years of industry experience with fresh
              perspectives.
            </p>
            <p>
              Together, we transform ideas into compelling visual narratives
              that captivate audiences and deliver measurable results for our
              clients.
            </p>
          </div>

          {/* <Button
            iconColor="primary"
            variant="primary"
            size="sm"
            icon={<FaArrowRight color="#fff" />}
          >
            VIEW MORE
          </Button> */}
          <div className="font-extralight text-2xl flex flex-col gap-2">
          <p>Delivering <span className="font-medium">exceptional</span> results</p>
          <p><span className="font-medium">Every single</span> time.</p>
          </div>
        </div>
        <div className="col-span-4">
          <img src={img} alt="" />
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
