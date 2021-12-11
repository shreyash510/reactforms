import { useState } from "react";

const TextConverter = () => {
const [text, setText] = useState('');
const onText=(e)=>{
    setText(e.target.value);
}
const btnClick=()=>{
    let nexText = text.toUpperCase();
    setText(nexText);
}
const btnClick1=()=>{
    let nexText = text.toLowerCase();
    setText(nexText);
}
const clear=()=>{
    // let newText = text;
    setText(' ');
}
 
  return (
    <>
      <div className="container my-5">
        <div className="mb-3">
          <h2>Text Converter app</h2>
          <textarea value={text} onChange={onText} className="form-control" rows="5" ></textarea>
        </div>
        <button onClick={btnClick} className="btn btn-primary mx-3">UpperCase</button>
        <button onClick={btnClick1} className="btn btn-primary mx-3">LowerCase</button>
        <button onClick={clear}className="btn btn-primary">clear all</button>
        
        <h3 className="my-5">preview</h3>
        <p>{text}</p>
        </div>
    </>
  );
};
export default TextConverter;
