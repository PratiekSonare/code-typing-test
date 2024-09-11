import React from 'react';

const TopicsData = () => {
  const topicsData = {
    'Language Syntax': {
      title: 'A Comparative Introduction to C++, Java, and Python Syntax',
      description: `When embarking on the journey of learning programming, one of the first
      hurdles to overcome is understanding the syntax of the language you've chosen.
      Syntax is essentially the grammar and structure of a programming language,
      dictating how elements like variables, data types, control flow, and functions
      should be written. This article will provide a comparative overview of the
      syntax of three popular programming languages: C++, Java, and Python.`,
      examples: [
        {
          className: 'variables-and-data-types',
          heading: 'Variables and Data Types',
          content: [
            { language: 'C++', code: 'int age = 25;' },
            { language: 'Java', code: 'int age = 25;' },
            { language: 'Python', code: `age = 25\npi = 3.14159\ninitial = 'A'\nisStudent = True` },
          ],
        },
        {
          className: 'control-flow',
          heading: 'Control Flow',
          content: [
            { description: `All three languages provide similar control flow statements, such as 'if', 'else', 'for', 'while', and 'switch'. However, the syntax may vary slightly.` },
            { language: 'C++', code: `if (age > 18) {\n  cout << "Adult";\n}` },
            { language: 'Java', code: `if (age > 18) {\n  System.out.println("Adult");\n}` },
            { language: 'Python', code: `if age > 18:\n  print("Adult")` },
          ],
        },
      ],
    },
    'Data Types': {
      title: 'Understanding Data Types in C++, Java, and Python',
      description: `Data types in programming define the type of data that can be stored and manipulated within a program. C++, Java, and Python have different ways to declare and use data types.`,
      examples: [
        {
          className: 'data-types',
          heading: 'Data Types Comparison',
          content: [
            { language: 'C++', code: 'int age = 25;\nfloat pi = 3.14;' },
            { language: 'Java', code: 'int age = 25;\ndouble pi = 3.14;' },
            { language: 'Python', code: `age = 25\npi = 3.14159` },
          ],
        },
      ],
    },
  };

  return (
    <div className="topics-data">
      {Object.keys(topicsData).map((topicKey) => {
        const topic = topicsData[topicKey];
        return (
          <div key={topicKey} className="topic-item">
            <h2>{topic.title}</h2>
            <p>{topic.description}</p>
            {topic.examples.map((example, index) => (
              <div key={index} className={example.className}>
                <h3>{example.heading}</h3>
                {example.content.map((contentItem, i) => (
                  <div key={i} className="code-example">
                    {contentItem.language && <h4>{contentItem.language}</h4>}
                    {contentItem.description && <p>{contentItem.description}</p>}
                    {contentItem.code && <pre>{contentItem.code}</pre>}
                  </div>
                ))}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default TopicsData;
