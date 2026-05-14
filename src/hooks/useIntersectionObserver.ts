import { useState, useEffect, RefObject } from 'react';

interface Options {
  threshold?: number | number[];
  rootMargin?: string;
}

export default function useIntersectionObserver(
  ref: RefObject<Element | null>,
  options: Options = {}
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      options
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, options.threshold, options.rootMargin]);

  return isIntersecting;
}
