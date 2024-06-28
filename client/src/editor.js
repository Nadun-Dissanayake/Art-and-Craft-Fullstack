import ReactQuill from "react-quill";

export default function Editor({value, onChange}){
    return(
        <ReactQuill value = {value} theme={'snow'} onChange={onChange}/>
    );
}