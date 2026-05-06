"use client";

import React, { useEffect } from "react";

/**
 * Ensures all components and animations are initialized correctly
 * when returning to the page.
 */
export default function BFCacheHandler() {
  useEffect(() => {
    // 1. Handle Back-Forward Cache (bfcache)
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        window.location.reload();
      }
    };

    // 2. Fallback for some browsers/situations where 'pageshow' might not be enough
    // This checks if the performance entry type is 'back_forward'
    const checkNavigationType = () => {
      const entries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
      if (entries.length > 0 && entries[0].type === "back_forward") {
        window.location.reload();
      }
    };

    window.addEventListener("pageshow", handlePageShow);
    
    // Check navigation type on mount
    checkNavigationType();

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  return null;
}
