import React from 'react';
import blogPosts from '../data/blog';

function Blog() {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map(post => (
          <div key={post.id} className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
            <p className="text-gray-700 mb-4">{post.content}</p>
            <p className="text-sm text-gray-500">
              By {post.author} on {post.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;