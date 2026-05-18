import { StoreSlice } from "../store";

interface ContactPayload {
  name: string;
  email: string;
  company: string;
  message: string;
}

export interface ContactState {
  loading: boolean;

  submitContact: (payload: ContactPayload) => Promise<void>;
}

export const contactSlice: StoreSlice<any, ContactState> = (set) => ({
  loading: false,

  submitContact: async (payload) => {
    try {
      set((state: any) => {
        state.contact.loading = true;
      });

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      alert("Message sent successfully");
    } catch (error: any) {
      alert(error.message);
    } finally {
      set((state: any) => {
        state.contact.loading = false;
      });
    }
  },
});