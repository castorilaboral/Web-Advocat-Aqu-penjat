import React from 'react';
import Link from 'next/link';
import { blogDictionary } from '@/lib/dictionaries/blog';

const getBlogPost = (lang: string, slug: string) => {
  const dictionary = blogDictionary[lang as keyof typeof blogDictionary];
  return dictionary.posts.find(post => post.slug === slug);
};

const formatContent = (content: string) => {
  // Separar el contenido en secciones
  const sections = content.split('\n\n').map(section => {
    if (section.trim().startsWith('-')) {
      // Es una lista
      const items = section.split('\n').filter(item => item.trim());
      return (
        <ul className="list-none space-y-3 my-8 ml-4">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-secondary-700">{item.replace('-', '').trim()}</span>
            </li>
          ))}
        </ul>
      );
    } else {
      // Es un párrafo normal
      return (
        <p className="text-justify leading-relaxed mb-6">
          {section}
        </p>
      );
    }
  });

  return sections;
};

export default function BlogPost({
  params: { lang, slug },
}: {
  params: { lang: string; slug: string };
}) {
  const dictionary = blogDictionary[lang as keyof typeof blogDictionary];
  const post = getBlogPost(lang, slug);

  if (!post) {
    return (
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-secondary-900 mb-6">{dictionary.postNotFound}</h1>
          <Link 
            href={`/${lang}/blog`} 
            className="inline-flex items-center text-primary-700 hover:text-primary-800 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {dictionary.backToBlog}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-secondary-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link 
          href={`/${lang}/blog`} 
          className="inline-flex items-center text-primary-700 hover:text-primary-800 font-medium mb-12 group"
        >
          <svg 
            className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {dictionary.backToBlog}
        </Link>

        <article className="prose prose-lg max-w-none">
          <header className="mb-12 not-prose">
            <time className="inline-block px-3 py-1 text-sm text-primary-700 font-medium rounded-full bg-primary-50 mb-4">
              {post.date ? new Date(post.date).toLocaleDateString(lang, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }) : ''}
            </time>
            <h1 className="text-4xl sm:text-5xl font-bold text-secondary-900 leading-tight mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-secondary-600 leading-relaxed text-justify">
              {post.excerpt}
            </p>
          </header>
          
          <div className="prose prose-lg prose-primary max-w-none">
            <div className="text-secondary-700 space-y-2">
              {formatContent(post.content)}
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
