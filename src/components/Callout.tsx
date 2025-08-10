import React from 'react';

export default function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm">
      {children}
    </div>
  );
}