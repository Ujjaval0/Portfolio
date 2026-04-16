import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './SqlMarkdownViewer.css';

interface SqlMarkdownViewerProps {
  markdownUrl: string;
  title?: string;
}

const SqlMarkdownViewer: React.FC<SqlMarkdownViewerProps> = ({ markdownUrl, title }) => {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetch(markdownUrl)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load');
        return res.text();
      })
      .then((text) => {
        setContent(text);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [markdownUrl]);

  return (
    <div className="sql-viewer-wrapper">
      <div className="sql-viewer-header">
        <div className="sql-viewer-header-left">
          <span className="sql-viewer-icon">{'</>'}</span>
          <div>
            <h2 className="sql-viewer-title">{title ?? 'SQL Code Viewer'}</h2>
            <p className="sql-viewer-subtitle">Read-only · PostgreSQL · Syntax Highlighted</p>
          </div>
        </div>
        <div className="sql-viewer-badge">VIEW ONLY</div>
      </div>

      <div className="sql-viewer-body">
        {loading && (
          <div className="sql-viewer-loading">
            <div className="sql-spinner" />
            <span>Loading SQL script…</span>
          </div>
        )}
        {error && (
          <div className="sql-viewer-error">
            ⚠️ Could not load the file. Please check that the .md file is placed in the{' '}
            <code>public/</code> folder.
          </div>
        )}
        {!loading && !error && (
          <div className="sql-markdown-content" onCopy={(e) => e.preventDefault()}>
            <ReactMarkdown
              components={{
                // Render all code blocks with SQL syntax highlighting
                code({ node, className, children, ...props }: any) {
                  const match = /language-(\w+)/.exec(className || '');
                  const lang = match ? match[1] : 'sql';
                  const isBlock = !!(node?.position && String(children).includes('\n'));

                  if (isBlock || !match) {
                    return (
                      <SyntaxHighlighter
                        style={vscDarkPlus as any}
                        language={lang === 'sql' || !match ? 'sql' : lang}
                        PreTag="div"
                        customStyle={{
                          borderRadius: '8px',
                          fontSize: '13px',
                          margin: '12px 0',
                          userSelect: 'none',
                          WebkitUserSelect: 'none',
                          MozUserSelect: 'none',
                        }}
                        wrapLongLines={false}
                        {...props}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    );
                  }
                  return (
                    <code
                      className="sql-inline-code"
                      style={{ userSelect: 'none' }}
                      {...props}
                    >
                      {children}
                    </code>
                  );
                },
                // Headings
                h1: ({ children }) => <h1 className="sql-md-h1">{children}</h1>,
                h2: ({ children }) => <h2 className="sql-md-h2">{children}</h2>,
                h3: ({ children }) => <h3 className="sql-md-h3">{children}</h3>,
                // Paragraph
                p: ({ children }) => <p className="sql-md-p">{children}</p>,
                // Lists
                ul: ({ children }) => <ul className="sql-md-ul">{children}</ul>,
                ol: ({ children }) => <ol className="sql-md-ol">{children}</ol>,
                li: ({ children }) => <li className="sql-md-li">{children}</li>,
                // Horizontal rule
                hr: () => <hr className="sql-md-hr" />,
                // Blockquote
                blockquote: ({ children }) => (
                  <blockquote className="sql-md-blockquote">{children}</blockquote>
                ),
                // Strong
                strong: ({ children }) => (
                  <strong className="sql-md-strong">{children}</strong>
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
};

export default SqlMarkdownViewer;
