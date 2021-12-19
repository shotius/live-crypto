import React from 'react';

interface CharPageCoverProps {
  image: string;
}

export const ChartPageCover: React.FC<CharPageCoverProps> = ({ image }) => {
  return (
    <div className="cover_medium">
      <img
        width="100%"
        height="100%"
        src={image}
        loading="lazy"
        className="easyload"
        onLoad={(e) => {
          e.currentTarget.style.opacity = '1';
        }}
      />
    </div>
  );
};
