import React from 'react';

import './index.css';

function Post(props) {
  return <article>
    <h3>{props.title}</h3>
    <p>{props.text}</p>
    <p>{props.author}</p>
    <p>{props.date}</p>
     <img alt={props.alt} src={props.image} style={{height: 400, width: 500}} /> 
     {props.highlights.map((highlights)=>
     <li key={highlights.indexOf()}>{highlights}</li>
     )}
    </article>;
}

export default Post;
