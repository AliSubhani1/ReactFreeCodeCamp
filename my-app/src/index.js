import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Books from "./books";
import Book from "./Book";
//setup vars
const title = "Atlas of the Heart";
const author = "Brené Brown";
const img =
  "https://images-na.ssl-images-amazon.com/images/I/51KvAoff+ZL._SX407_BO1,204,203,200_.jpg";

const BookList = () => {
  return (
    <div className="booklist">
      {Books.map((book) => {
        const { img, author, title, id } = book;
        return <Book {...book} key={book.id}></Book>;
      })}
    </div>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
