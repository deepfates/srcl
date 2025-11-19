
import * as React from 'react';

import { ModalProvider } from '@components/page/ModalContext';
import { HotkeysProvider } from '@modules/hotkeys';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <HotkeysProvider>
      <ModalProvider>{children}</ModalProvider>
    </HotkeysProvider>
  );
};

export default Providers;
