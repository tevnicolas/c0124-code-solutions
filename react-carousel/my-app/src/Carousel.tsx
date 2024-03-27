import { useCallback, useEffect, useState } from 'react';
import './Carousel.css';

type CarouselProps = {
  images: { src: string; alt: string }[];
};

export function Carousel({ images }: CarouselProps) {
  const [index, setIndex] = useState(0);

  const indicatorElements = images.map((_, i) => {
    return <Indicators key={i} id={i} selected={index} onClick={setIndex} />;
  });
  function handLeftClick(): void {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    } else {
      setIndex(images.length - 1);
    }
  }
  const handleRightClick = useCallback(() => {
    if (index < images.length - 1) {
      setIndex((prev) => prev + 1);
    } else {
      setIndex(0);
    }
  }, [index, images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleRightClick();
    }, 3000);
    return () => clearInterval(interval);
  }, [handleRightClick]);

  return (
    <div className="row">
      <Arrow direction={'left'} onClick={handLeftClick} />
      <Image src={images[index].src} alt={images[index].alt} />
      <Arrow direction={'right'} onClick={handleRightClick} />
      <div className="column-one-third circles">{indicatorElements}</div>
    </div>
  );
}

type ImageProps = {
  src: string;
  alt: string;
};

function Image({ src, alt }: ImageProps) {
  return (
    <div className="column-one-third">
      <img className="image" src={src} alt={alt} />
    </div>
  );
}

type IndicatorsProps = {
  id: number;
  selected: number;
  onClick: (id: number) => void;
};

function Indicators({ id, selected, onClick }: IndicatorsProps) {
  return (
    <i
      onClick={() => onClick(id)}
      className={
        id === selected ? 'fa-regular fa-circle' : 'fa-solid fa-circle'
      }></i>
  );
}

type ArrowProps = {
  direction: string;
  onClick: () => void;
};

function Arrow({ direction, onClick }: ArrowProps) {
  return (
    <div onClick={onClick} className="column-one-third">
      <i className={'fa-solid fa-chevron-' + direction}></i>
    </div>
  );
}
