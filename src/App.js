import { useState } from 'react';
import { marked } from 'marked';
import './App.css';

function App() {

  const [text, setText] = useState(`
  # h1
  ## h2
  [title](https://www.rido.com)
  \`code\`
  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`
  - First item
  - Second item
  - Third item
  > blockquote
  ![alt text](img.jpg)
  **bold text**
  `); 

  /* marked.setOptions({
    breaks: true
  }) */

  return (
    <div id='container'>

      <div id='editor-container'>

        <div className='title'>
          <h2>Editor</h2>
        </div>

        <textarea
        id='editor'
        value={text}
        onChange={(e) => setText(e.target.value)}
        ></textarea>

      </div>

      <div id='preview-container'>

      <div className='title'>
        <h2>Preview</h2>
      </div>

        <div 
        id='preview' 
        dangerouslySetInnerHTML={{
          __html: marked(text)
        }}
        ></div>
        
      </div>

    </div>
  );
}

export default App;
