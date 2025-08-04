import { IconDots } from '@tabler/icons-react';
import LatestArticleItem from '@/components/HomePage/LatestArticleItem';
import mockArticles from '@/mock-data/mockArticles';

const LatestArticles = () => {
  return (
    <div className="flex flex-col gap-4">
      <span className="font-black flex gap-2 items-center w-min px-2 py-0.5 rounded-lg text-nowrap text-2xl">
        <IconDots />
        Artikujt e Fundit
      </span>
      <div className="grid grid-cols-3 gap-2">
        {mockArticles.map((article) => {
          return <LatestArticleItem key={article.id} article={article} />;
        })}
      </div>
    </div>
  );
};

export default LatestArticles;
