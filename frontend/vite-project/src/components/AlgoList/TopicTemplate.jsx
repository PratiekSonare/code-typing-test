import React from 'react';
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const TopicTemplate = ({ title, description, examples }) => {
  return (
    <div className="article p-6">
      {/* Title Section */}
      <section className="introduction p-0">
        <h2 className="mb-4 text-center">
          <strong>{title}</strong>
        </h2>
        <p className="mb-4 text-justify">{description}</p>
      </section>

      {/* Dynamic Examples Sections */}
      {examples.map((example, index) => (
        <section key={index} className={example.className}>
          <h2>
            <strong>{example.heading}</strong>
          </h2>
          {example.content.map((contentItem, idx) => (
            <div key={idx} className="mb-4">
              {contentItem.language && (
                <p className="mb-2">
                  <strong>{contentItem.language}:</strong>
                </p>
              )}
              {contentItem.code ? (
                <SyntaxHighlighter language={contentItem.language} style={docco}>
                  {contentItem.code}
                </SyntaxHighlighter>
              ) : (
                <p>{contentItem.description}</p>
              )}
            </div>
          ))}
        </section>
      ))}
    </div>
  );
};

export default TopicTemplate;
