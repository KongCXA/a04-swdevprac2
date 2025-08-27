import Banner from '@/components/Banner';
import Card from '@/components/Card';

export default function HomePage() {
  return (
    <main style={{ padding: '24px', display: 'grid', gap: '24px' }}>
      <Banner />
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap'  }}>
        <Card venueName="The Bloom Pavilion" imgSrc="/img/bloom.jpg"/>
        <Card venueName="Spark Space" imgSrc="/img/sparkspace.jpg"/>
        <Card venueName="The Grand Table" imgSrc="/img/grandtable.jpg"/>
      </div>
    </main>
  );
}