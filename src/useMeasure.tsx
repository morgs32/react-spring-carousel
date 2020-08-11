import { useRef, useState, useEffect, MutableRefObject } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export default function useMeasure(isMounted: boolean): [{ ref: MutableRefObject<HTMLDivElement | null> }, ClientRect ] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0, bottom: 0, right: 0 });
  const [ro] = useState(() => new ResizeObserver(([entry]) => set(entry.contentRect)));
  useEffect(() => {
    if (ref.current) ro.observe(ref.current);
    return () => ro.disconnect();
  }, [isMounted, ro]);
  return [{ ref }, bounds];
}
