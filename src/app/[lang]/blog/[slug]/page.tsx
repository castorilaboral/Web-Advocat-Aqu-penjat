import React from 'react';
import Link from 'next/link';
import { blogDictionary } from '@/lib/dictionaries/blog';

const getBlogPost = (lang: string, slug: string) => {
  const dictionary = blogDictionary[lang as keyof typeof blogDictionary];
  return dictionary.posts.find(post => post.slug === slug);
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
            <p className="text-xl text-secondary-600 leading-relaxed">
              {post.excerpt}
            </p>
          </header>
          
          <div className="prose prose-lg prose-primary max-w-none">
            <div className="text-secondary-700 whitespace-pre-line space-y-6">
              {post.content.split('\\n\\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
