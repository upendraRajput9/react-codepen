import React, { useState ,useEffect} from 'react';
import Editor from './Editor';
import uselocalstorage from './useLocalstorage';

export default function App() {
  const [html, setHtml] = uselocalstorage('html',"");
  const [css, setCss] = uselocalstorage('css',"");
  const [js, setJs] = uselocalstorage('js',"");
  const [sourceDoc,setDoc] = useState("")
useEffect(()=>{
const timeout = setTimeout(()=>{
  setDoc(
    `<html>
  <body>${html}</body>
  <style>${css}</style>
  <script>${js}</script>
  </html>`
  )
},250)

return ()=>clearTimeout(timeout)
},[html,css,js])

  const editors = [{ language: "xml", displayName: "HTML", value: html, onChange: setHtml },
  { language: "css", displayName: "CSS", value: css, onChange: setCss },
  { language: "javascript", displayName: "JavaScript", value: js, onChange: setJs }
  ]


  return (
    <>
    <main>
      <header>
        <h1>Code Editor</h1>
        <p>You can write and preview HTML, CSS and JavaScript!</p>
      </header>
      <div className='field ' >
        {
          editors.map(editor=> <Editor {...editor} key={editor.displayName}/>)
        }
       
      </div>
      <div className='field output'>
        <iframe
        srcDoc={sourceDoc}
          title='output'
          sandbox="allow-scripts"
          frameBorder='0'
          width="100%"
          height="100%"
        />
      </div>
      </main>
    </>
  )
}
