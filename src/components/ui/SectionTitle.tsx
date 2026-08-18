import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div className="relative inline-flex items-center justify-center px-4 py-2 mb-6">
      <div className="absolute top-0 left-0 w-[6px] h-[6px] border-t-2 border-l-2 border-zinc-500 rounded-tl-[1px]" />
      <div className="absolute top-0 right-0 w-[6px] h-[6px] border-t-2 border-r-2 border-zinc-500 rounded-tr-[1px]" />
      <div className="absolute bottom-0 left-0 w-[6px] h-[6px] border-b-2 border-l-2 border-zinc-500 rounded-bl-[1px]" />
      <div className="absolute bottom-0 right-0 w-[6px] h-[6px] border-b-2 border-r-2 border-zinc-500 rounded-br-[1px]" />
      <h2 className="font-ui text-base font-medium text-zinc-200 m-0 leading-none">
        {children}
      </h2>
    </div>
  );
}
