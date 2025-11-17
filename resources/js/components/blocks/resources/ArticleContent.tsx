interface DocsArticleProps {
  title?: string;
  content?: string;
}

export default function DocsArticle({ 
  title = "Resources",
  content = ""
}: DocsArticleProps) {
  // Parse markdown content to HTML (basic conversion)
  const parseMarkdown = (text: string) => {
    return text
      .split('\n')
      .map((line, index) => {
        // Headers
        if (line.startsWith('# ')) {
          return <h1 key={index} className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{line.slice(2)}</h1>;
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{line.slice(3)}</h2>;
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-xl font-semibold text-gray-900 mb-3 mt-6">{line.slice(4)}</h3>;
        }
        // Bullet points
        if (line.startsWith('- ')) {
          return <li key={index} className="ml-6 list-disc">{line.slice(2)}</li>;
        }
        // Empty lines
        if (line.trim() === '') {
          return <br key={index} />;
        }
        // Regular paragraphs
        return <p key={index} className="mb-4">{line}</p>;
      });
  };

  return (
    <article className="flex-1 min-w-0 max-w-none">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
        {title}
      </h1>

      {/* Article Content */}
      <div className="space-y-6 text-gray-700">
        {content ? parseMarkdown(content) : (
          <p className="text-gray-500 italic">No content available.</p>
        )}
      </div>
    </article>
  );
}

