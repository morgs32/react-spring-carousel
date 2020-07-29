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
  style: object;
  children: Array<React.ReactChild>;
}

export interface CarouselRefType {

}

const Carousel = React.forwardRef<CarouselRefType, Props>((props, ref) => {

  const {
    children,
    className,
    style,
  } = props;

  const [isMounted, setMounted] = useState(false);
  const [itemWidth, setItemWidth] = useState<number | undefined>();

  const [{ ref: containerRef }, { width }] = useMeasure(isMounted);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (width && containerRef.current.firstElementChild) {
      setItemWidth(containerRef.current.firstElementChild.getBoundingClientRect().width * 100 / width);
    }
  }, [containerRef, width]);

  const index = useRef(0);

  if (!children || children.length) {
    throw new Error('You need to pass an array of elements as children within the Carousel');
  }

  const previous = () => {
    goToIndex(index.current - 1);
  };

  const next = () => {
    goToIndex(index.current + 1);
  };

  if (ref && 'current' in ref) {
    ref.current = {
      next,
      previous,
      goToIndex,
    };
  }

  const [animatedProps, setAnimatedProps] = useSpring(() => ({
    x: 0,
    scale: 1
  }));
  
  function goToIndex(i: number) {
    if (!itemWidth) {
      return;
    }
    index.current = clamp(i, 0, children.length - 1);
    setAnimatedProps({
      x: index.current * - itemWidth,
    });
  }


  const bind = useDrag(state => {
    const {
      down,
      movement,
      direction,
      cancel,
    } = state;

    const xDir = direction[0]

    if (down && Math.abs(movement[0]) > window.innerWidth / 4) {
      if (cancel) {
        cancel();
      }
      index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, children.length - 1);
    }

    // if (i < index.current - 1 || i > index.current + 1) {
    //   return {
    //     display: 'none'
    //   }
    // }

    if (!itemWidth) {
      // We just are not ready yet.
      return;
    }
    
    const x = index.current * - itemWidth + (down ? (movement[0] / window.innerWidth) * itemWidth : 0);
    const scale = down ? 1 - movement[0] / (window.innerWidth / 2) : 1;
    setAnimatedProps({ x, scale });
  })

  return (
    <animated.div
      ref={containerRef}
      className={className}
      {...bind()}
      style={{
        ...style,
        transform: (animatedProps.x as OpaqueInterpolation<number>).interpolate((x: number) => {
          return `translate3d(${x}%,0,0)`;
        })
      }}
    >
      {children}
    </animated.div>
  );
})

export default Carousel;
