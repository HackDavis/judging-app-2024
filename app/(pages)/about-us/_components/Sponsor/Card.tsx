import React from 'react';
import styles from './Sponsor.module.scss';

type CardProps = {
  imageUrl: string;
  frameImageUrl: string;
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({
  imageUrl,
  frameImageUrl,
  title,
  description,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.frame}>
        <img
          src={frameImageUrl}
          alt="Polaroid frame"
          style={{ position: 'absolute', width: '100%', height: '100%' }}
        />
        <img
          src={imageUrl}
          alt={title}
          style={{ width: '100%', height: 'auto', position: 'relative' }}
        />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;