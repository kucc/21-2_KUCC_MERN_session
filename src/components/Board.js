import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactHtmlParser from 'react-html-parser';
import Axios from 'axios';


function Board(props) {
    const [Content, setContent] = useState({
        title: '',
        content: '',
    });
    
    const [viewContent, setViewContent] = useState([]);

    useEffect(()=>{
        Axios.get('http://localhost:3065/board/insert').then((response) => {
          setViewContent(response.data);
        })
      },[viewContent])

    const submitContent = () => {
        Axios.post('http://localhost:3065/board/insert', {
          title: Content.title,
          content: Content.content
        }).then(() => {
          alert('등록 완료!');
        })
      };


    const getValue = e => {
        const { name, value } = e.target;
        console.log(name, value);
        setContent({ ...Content, [name]: value})
        console.log(Content);
    };


  return (
    <div className='Board'>
      <Link style={{ textDecoration: "none" }} to="/">
        <h1>HOME</h1>
      </Link>
      
      <h1> 게시판 </h1>
      <div className= 'container'>
        {viewContent.map(element =>
            <div style={{ border: '1px solid #333' }}>
                <h2> { element.title } </h2>
                <div> {ReactHtmlParser(element.content)}
                </div>
            </div>
        )}
      </div>

      <div className= 'form-wrapper'>
        <input className='title-input' type='text' placeholder='제목을 입력하세요' onChange={ getValue } name= 'title'></input>
        <input className='text-area' type='text' placeholder='내용을 입력하세요' onChange={ getValue } name= 'content'></input>
      </div>
      <button className='submit-button' onClick={submitContent}> 입력 </button>
    </div>
  );
}

export default Board;