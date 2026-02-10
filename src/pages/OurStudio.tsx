

// Assuming images are imported/aliased correctly in a real project
// Replace these with your actual image paths
import studioImage from '../../public/VidWave.png';
import profileImage from '../../public/vihan.jpg';

const StudioPage = () => {
  return (
    // Main Container: Centered, padding, responsive layout
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16">
      
      {/* --- Left Content Section --- */}
      <div className="flex-1 max-w-lg w-full">
        
        {/* Title */}
        <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight sm:leading-none mb-6 sm:mb-8 md:mb-10 text-gray-900">
          Discover Our Studio
        </h1>

        {/* Text Block 1 */}
        <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8 relative">
          At our design studio, we are a collective of talented individuals
          ignited by our unwavering passion for transforming ideas into
          reality. With a harmonious blend of diverse backgrounds and a vast
          array of skill sets, we join forces to create compelling
          solutions for our esteemed clients.
          {/* Floating gray dot */}
          <span className="absolute top-3 right-0 w-2 h-2 bg-gray-300 rounded-full hidden md:inline-block"></span>
        </p>

        {/* Text Block 2 */}
        <p className="text-sm sm:text-base leading-relaxed text-gray-700 mb-8 sm:mb-12">
          Collaboration is at the heart of what we do. Our team thrives on
          the synergy that arises when unique perspectives converge,
          fostering an environment of boundless creativity. By harnessing
          our collective expertise, we produce extraordinary results that
          consistently surpass expectations.
        </p>

        {/* Profile/Quote Section */}
        <div className="flex items-center space-x-3 sm:space-x-4 mt-6 sm:mt-8">
          <img
            src={profileImage}
            alt="Team Member"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
          />
          <div>
            <p className="font-semibold text-xs sm:text-sm text-gray-900">
              Passionately Creating Design Wonders:
            </p>
            <p className="text-xs text-gray-500">
              Unleashing Boundless Creativity
            </p>
          </div>
        </div>
      </div>

      {/* --- Right Image Section --- */}
      {/* The background abstract shapes would require custom CSS/SVG but the main container is set here */}
      <div className="flex-1 w-full lg:max-w-xl relative mt-8 lg:mt-0">
        <img
          src={studioImage}
          alt="Two people working in an art studio"
          className="w-full h-auto object-cover rounded shadow-lg sm:shadow-xl lg:shadow-2xl"
        />
      </div>
    </div>
  );
};

export default StudioPage;