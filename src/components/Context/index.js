import React, { useContext } from 'react';

// useContext

const BooksListContext = React.createContext({
  list: [
    {name: "три мушкетера"},
    {name: "Числа"}
  ],
  add(book) {
    // добавление не работает
    // this.list.push(book)
  }
});

function App() {
  const books = useContext(BooksListContext);

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {books.list.map(book => (
            <li>{book.name}</li>
          ))}
        </ul>
        <button onClick={() => books.add({name: 'test'})}>Add book</button>
      </header>
    </div>
  );
}

export default App;
