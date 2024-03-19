import './ImageContainer.css';

type Props = {
  link: string;
};

export function ImageContainer({ link }: Props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img className="image-fill" src={link} alt="space-image" />
      </div>
    </div>
  );
}
