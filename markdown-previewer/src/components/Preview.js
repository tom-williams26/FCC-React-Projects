import React from 'react'
import { marked } from 'marked'
const Preview = ({textareaInput}) => {

  const parseMarkdown = markdownText => {
    const htmlText = markdownText
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      // .replace(/(?=`)`(?!`)[^`]*(?=`)`(?!`)/gm, '<code>$1</code>')
      // .replace(/(?=`)`(?!`)[^`](.*?)(?=`)`(?!`)/gm, '<code>$1</code>')
      .replace(/(`)(\s?[^\n,]+\s?)(`)/gim, '<code>$1</code>')
      .replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>')
      .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
      .replace(/_(.*)_/gim, '<i>$1</i>')
      .replace(/\*\*_(.*)_\*\*/gim, '<strong><i>$1</i></strong>')
      .replace(/\n$/gim, '<br />')
    console.log(htmlText);

    /* For heading (h1, h2, h3 tags), we want a string that starts with a hash(es) and 
       captures everything after those characters. */
    // const h1 = /^# (.*$)/gim;
    // const h2 = /^## (.*$)/gim;
    // const h3 = /^### (.*$)/gim;

    // const code = /(.*?)``(.*?)/;
    // const codeBlock = //;

    /* For blockquote, we want a line that starts with> and captures everything 
      after that character. Note: \> represents escaping > character. That means, 
      don’t treat > as a part of special regEx character but as a part of that text itself. */
    // const bq = /^\> (.*$)/gim;
    // For bold text, we want to capture a text between 2 asterisks.
    // const bold = /\*\*(.*)\*\*/gim;

    // const italics = /\*(.*)\*/gim;
    // const boldItalics = /\*\*\_(.*)\_\*\*/gim;

    // const strikedOut = //;
    // const link = /\[(.*?)\]\((.*?)\)/gim;
    // const table = //;
    // const lists = //;
    // const orderedList = //;

    // const image = /!\[(.*?)\]\(.*?)\)/gim;

    // const lineBreak = /\n$/gim;

    return htmlText.trim(); 
  }
  // console.log(parseMarkdown(text))

  return (
    <div className="preview-layout">
      <div className="toolbar">
        <p className="title">Preview</p>
      </div>
      <div id="preview" dangerouslySetInnerHTML={{__html:marked.parse(textareaInput)}}></div>
    </div>
  )
}

export default Preview


/*
https://chubakbidpaa.com/interesting/2021/09/28/regex-for-md.html
https://markdown-previewer.freecodecamp.rocks/
https://regexr.com/3cad6
https://github.github.com/gfm/#precedence
https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#quoting-code
https://github.github.com/gfm/
https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks
*/