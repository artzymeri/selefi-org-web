import { IconDots } from '@tabler/icons-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import mockPublishedBooks from '@/mock-data/mockPublishedBooks';

const PublishedBooks = () => {
  return (
    <div className="flex flex-col gap-4">
      <span className="font-black flex gap-2 items-center w-min px-2 py-0.5 rounded-lg text-nowrap text-2xl">
        <IconDots />
        Botimet
      </span>
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full"
      >
        <CarouselContent>
          {mockPublishedBooks.map((book) => {
            return (
              <CarouselItem
                key={book.id}
                className="pl-3 md:basis-1/3 lg:basis-1/4 rounded-lg border border-muted"
              >
                <img
                  width="100%"
                  src={`/${book?.src}`}
                  alt={book?.title}
                  className="rounded-lg border border-muted"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="!top-auto -bottom-16 left-1/3" />
        <CarouselNext className="!top-auto -bottom-16 right-1/3" />
      </Carousel>
    </div>
  );
};

export default PublishedBooks;
