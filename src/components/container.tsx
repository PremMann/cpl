import { ReactNode } from 'react';

export default function Container({ children }:  { children: ReactNode }) {
    return <div className="mx-auto min-h-screen flex flex-col">
                {children}
            </div>;
}
