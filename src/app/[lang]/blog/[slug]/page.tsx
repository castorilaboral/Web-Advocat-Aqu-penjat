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
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">{dictionary.postNotFound}</h1>
        <Link href={`/${lang}/blog`} className="text-blue-600 hover:underline">
          {dictionary.backToBlog}
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href={`/${lang}/blog`} className="text-primary-700 hover:text-primary-800 mb-4 inline-flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {dictionary.backToBlog}
        </Link>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">{post.title}</h1>
          <time className="text-secondary-500 block mb-8">{post.date}</time>
          <div className="text-secondary-700 whitespace-pre-line">{post.content}</div>
        </article>
      </div>
    </main>
  );
}
