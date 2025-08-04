import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { IconClock } from '@tabler/icons-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const LatestArticleItem = ({ article }) => {
  return (
    <Card
      key={article?.id}
      className="min-h-40 p-4 justify-between cursor-pointer hover:bg-secondary transition-all"
    >
      <CardHeader className="p-0">
        <div className="gap-1 flex flex-wrap">
          {article?.tags.map((tag) => {
            return (
              <Badge
                variant="outline"
                key={tag}
                className="capitalize bg-muted text-muted-foreground"
              >
                {tag}
              </Badge>
            );
          })}
        </div>
        <Separator className="my-1" />
        <CardTitle>{article?.title}</CardTitle>
      </CardHeader>
      <CardFooter className="flex items-end justify-between p-0">
        <div className="flex bg-muted gap-2 items-center border border-background rounded-2xl pr-2 cursor-pointer">
          <Avatar>
            <AvatarImage src={article?.src} alt={article?.author} />
          </Avatar>
          <span className="text-xs text-muted-foreground">
            {article?.author}
          </span>
        </div>
        <div className="flex items-center gap-1 text-muted-foreground">
          <IconClock size={15} />
          <span className="text-sm">{article?.uploaded_at}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LatestArticleItem;
