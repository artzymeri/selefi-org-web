import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DotIcon } from 'lucide-react';
import { IconWriting } from '@tabler/icons-react';

const LatestArticles = () => {
  const mockArticles = [
    {
      id: 1,
      title:
        "Letër e hapur drejtuar Mesh'hur Hasenit që maskohet me Selefizmin",
      author: 'Shejkh Salih es-Suhajmi',
    },
    {
      id: 2,
      title: 'Këto gjëra nuk janë prej metodologjisë se Selefëve',
      author: 'Shejkh Muhammed Bazmul',
    },
    {
      id: 3,
      title:
        "Qëndrimi i dijetarit të madh Rabij' ibën Hadij el-Medkhalij - Allahu e mëshiroftë! - në lidhje me gjykimin e njeriut që i braktis të gjitha veprat tërësisht",
      author: 'Shejkh Rabij ibn Hadij el-Medkhalij',
    },
    {
      id: 1,
      title:
        "Letër e hapur drejtuar Mesh'hur Hasenit që maskohet me Selefizmin",
      author: 'Shejkh Salih es-Suhajmi',
    },
    {
      id: 1,
      title:
        "Letër e hapur drejtuar Mesh'hur Hasenit që maskohet me Selefizmin",
      author: 'Shejkh Salih es-Suhajmi',
    },
    {
      id: 1,
      title:
        "Letër e hapur drejtuar Mesh'hur Hasenit që maskohet me Selefizmin",
      author: 'Shejkh Salih es-Suhajmi',
    },
    {
      id: 1,
      title:
        "Letër e hapur drejtuar Mesh'hur Hasenit që maskohet me Selefizmin",
      author: 'Shejkh Salih es-Suhajmi',
    },
    {
      id: 1,
      title:
        "Letër e hapur drejtuar Mesh'hur Hasenit që maskohet me Selefizmin",
      author: 'Shejkh Salih es-Suhajmi',
    },
    {
      id: 1,
      title:
        "Letër e hapur drejtuar Mesh'hur Hasenit që maskohet me Selefizmin",
      author: 'Shejkh Salih es-Suhajmi',
    },
    {
      id: 1,
      title:
        "Letër e hapur drejtuar Mesh'hur Hasenit që maskohet me Selefizmin",
      author: 'Shejkh Salih es-Suhajmi',
    },
    {
      id: 1,
      title:
        "Letër e hapur drejtuar Mesh'hur Hasenit që maskohet me Selefizmin",
      author: 'Shejkh Salih es-Suhajmi',
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        <IconWriting />
        <span className="text-lg font-medium">Artikujt e Fundit</span>
      </div>
      <Card className="p-0">
        <CardContent className="p-3">
          <div className="flex flex-col gap-2">
            {mockArticles.map((article) => {
              return (
                <div className="flex gap-1 items-center bg-secondary py-2 px-4 rounded-md cursor-pointer border">
                  <h1 className="font-semibold">{article.title}</h1>
                  <DotIcon />
                  <p className="text-muted-foreground text-nowrap">
                    {article.author}
                  </p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LatestArticles;
