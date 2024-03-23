import { useState } from 'react';
import './RotatingBanner.css';

type RBProps = {
  items: string[];
};

export function RotatingBanner({ items }: RBProps) {
  const [index /*, setIndex*/] = useState(0);
  const numOfIndicators = items.length;

  return (
    <>
      <Banner name={items[index]} />
      <PreviousButton />
      <Indicators number={numOfIndicators} />
      <NextButton />
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

// type PrevNextProps = {};

function PreviousButton() {
  return (
    <div className="flexxer">
      <div className="box">
        <p>Prev</p>
      </div>
    </div>
  );
}

type IProps = {
  number: number;
};

function Indicators({ number }: IProps) {
  const indicatorDivs = [];
  for (let i = 0; i < number; i++) {
    indicatorDivs.push(
      <div className="box" key={i}>
        <p>{i}</p>
      </div>
    );
  }
  return <div className="flexxer">{indicatorDivs}</div>;
}

function NextButton() {
  return (
    <div className="flexxer">
      <div className="box">
        <p>Next</p>
      </div>
    </div>
  );
}
