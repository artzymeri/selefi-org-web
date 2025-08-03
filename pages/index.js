import LayoutHOC from '@/components/LayoutHOC/LayoutHOC';
import HeroSection from '@/components/HomePage/HeroSection';
import Baslamah from '@/components/HomePage/Basmalah';

export default function Home() {
  return (
    <LayoutHOC title="Ballina">
      <Baslamah />
      <HeroSection srcImage="/ballina.png" altText="Ballina" />
    </LayoutHOC>
  );
}
