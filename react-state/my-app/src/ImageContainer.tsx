import './ImageContainer.css';
import { useState } from 'react';

type Props = {
  imageSrc: string[];
};

export function ImageContainer({ imageSrc }: Props) {
  const [index, setIndex] = useState(0);
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img
          className="image-fill"
          onClick={() => {
            if (index >= imageSrc.length - 1) {
              setIndex(0);
            } else {
              setIndex(index + 1);
            }
          }}
          src={imageSrc[index]}
          alt="space-image"
        />
      </div>
    </div>
  );
}
