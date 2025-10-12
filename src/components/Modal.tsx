// Modal.tsx
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

export const Modal = ({ children, onClose, isOpen }: ModalProps) => {
  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    } else {
      // delay unmount to let fadeOut animation finish
      const timer = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!visible) return null;

  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gray-800/60 backdrop-blur-sm z-50 ${
        isOpen ? "modal-fade-in" : "modal-fade-out"
      }`}
      onClick={onClose}
    >
      <div
        className={`p-4 max-w-md w-full ${
          isOpen ? "modal-slide-up" : "modal-slide-down"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};
