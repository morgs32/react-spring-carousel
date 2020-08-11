import React, { useEffect, useRef, useState } from 'react';
import clamp from 'lodash/clamp';
import useMeasure from './useMeasure';
import { animated, useSpring } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import { OpaqueInterpolation } from 'react-spring/web';

/**
 * Heads up!
 * The var itemWidth is a percentage integer. Ex. 25, 50, 100 (%)
 */

interface Props {
  className?: string;
  style?: object;
  children: React.ReactChildren | React.ReactChild
}

export interface CarouselRefType {

}

const Carousel = React.forwardRef<CarouselRefType, Props>((props, ref) => {

  const {
    children,
  } = props;

  const [isMounted, setMounted] = useState(false);
  const [itemWidth, setItemWidth] = useState<number | undefined>();

  const [{ ref: containerRef }, { width }] = useMeasure(isMounted);

  const ownRef = useRef({
    index: 0,
    length: 0,
    goToIndex(i: number) {
      if (!itemWidth) {
        return;
      }
      ownRef.current.index = clamp(i, 0, ownRef.current.length - 1);
      setAnimatedProps({
        x: ownRef.current.index * -itemWidth,
      });
    },
    previous: () => {
      ownRef.current.goToIndex(ownRef.current.index - 1);
    },
    next: () => {
      ownRef.current.goToIndex(ownRef.current.index + 1);
    }
  });

  if (ref && 'current' in ref) {
    ref.current = ownRef.current;
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (containerRef.current && width && containerRef.current.children) {
      let node: Element = containerRef.current;
      while (ownRef.current.length === 0 && node) {
        if (node.children.length > 1) {
          ownRef.current.length = node.children.length;
        }
        else {
          node = node.children[0]
        }
      }

      if (!node) {
        throw Error('Carousel could not find an array of child elements.')
      }

      setItemWidth(node.children[0].getBoundingClientRect().width * 100 / width);
    }
  }, [containerRef, width]);

  const [animatedProps, setAnimatedProps] = useSpring(() => ({
    x: 0,
    scale: 1
  }));

  const bind = useDrag((state) => {
    const {
      down,
      movement,
      direction,
      cancel,
      event,
      first,
    } = state;

    if (first && event) {
      event.preventDefault()
    }

    const xDir = direction[0]

    if (down && Math.abs(movement[0]) > window.innerWidth / 4) {
      if (cancel) {
        cancel();
      }
      ownRef.current.index = clamp(ownRef.current.index + (xDir > 0 ? -1 : 1), 0, ownRef.current.length - 1);
    }

    if (!itemWidth) {
      // We just are not ready yet.
      return;
    }

    const x = ownRef.current.index * -itemWidth + (down ? (movement[0] / window.innerWidth) * itemWidth : 0);
    const scale = down ? 1 - movement[0] / (window.innerWidth / 2) : 1;
    setAnimatedProps({ x, scale });
  })

  return (
    <div style={{ overflow: 'hidden' }}>
      <animated.div
        ref={containerRef}
        {...bind()}
        style={{
          touchAction: 'pan-x',
          msTouchAction: 'pan-x',
          transform: (animatedProps.x as OpaqueInterpolation<number>).interpolate((x: number) => {
            return `translate3d(${x}%,0,0)`;
          })
        }}
      >
        {children}
      </animated.div>
    </div>
  );
})

export default Carousel;
