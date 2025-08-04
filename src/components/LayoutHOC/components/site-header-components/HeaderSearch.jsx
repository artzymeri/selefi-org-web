import { SearchIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';

const HeaderSearch = () => {
  return (
    <div className="relative w-full bg-secondary rounded-lg">
      <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input type="text" placeholder="Kërko artikuj" className="pl-10 h-min" />
    </div>
  );
};

export default HeaderSearch;
