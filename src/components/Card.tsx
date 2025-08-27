import React from 'react';
import styles from './card.module.css';

type CardProps = {
  venueName: string;
  imgSrc: string;   // เช่น "/img/bloom.jpg"
};

export default function Card({ venueName, imgSrc }: CardProps) {
  const title = 'The Grand Hall';
  const description = 'ฮอลล์ขนาด 600 ที่นั่ง ระบบแสงสีเสียงครบ ใกล้รถไฟฟ้า';
  const imageUrl = '/img/venue1.jpg';

  return (
    <article className={styles.card}>
      <div className={styles.mediaWrap}>
        <img className={styles.image} src={imgSrc} alt={venueName} loading="lazy" />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{venueName}</h3>
      </div>
    </article>
  );
}