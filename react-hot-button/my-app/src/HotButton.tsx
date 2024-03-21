type Props = {
  label: string;
  color: string;
  onHotButtonClick: () => void;
};

export function HotButton({ label, color, onHotButtonClick }: Props) {
  return (
    <button onClick={onHotButtonClick} type="button" className={color}>
      {label}
    </button>
  );
}
