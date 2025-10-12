import React from 'react';

import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';

interface CamperListProps {
  children: React.ReactNode;
}

export default function CamperLayout({ children }: CamperListProps) {
  return <TanStackProvider>{children}</TanStackProvider>;
}
