import { useState } from 'react';

type Props = {
  label: string;
};

export function HotButton({ label }: Props) {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('black');
  function handleClick(): void {
    setCount(count + 1);
    if (count + 1 < 3) {
      setColor('black');
    } else if (count + 1 < 6) {
      setColor('navy');
    } else if (count + 1 < 9) {
      setColor('lavender');
    } else if (count + 1 < 12) {
      setColor('red');
    } else if (count + 1 < 15) {
      setColor('orange');
    } else if (count + 1 < 18) {
      setColor('yellow');
    } else if (count + 1 > 17) {
      setColor('white');
    }
  }

  return (
    <button onClick={handleClick} type="button" className={color}>
      {label} {count}
    </button>
  );
}
