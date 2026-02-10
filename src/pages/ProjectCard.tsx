// src/components/ProjectCard.jsx


// Function to extract YouTube video ID from URL
const getYouTubeVideoId = (url: string): string | null => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[7].length === 11) ? match[7] : null;
};

// Function to get YouTube thumbnail URL
const getYouTubeThumbnail = (url: string): string => {
  const videoId = getYouTubeVideoId(url);
  return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '';
};

const ProjectCard = ({ project }) => {
  // Determine if the link is a YouTube video
  const isYouTubeVideo = project.link?.includes('youtube.com') || project.link?.includes('youtu.be');
  const imageSource = isYouTubeVideo ? getYouTubeThumbnail(project.link) : (project.imageUrl || 'https://via.placeholder.com/600x400');

  return (
    <div className="group relative w-full">
      {/* Image Container with Play button */}
      <a 
        href={project.link} 
        target="_blank"
        rel="noopener noreferrer"
        className="relative block w-full h-56 sm:h-72 md:h-80 lg:h-96 overflow-hidden bg-gray-100 shadow-xl rounded-sm"
      >
        {/* Placeholder Image (Use object-cover for actual images) */}
        <img 
          src={imageSource} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        
        {/* Play Button Overlay in the center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-lg">
            {/* Play Icon */}
            <svg 
              className="w-8 h-8 sm:w-10 sm:h-10 text-black ml-1" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </a>

    {/* Text Content */}
    <div className="mt-4 sm:mt-6 space-y-1 px-1">
      <div className="flex flex-wrap items-center text-xs font-medium uppercase tracking-widest text-gray-500 gap-2 sm:gap-0">
        <span className="sm:mr-4 text-orange-500">{project.category}</span> 
        <span>{project.date}</span>
      </div>
      
      <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 leading-tight">
        {project.title}
      </h3>
    </div>
  </div>
  );
};

export default ProjectCard;