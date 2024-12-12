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
          className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-secondary-100 hover:border-primary-100"
        >
          <Link href={`/${lang}/blog/${post.slug}`} className="block">
            <div className="absolute inset-0 rounded-2xl transition-colors group-hover:bg-gradient-to-b from-transparent to-primary-50/10" />
            <div className="relative space-y-4">
              <time className="inline-block px-3 py-1 text-sm text-primary-700 font-medium rounded-full bg-primary-50 mb-2">
                {post.date ? new Date(post.date).toLocaleDateString(lang, { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                }) : ''}
              </time>
              <h2 className="text-2xl font-display font-bold text-secondary-900 mb-3 group-hover:text-primary-700 transition-colors leading-tight">
                {post.title}
              </h2>
              <p className="text-secondary-600 line-clamp-3 text-base leading-relaxed">
                {post.excerpt}
              </p>
              <div className="pt-4 flex items-center text-sm font-medium text-primary-700 group-hover:text-primary-800 transition-colors">
                <span className="border-b border-primary-300 group-hover:border-primary-500">
                  {dictionary.readMore}
                </span>
                <svg 
                  className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </div>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
