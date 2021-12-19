import React from 'react';
import './styles.scss';

interface CoverFullProps {
  image: string;
  variant: 'full' | 'medium';
}

export const HomeCover: React.FC<CoverFullProps> = ({ image, variant }) => {
  return (
    <div className={variant === 'full' ? 'cover_full' : 'cover_medium'}>
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
      <div
        style={{
          color: 'white',
          position: 'absolute',
          width: '45%',
          top: '49%',
          left: '10%',
        }}
      >
        <h1
          className="animateLeft"
          style={{
            fontSize: '64px',
            padding: '16px 0px',
            marginBottom: '10px',
            fontFamily: 'Roboto, sans-serif',
            fontWeight: "400"
          }}
        >
          Lorem Ipsum
        </h1>
        <p style={{ width: '100%',    fontFamily: 'Roboto, sans-serif', fontWeight: "300" }} className="animate">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
          assumenda tempore fugiat commodi laborum voluptas, dolore officiis
          autem numquam fuga molestiae enim corporis porro harum rem minus,
          eaque ullam odit.
        </p>
      </div>
    </div>
  );
};
