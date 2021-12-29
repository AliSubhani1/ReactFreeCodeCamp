import React from "react";

const Book = (props) => {
  const { img, title, author, children } = props;
  // console.log(props);
  //attribute, eventHandler
  //onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hello");
  };
  const complexHandler = (auth) => {
    console.log(auth);
  };
  return (
    <article className="book">
      <img src={img} alt=""></img>
      <h1 onMouseOver={() => console.log({ title })}>{title}</h1>

      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Reference Example
      </button>
      <button type="button" onClick={() => complexHandler(author)}>
        Complex example
      </button>
    </article>
  );
};

export default Book;
