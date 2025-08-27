import React from 'react';
import styles from './banner.module.css';

export default function Banner() {
  return (
    <section className={styles.banner}>
      <img
        src="/img/cover.jpg"
        alt="banner background"
        className={styles.bgImg}
      />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.headline}>where every event finds its venue</h1>
        <p className={styles.subtext}>
          บริการพื้นที่สำหรับจัดเลี้ยง ประชุม สัมมนา และงานพิเศษของคุณ — ค้นหาสถานที่ที่ใช่และจองได้ทันที
        </p>
      </div>
    </section>
  );
}