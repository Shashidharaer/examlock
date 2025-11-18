import React from 'react';

interface DocsArticleProps {
  title?: string;
  content?: string;
}

export default function DocsArticle({ 
  title = "Resources",
  content = ""
}: DocsArticleProps) {
  // Helper function to parse inline markdown (bold, italic, code, images, links)
  const parseInlineMarkdown = (text: string) => {
    const parts: (string | React.ReactElement)[] = [];
    let key = 0;

    // Regular expressions for inline formatting
    const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const boldRegex = /\*\*([^*]+)\*\*/g;
    const italicRegex = /\*([^*]+)\*/g;
    const codeRegex = /`([^`]+)`/g;

    // First, handle images (must be before links as they start with !)
    let remainingText = text;
    const imageParts: { type: 'text' | 'image', content: string, alt?: string, src?: string }[] = [];
    let lastImageIndex = 0;
    let imageMatch;
    
    while ((imageMatch = imageRegex.exec(text)) !== null) {
      if (imageMatch.index > lastImageIndex) {
        imageParts.push({ type: 'text', content: text.slice(lastImageIndex, imageMatch.index) });
      }
      imageParts.push({ 
        type: 'image', 
        content: imageMatch[0],
        alt: imageMatch[1],
        src: imageMatch[2]
      });
      lastImageIndex = imageMatch.index + imageMatch[0].length;
    }
    if (lastImageIndex < text.length) {
      imageParts.push({ type: 'text', content: text.slice(lastImageIndex) });
    }
    if (imageParts.length === 0) {
      imageParts.push({ type: 'text', content: text });
    }

    // Process each part
    imageParts.forEach((part) => {
      if (part.type === 'image') {
        parts.push(
          <img 
            key={`img-${key++}`} 
            src={part.src} 
            alt={part.alt || ''} 
            className="my-4 max-w-full rounded-lg shadow-md"
            loading="lazy"
          />
        );
      } else {
        // Handle links in the text
        const linkSegments = part.content.split(linkRegex);
        for (let i = 0; i < linkSegments.length; i++) {
          if (i % 3 === 1) {
            // Link text
            const linkText = linkSegments[i];
            const linkUrl = linkSegments[i + 1];
            parts.push(
              <a 
                key={`link-${key++}`} 
                href={linkUrl} 
                className="text-primary hover:underline"
                target={linkUrl.startsWith('http') ? '_blank' : undefined}
                rel={linkUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {linkText}
              </a>
            );
            i++; // Skip the URL part
          } else if (linkSegments[i]) {
            // Regular text - handle bold, italic, code
            const segments = linkSegments[i].split(boldRegex);
            segments.forEach((segment, j) => {
              if (j % 2 === 1) {
                parts.push(<strong key={`bold-${key++}`} className="font-semibold">{segment}</strong>);
              } else {
                const subSegments = segment.split(italicRegex);
                subSegments.forEach((subSegment, k) => {
                  if (k % 2 === 1) {
                    parts.push(<em key={`italic-${key++}`}>{subSegment}</em>);
                  } else {
                    const codeSegments = subSegment.split(codeRegex);
                    codeSegments.forEach((codeSegment, m) => {
                      if (m % 2 === 1) {
                        parts.push(<code key={`code-${key++}`} className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">{codeSegment}</code>);
                      } else if (codeSegment) {
                        parts.push(codeSegment);
                      }
                    });
                  }
                });
              }
            });
          }
        }
      }
    });

    return parts.length > 0 ? parts : text;
  };

  // Parse markdown content to HTML (basic conversion)
  const parseMarkdown = (text: string) => {
    return text
      .split('\n')
      .map((line, index) => {
        // Headers
        if (line.startsWith('# ')) {
          return <h1 key={index} className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{parseInlineMarkdown(line.slice(2))}</h1>;
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{parseInlineMarkdown(line.slice(3))}</h2>;
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-xl font-semibold text-gray-900 mb-3 mt-6">{parseInlineMarkdown(line.slice(4))}</h3>;
        }
        // Bullet points
        if (line.startsWith('- ')) {
          return <li key={index} className="ml-6 list-disc text-gray-700">{parseInlineMarkdown(line.slice(2))}</li>;
        }
        // Empty lines
        if (line.trim() === '') {
          return <br key={index} />;
        }
        // Regular paragraphs
        return <p key={index} className="mb-4 text-gray-700">{parseInlineMarkdown(line)}</p>;
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

