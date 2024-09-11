import React from 'react';
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Temp from '../Temp';
import '../../SpeedTypingGame.css';

function TestTopic() {
    const codeString = `int age = 25`;
  return (
    <div className="article p-6">
      <section className="introduction">
        <p className='jost-regular mb-4 text-left text-2xl'><strong> 1. A Comparative Introduction to C++, Java, and Python Syntax</strong></p>
        <div className='border-3 border-gray-400 rounded-sm mb-3'></div>
        <p className='mb-4 topiccard leading-8 jost-regular'>
          When embarking on the journey of learning programming, one of the first
          hurdles to overcome is understanding the syntax of the language you've chosen.
          Syntax is essentially the grammar and structure of a programming language,
          dictating how elements like variables, data types, control flow, and functions
          should be written. This article will provide a comparative overview of the
          syntax of three popular programming languages: C++, Java, and Python.
        </p>
        <div className='border-1 border-gray-400 rounded-sm w-96 mb-6'></div>
      </section>

      <section className="variables-and-data-types">
        <p className='jost-regular mb-3 text-left text-2xl'><strong>Variables and Data Types</strong></p>
        <ul className='topiccard'>
          <li className='mb-4'>
            <strong>C++:</strong>
            <div className='flex justify-center items-center'>
              <Temp />
            </div>
          </li>
          <li>
            <strong>Java:</strong>
            <div className='flex justify-center items-center'>
              <Temp />
            </div>
          </li>
          <li>
            <strong>Python:</strong>
            <div className='flex justify-center items-center'>
              <Temp />
            </div>
          </li>
        </ul>
        <div className='border-1 border-gray-400 rounded-sm w-96 mb-6'></div>
      </section>

      <section className="control-flow">
        <p className='jost-regular mb-4 text-left text-2xl'><strong>Control Flow</strong></p>
        <p className='mb-4 topiccard leading-8 jost-regular'>
          All three languages provide similar control flow statements, such as
          `if`, `else`, `for`, `while`, and `switch`. However, the syntax may vary slightly.
        </p>
        <div className='border-1 border-gray-400 rounded-sm w-96 mb-6'></div>
      </section>

      <section className="functions">
        <p className='jost-regular mb-4 text-left text-2xl'><strong>Functions</strong></p>
        <p className='mb-4 topiccard leading-8 jost-regular'>
          Functions in C++, Java, and Python are defined using similar concepts, but the
          syntax differs.
        </p>
        <div className='border-1 border-gray-400 rounded-sm w-96 mb-6'></div>
        {/* Add code examples for each language */}
      </section>

      <section className="oop">
        <p className='jost-regular mb-4 text-left text-2xl'><strong>Object-Oriented Programming (OOP)</strong></p>
        <p className='mb-4 topiccard leading-8 jost-regular'>
          All three languages support OOP, but their syntax and paradigms differ slightly.
        </p>
        <div className='border-1 border-gray-400 rounded-sm w-96 mb-6'></div>
      </section>
    </div>
  );
}

export default TestTopic;