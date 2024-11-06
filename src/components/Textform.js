import React,{useState} from 'react'


export default function Textform(props) {
    const handleUpClick=()=>{
        //console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","success");

    }
    const handleLoClick=()=>{
      //console.log("Uppercase was clicked" + text);
      let newText=text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to lowercase","success");

  }
  const handleClearClick=()=>{
    //console.log("Uppercase was clicked" + text);
    let newText='';
    setText(newText)
    props.showAlert("clear text","success");

}
    const handleOnChange=(event)=>{
        //console.log("On change");
        setText(event.target.value);
    }
    const handleCopy=()=>{
      var text=document.getElementById("myBox");
      text.select('');
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard","success");

    }

    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("ExtraSpace are provided","success");

    }

    const [text,setText] = useState('');

  return (
    <>
    <div className="container"  style={{color:props.mode==='dark'?'white':'black'}}>
           <h1>{props.heading} </h1>
 
<div class="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
</div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}> Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length}  character</p>
      <p>{0.08*text.split(" ").length}Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
