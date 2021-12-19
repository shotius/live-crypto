import React from 'react';
import './styles.scss';

interface CoverFullProps {
  image: string;
  variant: 'full' | 'medium';
}

export const HomeCover: React.FC<CoverFullProps> = ({ image, variant }) => {
  return (
    <div className={variant === 'full' ? 'cover--full' : 'cover--medium '}>
      <img
        width="100%"
        height="100%"
        src={image}
        loading="lazy"
        className="animate--easyload"
        onLoad={(e) => {
          e.currentTarget.style.opacity = '1';
        }}
      />
      <div className="wrap__cover-home -c-white -p-absolute">
        <h1 className="animate__slide-in-left--slow t__heading--400 -size-l top-10">
          Lorem Ipsum
        </h1>
        <p className="t_paragraph--200  animate__slide-in-left--fast">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
          assumenda tempore fugiat commodi laborum voluptas, dolore officiis
          autem numquam fuga molestiae enim corporis porro harum rem minus,
          eaque ullam odit.
        </p>
      </div>
    </div>
  );
};
