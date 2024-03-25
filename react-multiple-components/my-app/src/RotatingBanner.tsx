import { useState } from 'react';
import './RotatingBanner.css';

type RBProps = {
  items: string[];
};

export function RotatingBanner({ items }: RBProps) {
  const [index, setIndex] = useState(0);
  const numOfIndicators = items.length;

  function handlePreviousClick(): void {
    index ? setIndex((prev) => prev - 1) : setIndex(5);
  }

  function handleNextClick(): void {
    index !== 5 ? setIndex((prev) => prev + 1) : setIndex(0);
  }

  function handleIndicatorClick(current: number): void {
    setIndex(current);
  }

  return (
    <>
      <Banner name={items[index]} />
      <PreviousButton handleClick={handlePreviousClick} />
      <Indicators
        amount={numOfIndicators}
        current={index}
        handleClick={handleIndicatorClick}
      />
      <NextButton handleClick={handleNextClick} />
    </>
  );
}

type BProps = {
  name: string;
};

function Banner({ name }: BProps) {
  return (
    <div>
      <p>{name}</p>
    </div>
  );
}

type PrevNextProps = {
  handleClick: () => void;
};

function PreviousButton({ handleClick }: PrevNextProps) {
  return (
    <div className="flexxer" onClick={handleClick}>
      <div className="box">
        <p>Prev</p>
      </div>
    </div>
  );
}

type IProps = {
  amount: number;
  current: number;
  handleClick: (current: number) => void;
};

function Indicators({ amount, current, handleClick }: IProps) {
  const indicatorDivs = [];
  for (let i = 0; i < amount; i++) {
    indicatorDivs.push(
      <div
        className={i === current ? 'box selected' : 'box'}
        key={i}
        onClick={() => handleClick(i)}>
        <p>{i}</p>
      </div>
    );
  }
  return <div className="flexxer">{indicatorDivs}</div>;
}

function NextButton({ handleClick }: PrevNextProps) {
  return (
    <div className="flexxer" onClick={handleClick}>
      <div className="box">
        <p>Next</p>
      </div>
    </div>
  );
}
