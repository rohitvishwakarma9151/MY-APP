import React, {useState} from 'react'


export default function TextForm(props) {


    const lengthofword = (text)=>{
      let count = 0
      for (let i = 0; i < text.split(" ").length; i++) {
          if (text.split(" ")[i] === "") {
              count++
          }
      }
      return text.split(" ").length - count
    }

    const handleUpClick = ()=>{
        // console.log("UpperCase was Clicked :" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase", "success");
    }

    const handleLoClick = ()=>{
        // console.log("UpperCase was Clicked :" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase", "success");
    }

    const handleClearClick = ()=>{
        // console.log("UpperCase was Clicked :" + text);
        let newText = '';
        setText(newText)
        props.showAlert("Text cleared", "success");
    }

    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }

    const handleCopy = ()=>{
      var text = document.getElementById("exampleFormControlTextarea1");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard", "success");
    }

    const handleExtraSpaces = ()=>{
      let newText = text.split(/[ ]+/); // Split by one or more spaces
      setText(newText.join(" ")) // Join the words with a single space
      props.showAlert("Remove extra sapces", "success");
    }

    const [text, setText] = useState('')
//   text = 'new text' // Wrong way to change the state
//   setText = 'new text' // Correct way to change the state
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#022f4b'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark'?'gray':'white',color: props.mode==='dark'?'white':'#022f4b'}}
            id="exampleFormControlTextarea1" rows="10"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button  className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button  className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

        
    </div>
    <div className='container my-2' style={{color: props.mode==='dark'?'white':'#022f4b'}}>
        <h2>Your text summary</h2>
        {/* {text.split(" ").filter(word => word.trim() !== "").length}: words */}
        <p>{lengthofword(text)}: words, {text.length} characters, {text.split('').filter(char => char === ' ').length} Space, {text.split('.').length} Sentence, {text.split('/[.!?]+/').length} Paragraphs </p>
        <p>{0.008 * text.split(" ").length} Minute reads</p>
        {/* <table className="table table-primary table-striped-columns">*/}

        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something in the above to preview it here'}</p>
    </div>
    </>
  )
}
