import type { ReactNode } from 'react';

type TrackedPurchaseLinkProps = {
  ariaLabel?: string;
  children: ReactNode;
  className: string;
  destination: 'amazon' | 'whatsapp';
  href: string;
};

export function TrackedPurchaseLink({
  ariaLabel,
  children,
  className,
  destination,
  href,
}: TrackedPurchaseLinkProps) {
  return (
    <a
      aria-label={ariaLabel}
      className={className}
      data-purchase-destination={destination}
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}
