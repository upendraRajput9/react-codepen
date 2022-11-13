import React,{useState} from 'react'
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled, Controlled as ControlledEditor } from "react-codemirror2"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCompressAlt,faExpandAlt} from "@fortawesome/free-solid-svg-icons"

export default function Editor(props) {
  const [open,setOpen] = useState(true)


  let { displayName,
    value,
    onChange,
    language
  } = props
  const handleChange = (editor, data, value) => {
    onChange(value)
  }
  return (
    <div className={`editor ${open?"":"collapse"}`} >
      <div className='editor-header'>
        {displayName}
        <button className='collapse-btn' onClick={()=>setOpen(prevOpen=>!prevOpen)}>
          <FontAwesomeIcon icon={open?faCompressAlt:faExpandAlt}/>
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          line: true,
          mode: language,
          theme: "material",
          lineNumbers: true
        }}
      />
    </div>
  )
}
