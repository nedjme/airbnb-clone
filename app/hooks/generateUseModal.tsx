import { create } from "zustand";

interface ModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const generateUseModal = (num: number) => {
  const useModals = Array.from({ length: num }, () =>
    create<ModalStore>((set) => ({
      isOpen: false,
      onOpen: () => set({ isOpen: true }),
      onClose: () => set({ isOpen: false }),
    }))
  );

  return useModals;
};

export default generateUseModal;
