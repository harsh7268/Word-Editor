import React, {useState} from 'react'


export default function TextForm(props) {
  console.log(props.heading);
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('success','Convert to upperCase')
    }
    const handleLowClick = () =>{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert('success','Convert to lowerCase')
  }
  const handleClearClick = () =>{
    let newText = '';
    setText(newText);
    props.showAlert('success','Clear Text');
}
const handleCopyClick = () =>{
  navigator.clipboard.writeText(text);
  document.getSelection().removeAllRanges();
  props.showAlert('success','Copy text in clipboard');
}
const handleReverseClick = () =>{
  let newText = text.split('').reverse().join('');
  setText(newText);
  props.showAlert('success','Text is reverse');
}
const handleRemoveSpaceClick = () =>{
  let newText = text.split(/[ ]+/).join(' ');
  setText(newText);
  props.showAlert('success','Remove all extra spaces');
}
    const handleOnChange = (event) =>{
       // console.log('handle on change');
        setText(event.target.value);
        
    }
const [text, setText] = useState('');
//setText("new text"); // Correct way to change the state
//text = "new text";   // Wrong Way to change the state
  return (
<div className='container' style={props.mode}>
 <h2 className='my-3'>{props.heading} </h2>
<div className="mb-3">
  <textarea style={props.mode} className="form-control" onChange={handleOnChange} value={text} id="textBox" rows="5"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert To UppperCase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert To LowerCase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}>Copy</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleReverseClick}>Reverse</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleRemoveSpaceClick}>Remove extra spaces</button>
<p className="my-3">{text.split(/\s+/).filter((element) =>{return element.length!==0}).length} words , {text.length} characters</p>
<p >{0.008*text.split(/[\s+]/).filter((element) =>{return element.length!==0}).length} minutes read</p>
<h2 className="my-2">Preview</h2>
<p>{text===''?'Nothing to preview':text}</p>
</div>
  )
}
