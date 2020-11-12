import React from "react";
import ReactDom from "react-dom";
import "./style.css";

//iterating the object results

const books = [
  {
    title: "Origin",
    author: "Dan Brown",
    img:
      "data:image/jpeg;base64,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",
  },
  {
    title: "Inferno",
    author: "Dan Brown",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPWAPfFlVzkmd-MxHjKOzTucQMWsCf7mIWdQ&usqp=CAU",
  },
];

function BookList() {
  return (
    <section className="Booklist">
      {books.map((book) => {
        return <Book book={book}></Book>;
      })}
    </section>
  );
}
const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <section className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h3>{author}</h3>
    </section>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
