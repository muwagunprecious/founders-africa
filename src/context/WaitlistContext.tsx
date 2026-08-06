"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import WaitlistModal from "@/components/waitlist/WaitlistModal";

type WaitlistContextType = {
  isOpen: boolean;
  openWaitlistModal: () => void;
  closeWaitlistModal: () => void;
};

const WaitlistContext = createContext<WaitlistContextType | undefined>(undefined);

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openWaitlistModal = () => setIsOpen(true);
  const closeWaitlistModal = () => setIsOpen(false);

  return (
    <WaitlistContext.Provider
      value={{ isOpen, openWaitlistModal, closeWaitlistModal }}
    >
      {children}
      <WaitlistModal isOpen={isOpen} onClose={closeWaitlistModal} />
    </WaitlistContext.Provider>
  );
}

export function useWaitlistModal() {
  const context = useContext(WaitlistContext);
  if (!context) {
    throw new Error("useWaitlistModal must be used within a WaitlistProvider");
  }
  return context;
}
