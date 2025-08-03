import LayoutHOC from '@/components/LayoutHOC/LayoutHOC';
import HeroSection from '@/components/HomePage/HeroSection';

export default function Home() {
  return (
    <LayoutHOC title="Ballina">
      <HeroSection srcImage="/ballina.png" altText="Ballina" />
    </LayoutHOC>
  );
}
