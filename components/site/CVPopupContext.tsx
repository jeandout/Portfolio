import { createContext, useContext } from 'react';

type CVPopupContextValue = {
  isDesktop: boolean;
  isCvPopupOpen: boolean;
  openCvPopup: () => void;
  closeCvPopup: () => void;
};

const defaultContext: CVPopupContextValue = {
  isDesktop: false,
  isCvPopupOpen: false,
  openCvPopup: () => {},
  closeCvPopup: () => {}
};

export const CVPopupContext = createContext<CVPopupContextValue>(defaultContext);

export function useCVPopup() {
  return useContext(CVPopupContext);
}
