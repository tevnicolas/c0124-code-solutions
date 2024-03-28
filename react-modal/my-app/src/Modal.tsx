import { ReactNode, useEffect, useRef } from 'react';

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export function Modal({ children, isOpen, onClose }: ModalProps) {
  const modal = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      modal.current?.showModal();
    } else {
      modal.current?.close();
    }
  }),
    [isOpen];

  function handleKeyDown(e: React.KeyboardEvent<HTMLDialogElement>) {
    if (e.key === 'Escape') {
      onClose();
    }
  }

  return (
    <>
      <dialog onKeyDown={handleKeyDown} ref={modal}>
        {children}
      </dialog>
    </>
  );
}
