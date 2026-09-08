import { BookOpen, MessageCircle } from 'lucide-react';
import { TrackedPurchaseLink } from '@/components/tracked-purchase-link';
import { siteConfig } from '@/lib/site-config';
import { siteContent } from '@/lib/site-content';

type PurchaseLinksProps = { className?: string; compact?: boolean };

export function PurchaseLinks({
  className = '',
  compact = false,
}: PurchaseLinksProps) {
  const common = compact ? 'button button--compact' : 'button';
  return (
    <div
      className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap ${className}`}
    >
      {siteConfig.whatsappUrl ? (
        <TrackedPurchaseLink
          className={`${common} button--primary`}
          destination="whatsapp"
          href={siteConfig.whatsappUrl}
        >
          <MessageCircle aria-hidden="true" />
          <span>{siteContent.purchase.physicalButton}</span>
        </TrackedPurchaseLink>
      ) : (
        <span
          aria-disabled="true"
          className={`${common} button--primary cursor-not-allowed opacity-65`}
          title="WhatsApp oficial ainda não informado"
        >
          <MessageCircle aria-hidden="true" />
          <span>
            {siteContent.purchase.physicalButton} <small>[link pendente]</small>
          </span>
        </span>
      )}
      {siteConfig.amazonUrl ? (
        <TrackedPurchaseLink
          className={`${common} button--secondary`}
          destination="amazon"
          href={siteConfig.amazonUrl}
        >
          <BookOpen aria-hidden="true" />
          <span>{siteContent.purchase.ebookButton}</span>
        </TrackedPurchaseLink>
      ) : (
        <span
          className={`${common} button--secondary cursor-not-allowed opacity-65`}
          aria-disabled="true"
          title="Link da Amazon ainda não informado"
        >
          <BookOpen aria-hidden="true" />
          <span>
            {siteContent.purchase.ebookButton} <small>[link pendente]</small>
          </span>
        </span>
      )}
    </div>
  );
}
