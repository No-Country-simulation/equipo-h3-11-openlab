import React, { useState, useEffect, useRef } from "react";
import TokenCreation from "./TokenCreation";
import InicitiveCreation from "./IniciativeCreation";

interface IniciativeCreationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const IniciativeCreationModal: React.FC<IniciativeCreationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [createdTokenAddress, setCreatedTokenAddress] = useState<string | null>(
    null
  );

  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener(
        "mousedown",
        handleOutsideClick as EventListener
      );
    } else {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick as EventListener
      );
    }
    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick as EventListener
      );
    };
  }, [isOpen]);

  const handleTokenCreated = (tokenAddress: string) => {
    setCreatedTokenAddress(tokenAddress);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="bg-white p-8 rounded-lg shadow-lg w-96 relative"
        onClick={(e) => e.stopPropagation()} // Evita que el clic dentro del modal cierre el modal
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 ">
          {!createdTokenAddress ? (
            <TokenCreation onTokenCreated={handleTokenCreated} />
          ) : (
            <InicitiveCreation
              createdTokenAddress={createdTokenAddress}
              onClose={onClose}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default IniciativeCreationModal;
