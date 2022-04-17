import React from 'react';
import { useState, useEffect } from 'react';

export interface NoSsrProps {
  children?: React.ReactNode;
}

export const NoSSR: React.FC = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  return isClient ? <>{children}</> : <></>;
};

// const WrappedNoSSR = noSSR(() => <div></div>);
export function noSSR<P extends {}>(Any: React.FC<P> | typeof React.Component): React.FC<P> {
  return (props) => (
    <NoSSR>
      <Any {...props} />
    </NoSSR>
  );
}
