import React from 'react';
import './styles.scss';

interface CoverFullProps {
  image: string;
  variant: 'full' | 'medium';
}

export const CoverImage: React.FC<CoverFullProps> = ({ image, variant }) => {
  return (
    <div className={variant === 'full' ? 'cover_full' : 'cover_medium'}>
      <img width="100%" height="100%" src={image} />
    </div>
  );
};
