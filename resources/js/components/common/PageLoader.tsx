"use client";

import { useEffect, useRef, useState } from "react";
import { router } from "@inertiajs/react";

export default function TopLoader() {
  // Using Inertia router events instead of Next.js navigation hooks

  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState(false);

  const intervalRef = useRef<number | null>(null);
  const finishTimeoutRef = useRef<number | null>(null);
  const pendingCountRef = useRef(0);
  const navigationActiveRef = useRef(false);

  const clearIntervalIfAny = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const clearFinishTimeout = () => {
    if (finishTimeoutRef.current) {
      window.clearTimeout(finishTimeoutRef.current);
      finishTimeoutRef.current = null;
    }
  };

  const start = () => {
    setActive(true);
    setVisible(true);
    clearFinishTimeout();
    if (progress < 10) setProgress(10);
    if (intervalRef.current) return;
    intervalRef.current = window.setInterval(() => {
      setProgress((p) => {
        if (!active && p >= 100) return p;
        const cap = 90;
        if (p >= cap) return p;
        const step = Math.random() * 6 + 3; // 3–9%
        return Math.min(p + step, cap);
      });
    }, 200);
  };

  const finish = () => {
    clearIntervalIfAny();
    setActive(false);
    setProgress(100);
    // allow width transition to complete, then fade out and reset
    clearFinishTimeout();
    finishTimeoutRef.current = window.setTimeout(() => {
      setVisible(false);
      // reset for the next navigation
      setProgress(0);
    }, 350);
  };

  const scheduleFinishIfIdle = () => {
    clearFinishTimeout();
    finishTimeoutRef.current = window.setTimeout(() => {
      if (pendingCountRef.current === 0 && !navigationActiveRef.current) {
        finish();
      }
    }, 250);
  };

  useEffect(() => {
    // Initial page load handling
    const onLoad = () => scheduleFinishIfIdle();
    start();
    if (document.readyState === "complete") {
      scheduleFinishIfIdle();
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }

    // Patch fetch to reflect client-side network activity
    if (
      typeof window !== "undefined" &&
      !(window as any).__pageLoaderFetchPatched
    ) {
      (window as any).__pageLoaderFetchPatched = true;
      const originalFetch = window.fetch;
      window.fetch = (async (...args: Parameters<typeof fetch>) => {
        try {
          pendingCountRef.current += 1;
          start();
          const res = await originalFetch(...args);
          return res;
        } finally {
          pendingCountRef.current = Math.max(0, pendingCountRef.current - 1);
          if (pendingCountRef.current === 0) {
            scheduleFinishIfIdle();
          }
        }
      }) as typeof window.fetch;

      return () => {
        // Cleanup on unmount (unlikely for root layout)
        window.fetch = originalFetch;
        (window as any).__pageLoaderFetchPatched = false;
        clearIntervalIfAny();
        clearFinishTimeout();
        window.removeEventListener("load", onLoad);
      };
    }

    return () => {
      clearIntervalIfAny();
      clearFinishTimeout();
      window.removeEventListener("load", onLoad);
    };
  }, []);

  // Start on same-origin anchor clicks for snappy feedback
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.("a") as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#")) return;
      const tgt = anchor.getAttribute("target");
      if (tgt && tgt !== "_self") return;
      // ignore modifier clicks/new tabs
      if (
        (e as any).metaKey ||
        (e as any).ctrlKey ||
        (e as any).shiftKey ||
        (e as any).altKey
      )
        return;
      try {
        const url = new URL(href, window.location.href);
        if (url.origin !== window.location.origin) return;
        // If clicking a link that won't actually navigate (same path/search),
        // including in-page hash changes, don't start the loader.
        const samePathAndSearch =
          url.pathname === window.location.pathname &&
          url.search === window.location.search;
        if (samePathAndSearch) {
          // No real navigation will occur; skip starting the loader
          return;
        }
      } catch {
        return;
      }
      start();
      navigationActiveRef.current = true;
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  // React to Inertia navigations via router events
  useEffect(() => {
    const anyRouter = router as any;
    if (!anyRouter) return;

    const onStart = () => {
      start();
      navigationActiveRef.current = true;
    };
    const onFinish = () => {
      navigationActiveRef.current = false;
      if (pendingCountRef.current === 0) scheduleFinishIfIdle();
    };

    // Subscribe to Inertia router events. on() may return an unsubscribe function or an id.
    const offStart = anyRouter.on?.("start", onStart);
    const offFinish = anyRouter.on?.("finish", onFinish);

    return () => {
      if (typeof offStart === "function") offStart();
      else if (typeof offStart === "number" && anyRouter.off)
        anyRouter.off("start", offStart);

      if (typeof offFinish === "function") offFinish();
      else if (typeof offFinish === "number" && anyRouter.off)
        anyRouter.off("finish", offFinish);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "2px",
        width: "100%",
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          background: "#005CA1",
          boxShadow: "0 0 6px rgba(88, 101, 242, 0.4)",
          transition: "width 240ms ease-out, opacity 240ms ease-out",
          opacity: progress >= 100 ? 0 : 1,
        }}
      />
    </div>
  );
}
