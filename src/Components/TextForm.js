import React, { useState } from "react";


export default function TextForm(props) {
  const handleupclick = () =>{
    // console.log('Uppercase was clicked😂' + Text);
    let newText = Text. toUpperCase()
    setText(newText)
    props.showalert("Converted to Uppercase",'Success')
    // setText('You Have Clicked On HandleupClick')
  }

  const handleloclick = () =>{
    // console.log('Uppercase was clicked😂' + Text);
    let newText = Text. toLowerCase()
    setText(newText)
    // setText('You Have Clicked On HandleupClick')
    props.showalert("Converted to Lowercase",'Success')

  } 

  const handleClearClick = () =>{
    let newText = ""  
    setText(newText)  
  }

  const handleCopy = () =>{
    let text = document.getElementById('myBox')
    text.select()
    navigator.clipboard.writeText(text.value)
  }

  const handleExtraSpaces = () =>{
    let newText = Text.split(/[ ]+/)
    setText(newText.join(' '))
  }

  const handleonchange = (event) =>{
    // console.log('ON Change');
    setText(event.target.value)
  }
  
  const [Text, setText] = useState('')
// text = 'new text' // wrong way to change the state
// setText('naya Text') // Correct Way To change the state
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
      <h1>{props.heading} </h1>
      <div className="mb-3">   
        <textarea className="form-control" value = {Text} onChange={handleonchange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white'}}  id="myBox" rows="7"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleupclick}>Convert To Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleloclick}>Convert To Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
      <h2>Your Text Summary</h2>
      <p>{Text.split(" ").length} Words and {Text.length} Characters </p>
      <p>{.008 * Text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{Text.length > 0 ? Text: "Enter.... something in the textbox above to preview it here 👁️"}</p>
    </div>
    </>
  );
}

// 8 * finish