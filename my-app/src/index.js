import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//setup vars
const title = "Atlas of the Heart";
const author = "Brené Brown";
const img =
  "https://images-na.ssl-images-amazon.com/images/I/51KvAoff+ZL._SX407_BO1,204,203,200_.jpg";

const firstBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/51KvAoff+ZL._SX407_BO1,204,203,200_.jpg",
  title: "Atlas of the Heart",
  author: "Brené Brown",
};

const BookList = () => {
  return (
    <div className="booklist">
      <Book img={firstBook.img} />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  );
};
const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt=""></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
