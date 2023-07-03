"use client";

import { useState } from "react";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
}

export const Modal = ({ children, isOpen }: ModalProps) => {
  const [open, setOpen] = useState(isOpen);
  return (
    <dialog open={open}>
      <article>
        <header>
          <a
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="close"
          ></a>
          Modal title
        </header>
        {children}
      </article>
    </dialog>
  );
};
