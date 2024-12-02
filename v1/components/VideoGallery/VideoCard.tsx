'use client';

import { Play } from 'lucide-react';

interface VideoCardProps {
  title: string;
  thumbnail: string;
  url: string;
}

const VideoCard = ({ title, thumbnail, url }: VideoCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-white/5 transition-all hover:scale-105">
      <div className="aspect-video relative">
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
          <Play className="h-16 w-16 text-white" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm text-gray-400">{url}</p>
      </div>
    </div>
  );
};

export default VideoCard;