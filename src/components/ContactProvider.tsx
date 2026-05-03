"use client"
import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import ContactDialog from "./ContactDialog";

const ContactCtx = createContext<{ open: (src?: string) => void; close: () => void } | null>(null);

export const useContact = () => {
  const ctx = useContext(ContactCtx);
  if (!ctx) {
    throw new Error("useContact must be used within ContactProvider");
  }
  return ctx;
};

export default function ContactProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState("hero");

  const open = useCallback((src = "generic") => {
    setSource(src);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <ContactCtx.Provider value={{ open, close }}>
      {children}
      { <ContactDialog
        open={isOpen}
        onOpenChange={setIsOpen}
        source={source}
      /> }
    </ContactCtx.Provider>
  );
}