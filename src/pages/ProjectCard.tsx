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
    <div className="group relative">
      {/* Image Container with "MORE" button */}
      <div className="relative w-full h-96 overflow-hidden bg-gray-100 shadow-xl">
        {/* Placeholder Image (Use object-cover for actual images) */}
        <img 
          src={imageSource} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        
        {/* "MORE" Button Overlay */}
        <a 
          href={project.link} 
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-6 right-6 p-4 rounded-full bg-black text-white text-sm font-semibold opacity-90 hover:opacity-100 transition duration-300"
        >
          VIEW
        </a>
      </div>

    {/* Text Content */}
    <div className="mt-6 space-y-1">
      <div className="flex items-center text-xs font-medium uppercase tracking-widest text-gray-500">
        <span className="mr-4 text-orange-500">{project.category}</span> 
        <span>{project.date}</span>
      </div>
      
      <h3 className="text-3xl font-light text-gray-900 leading-tight">
        {project.title}
      </h3>
    </div>
  </div>
  );
};

export default ProjectCard;