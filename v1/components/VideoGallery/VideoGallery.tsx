'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import VideoCard from './VideoCard';
import { Button } from '@/components/ui/button';

const videos = [
  {
    id: 1,
    title: 'Building AI-Powered Applications',
    thumbnail: 'https://picsum.photos/800/450?random=1',
    url: 'twitch.tv/donvitocodes/1',
  },
  {
    id: 2,
    title: 'Machine Learning Fundamentals',
    thumbnail: 'https://picsum.photos/800/450?random=2',
    url: 'twitch.tv/donvitocodes/2',
  },
  {
    id: 3,
    title: 'Neural Networks Deep Dive',
    thumbnail: 'https://picsum.photos/800/450?random=3',
    url: 'twitch.tv/donvitocodes/3',
  },
  {
    id: 4,
    title: 'AI Model Training Workshop',
    thumbnail: 'https://picsum.photos/800/450?random=4',
    url: 'twitch.tv/donvitocodes/4',
  },
  {
    id: 5,
    title: 'Natural Language Processing',
    thumbnail: 'https://picsum.photos/800/450?random=5',
    url: 'twitch.tv/donvitocodes/5',
  },
  {
    id: 6,
    title: 'Computer Vision Applications',
    thumbnail: 'https://picsum.photos/800/450?random=6',
    url: 'twitch.tv/donvitocodes/6',
  },
];

const VideoGallery = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const videosPerPage = 3;
  const totalPages = Math.ceil(videos.length / videosPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentVideos = videos.slice(
    currentPage * videosPerPage,
    (currentPage + 1) * videosPerPage
  );

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Okapi-AI Livestreams
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Watch our latest AI development sessions and tutorials
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentVideos.map((video) => (
              <VideoCard
                key={video.id}
                title={video.title}
                thumbnail={video.thumbnail}
                url={video.url}
              />
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevPage}
              className="border-white/10 hover:bg-white/10"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextPage}
              className="border-white/10 hover:bg-white/10"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;