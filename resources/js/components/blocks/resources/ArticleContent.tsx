import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface DocsArticleProps {
  title?: string;
  content?: string;
}

export default function DocsArticle({ 
  title = "Resources",
  content = ""
}: DocsArticleProps) {
  return (
    <article className="flex-1 min-w-0 max-w-none">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
        {title}
      </h1>

      {/* Article Content with Markdown Support */}
      <div className="prose prose-gray prose-md max-w-none">
        {content ? (
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              a: ({ node, href, children, ...props }) => (
                <a
                  href={href}
                  target={href?.startsWith('http') ? '_blank' : undefined}
                  rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  {...props}
                >
                  {children}
                </a>
              ),
              img: ({ node, src, alt, ...props }) => (
                <img
                  className='max-w-full h-auto rounded-md'
                  src={src}
                  alt={alt || ''}
                  loading="lazy"
                  {...props}
                />
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        ) : (
          <p className="text-gray-500 italic">No content available.</p>
        )}
      </div>
    </article>
  );
}

