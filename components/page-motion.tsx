'use client';

import { useEffect } from 'react';

/** Progressive enhancement: content remains visible without JavaScript. */
export function PageMotion() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!('IntersectionObserver' in window)) return;

    let observer: IntersectionObserver | undefined;
    const animations = new Set<Animation>();
    const seen = new WeakSet<Element>();
    const targets = document.querySelectorAll<HTMLElement>(
      'main section:not(#inicio) h2, main section:not(#inicio) figure, main article, main blockquote',
    );

    const stop = () => {
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };

    const start = () => {
      stop();
      if (preference.matches) return;
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(({ target, isIntersecting }) => {
            if (!isIntersecting || seen.has(target)) return;
            seen.add(target);
            observer?.unobserve(target);
            // No hidden/pending state, layout shifts, or transform overrides.
            if (typeof target.animate !== 'function') return;
            const animation = target.animate(
              [
                { opacity: 0.55, translate: '0 16px' },
                { opacity: 1, translate: '0 0' },
              ],
              { duration: 560, easing: 'cubic-bezier(.2,.75,.25,1)' },
            );
            animations.add(animation);
            animation.onfinish = () => animations.delete(animation);
          });
        },
        { threshold: 0, rootMargin: '0px 0px -24px 0px' },
      );
      targets.forEach((target) => {
        if (!seen.has(target) && !target.parentElement?.closest('article')) {
          observer?.observe(target);
        }
      });
    };

    start();
    preference.addEventListener('change', start);
    return () => {
      stop();
      preference.removeEventListener('change', start);
    };
  }, []);

  return null;
}
