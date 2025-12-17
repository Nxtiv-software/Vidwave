

// Assuming images are imported/aliased correctly in a real project
// Replace these with your actual image paths
import studioImage from '../../public/VidWave.png';
import profileImage from '../../public/vihan.jpg';

const StudioPage = () => {
  return (
    // Main Container: Centered, padding, responsive layout
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 min-h-screen flex flex-col lg:flex-row items-center justify-center gap-16">
      
      {/* --- Left Content Section --- */}
      <div className="flex-1 max-w-lg">
        
        {/* Title */}
        <h1 className="text-7xl lg:text-8xl font-black leading-none mb-10 text-gray-900 font-light">
          Discover <br /> Our Studio
        </h1>

        {/* Text Block 1 */}
        <p className="text-lg leading-relaxed text-gray-700 mb-8 relative">
          At our design studio, we are a collective of talented individuals
          ignited by our unwavering passion for transforming ideas into
          reality. With a harmonious blend of diverse backgrounds and a vast
          array of skill sets, we join forces to create compelling
          solutions for our esteemed clients.
          {/* Floating gray dot */}
          <span className="absolute top-3 right-0 w-2 h-2 bg-gray-300 rounded-full hidden md:inline-block"></span>
        </p>

        {/* Text Block 2 */}
        <p className="text-base leading-relaxed text-gray-700 mb-12">
          Collaboration is at the heart of what we do. Our team thrives on
          the synergy that arises when unique perspectives converge,
          fostering an environment of boundless creativity. By harnessing
          our collective expertise, we produce extraordinary results that
          consistently surpass expectations.
        </p>

        {/* Profile/Quote Section */}
        <div className="flex items-center space-x-4 mt-8">
          <img
            src={profileImage}
            alt="Team Member"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-sm text-gray-900">
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
      <div className="flex-1 w-full lg:max-w-xl relative">
        <img
          src={studioImage}
          alt="Two people working in an art studio"
          className="w-full h-auto object-cover rounded shadow-2xl"
        />
      </div>
    </div>
  );
};

export default StudioPage;