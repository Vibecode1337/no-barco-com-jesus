'use client';

import { useEffect } from 'react';
import { siteConfig } from '@/lib/site-config';

type MetaPixelFunction = (
  command: 'track',
  eventName: 'Contact' | 'InitiateCheckout',
  parameters: Record<string, string>,
) => void;

declare global {
  interface Window {
    fbq?: MetaPixelFunction;
  }
}

export function MetaPixelTracker({ enabled }: { enabled: boolean }) {
  useEffect(() => {
    if (!enabled) return;

    const trackPurchaseIntent = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>(
        'a[data-purchase-destination]',
      );
      const destination = link?.dataset.purchaseDestination;
      if (!destination || !window.fbq) return;

      const isWhatsapp = destination === 'whatsapp';
      window.fbq('track', isWhatsapp ? 'Contact' : 'InitiateCheckout', {
        content_name: siteConfig.title,
        content_type: 'product',
        format: isWhatsapp ? 'livro_fisico' : 'ebook',
        destination,
      });
    };

    document.addEventListener('click', trackPurchaseIntent);
    return () => document.removeEventListener('click', trackPurchaseIntent);
  }, [enabled]);

  return null;
}
