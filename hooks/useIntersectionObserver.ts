import React, { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (options: IntersectionObserverInit = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  const { threshold, root, rootMargin } = options;

  useEffect(() => {
    const currentTarget = targetRef.current;
    if (!currentTarget) return;

    // If browser doesn't support IntersectionObserver, just show it
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      setIsIntersecting(true);
      currentTarget.classList.add('active');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          currentTarget.classList.add('active');
          // Once it's visible, we can stop observing
          observer.unobserve(currentTarget);
        }
      },
      {
        threshold: threshold || 0.1,
        root: root || null,
        rootMargin: rootMargin || '0px',
      }
    );

    observer.observe(currentTarget);

    // Fallback: Check if already in view immediately and after a short delay
    // This handles cases where the user returns to a scrolled page
    const checkVisibility = () => {
      if (!currentTarget) return;
      const rect = currentTarget.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      
      // If any part of the element is in the viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        setIsIntersecting(true);
        currentTarget.classList.add('active');
        observer.unobserve(currentTarget);
        return true;
      }
      return false;
    };

    // Initial check
    checkVisibility();

    // Secondary checks to handle layout shifts or delayed rendering
    const timer1 = setTimeout(checkVisibility, 100);
    const timer2 = setTimeout(checkVisibility, 500);
    const timer3 = setTimeout(checkVisibility, 1000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [threshold, root, rootMargin]);

  return { targetRef, isIntersecting };
};
