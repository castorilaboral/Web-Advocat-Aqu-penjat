import React from 'react';
import BlogList from '@/components/BlogList';
import { blogDictionary } from '@/lib/dictionaries/blog';

export default function BlogPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dictionary = blogDictionary[lang as keyof typeof blogDictionary];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-secondary-900 tracking-tight mb-4">
            {dictionary.title}
          </h1>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            {dictionary.description}
          </p>
        </div>
        <BlogList lang={lang} />
      </div>
    </main>
  );
}
