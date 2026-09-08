import Image from 'next/image';
import { siteConfig } from '@/lib/site-config';

type BookPlaceholderProps = {
  compact?: boolean;
  eager?: boolean;
  label?: string;
};

export function BookPlaceholder({
  compact = false,
  eager = false,
  label = 'Capa do livro',
}: BookPlaceholderProps) {
  return (
    <div className={`book-stage ${compact ? 'book-stage--compact' : ''}`}>
      <figure className="book-cover book-cover--photo">
        <Image
          alt={`Capa do livro ${siteConfig.title}, de ${siteConfig.author}`}
          height="1280"
          priority={eager}
          sizes={compact ? '224px' : '(max-width: 640px) 272px, 400px'}
          src="/images/no-barco-com-jesus-capa.jpg"
          width="851"
        />
      </figure>
      <span className="mt-5 block text-center text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
    </div>
  );
}
