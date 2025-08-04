import LayoutHOC from '@/components/LayoutHOC/LayoutHOC';
import HeroSection from '@/components/HomePage/HeroSection';
import Baslamah from '@/components/HomePage/Basmalah';
import LatestArticles from '@/components/HomePage/LatestArticles';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <LayoutHOC title="Ballina">
      <Baslamah />
      <HeroSection srcImage="/ballina.png" altText="Ballina" />
      <Separator className="mb-6 mt-12" />
      <LatestArticles />
    </LayoutHOC>
  );
}
