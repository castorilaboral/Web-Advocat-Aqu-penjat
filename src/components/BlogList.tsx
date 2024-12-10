import React from 'react';
import Link from 'next/link';
import { blogDictionary } from '@/lib/dictionaries/blog';

interface BlogListProps {
  lang: string;
}

export default function BlogList({ lang }: BlogListProps) {
  const dictionary = blogDictionary[lang as keyof typeof blogDictionary];
  const posts = dictionary.posts;

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <article 
          key={post.slug} 
          className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-secondary-200"
        >
          <Link href={`/${lang}/blog/${post.slug}`} className="block">
            <div className="absolute inset-0 rounded-2xl transition-colors group-hover:bg-secondary-50/50" />
            <div className="relative">
              <time className="text-sm text-primary-700 font-medium mb-2 block">
                {post.date ? new Date(post.date).toLocaleDateString(lang, { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                }) : ''}
              </time>
              <h2 className="text-xl font-display font-bold text-secondary-900 mb-3 group-hover:text-primary-700 transition-colors">
                {post.title}
              </h2>
              <p className="text-secondary-600 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="mt-4 flex items-center text-sm font-medium text-primary-700">
                {dictionary.readMore} 
                <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
