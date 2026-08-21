import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export default function ArticleLayout() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <main className="container-max py-20 min-h-screen">
      <div className="mb-8">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-zinc-400 text-sm font-ui hover:text-white transition-colors mb-8"
        >
          <FaArrowLeft /> Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-white mb-4">
          Article: {slug}
        </h1>
        <p className="text-zinc-400">
          O conteúdo completo em inglês do case vai entrar aqui em breve!
        </p>
      </div>
    </main>
  );
}