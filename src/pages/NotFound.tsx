import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

export default function NotFound() {
  return (
    <main className="container-max min-h-[80vh] flex flex-col items-center justify-center text-center mt-20">
      <h1 className="text-6xl font-bold font-mono text-text-primary tracking-tight leading-none mb-4">404</h1>
      <h2 className="text-xl md:text-2xl font-ui text-text-secondary mb-4 tracking-tight-sm">Under Construction</h2>
      <p className="text-text-tertiary font-body mb-8 max-w-md text-sm">
        This page is currently being built. Check back soon!
      </p>
      <Link 
        to="/"
        className="inline-flex items-center gap-2 bg-surface text-text-primary px-4 py-2 rounded border border-border-default hover:bg-surface-elevated transition-all font-ui text-xs"
      >
        <FaHome /> Go Home
      </Link>
    </main>
  );
}
