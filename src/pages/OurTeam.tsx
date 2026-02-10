import img from "../../public/team.jpg"

function OurTeam() {
  return (
    <section
      className="min-h-screen flex justify-center bg-gray-100 py-8 sm:py-12 md:py-16 lg:py-0 md:pl-20 lg:pl-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center justify-center max-w-7xl w-full px-4 sm:px-6 md:px-8 gap-8 lg:gap-0">
        <div className="lg:col-span-8 h-full flex flex-col gap-6 sm:gap-8 lg:gap-10 justify-center">
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
            Meet <span className="sm:block sm:mt-2 md:mt-3">Our Team</span>
          </h1>
          <div className="w-full text-gray-700 leading-relaxed font-light flex flex-col gap-4 sm:gap-5 text-sm sm:text-base">
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
          <div className="font-extralight text-xl sm:text-2xl flex flex-col gap-1 sm:gap-2">
          <p>Delivering <span className="font-medium">exceptional</span> results</p>
          <p><span className="font-medium">Every single</span> time.</p>
          </div>
        </div>
        <div className="lg:col-span-4 w-full">
          <img src={img} alt="Our Team" className="w-full h-auto object-cover rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
