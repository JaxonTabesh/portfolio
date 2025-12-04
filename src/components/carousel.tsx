'use client';
import { useState } from 'react';
import Image from 'next/image';

type MediaType = 'img' | 'gif' | 'vid';

type MediaAndSrc = [MediaType, string, string, number, number];

type CarouselProps = {
  items: MediaAndSrc[];
  width: string;
  arrowSize: string;
  arrowOffset: string;
  activeColor?: string;
  hoverColor?: string;
  mockPhone?: boolean;
  className?: string;
};

type HandleMediaProps = {
  mediaType: MediaType;
  src: string;
  alt: string;
  width: number;
  height: number;
};

type ClampProps = {
  input: number;
  min: number;
  max: number;
};

type VisualIndexProps = {
  index: number;
  total: number;
  className?: string;
};

type ArrowProps = {
  arrowSize: string;
  activeColor: string;
  hoverColor: string;
};

export default function Carousel({
  items,
  width,
  arrowSize,
  arrowOffset,
  mockPhone,
  activeColor,
  hoverColor,
  className,
}: CarouselProps): React.ReactNode {
  const [index, setIndex] = useState(0);
  const [min, max] = [0, items.length - 1];

  const isMin = index === min;
  const isMax = index === max;

  return (
    <div>
      <div className={`${mockPhone ? 'rounded-[60px] bg-black' : ''}`}>
        <div
          className={`grid ${width} max-w-3xl grid-cols-1 grid-rows-[1fr_auto] place-items-center ${className} ${mockPhone ? 'p-3' : ''}`}
        >
          <div
            className={`col-start-1 row-start-1 overflow-hidden ${mockPhone ? 'rounded-[40px]' : ''}`}
          >
            <div
              className="flex w-full flex-row items-center transition-all duration-500 ease-in-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {items.map(([mediaType, src, alt, width, height]) => (
                <div className="w-full shrink-0" key={src}>
                  {handleMedia({ mediaType, src, alt, width, height })}
                </div>
              ))}
            </div>
          </div>
          <div className="z-10 col-start-1 row-start-1 flex w-full justify-center overflow-visible">
            <button
              onClick={() => setIndex(clamp({ input: index - 1, min: min, max: max }))}
              className={`${arrowOffset} rotate-90 transition-all ${isMin ? 'opacity-0' : 'opacity-100'}`}
            >
              <Arrow
                arrowSize={arrowSize}
                activeColor={activeColor ?? 'active:fill-white'}
                hoverColor={hoverColor ?? 'hover:fill-white'}
              />
            </button>
            <button
              onClick={() => setIndex(clamp({ input: index + 1, min: min, max: max }))}
              className={`-rotate-90 transition-all ${isMax ? 'opacity-0' : 'opacity-100'}`}
            >
              <Arrow
                arrowSize={arrowSize}
                activeColor={activeColor ?? 'active:fill-white'}
                hoverColor={hoverColor ?? 'hover:fill-white'}
              />
            </button>
          </div>
        </div>
      </div>
      <VisualIndex
        index={index}
        total={max + 1}
        className={`col-start-1 row-start-2 pt-2 ${mockPhone ? 'px-8' : ''}`}
      />
    </div>
  );
}

function Arrow({ arrowSize, activeColor, hoverColor }: ArrowProps): React.ReactNode {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={1.5}
      stroke="currentColor"
      style={{ width: arrowSize, height: arrowSize }}
      className={`block ${arrowSize}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        className={`fill-gray-500 p-0 transition-colors duration-150 ${activeColor} ${hoverColor}`}
      />
    </svg>
  );
}

function handleMedia({ mediaType, src, alt, width, height }: HandleMediaProps): React.ReactNode {
  switch (mediaType) {
    case 'img':
      return <Image width={width} height={height} src={src} className="w-full" alt={alt} />;
    case 'vid':
      return (
        <video
          src={src}
          autoPlay
          disablePictureInPicture
          loop
          muted
          playsInline
          className="w-full"
          aria-label={alt}
        />
      );
    case 'gif':
      return <p>gif</p>;
  }
}

function clamp({ input, min, max }: ClampProps): number {
  if (input <= min) return min;
  else if (input >= max) return max;
  else return input;
}

function VisualIndex({ index, total, className }: VisualIndexProps): React.ReactNode {
  const bars: React.ReactNode[] = [];

  for (let i = 0; i < total; i++) {
    if (i === index) {
      bars.push(
        <div className={`h-2 flex-[1.5] bg-gray-400 transition-all duration-300`} key={i}></div>,
      );
    } else {
      bars.push(
        <div className={`h-2 flex-1 bg-gray-300 transition-all duration-300`} key={i}></div>,
      );
    }
  }
  return <div className={`flex w-full flex-row gap-x-2 ${className}`}>{bars}</div>;
}
