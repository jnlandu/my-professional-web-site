'use client';

interface CategoryTagProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const CategoryTag = ({ label, isActive, onClick }: CategoryTagProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
        isActive
          ? 'bg-[#4169E1] text-white'
          : 'bg-white/5 text-gray-400 hover:bg-white/10'
      }`}
    >
      {label}
    </button>
  );
};

export default CategoryTag;