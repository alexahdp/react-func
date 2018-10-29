import React, { useContext } from 'react';

// useContext

const BooksListContext = React.createContext({
  list: [],
  add(book) {
    // this.setState({
    //   list: [...this.list, book],
    // })
    this.list.push(book)
    console.log(this);
  }
});

class BooksListProvider extends React.Component {
  state = {
    list: [],
  }

  add(book) {
    this.setState({
      list: [...this.state.list, book],
    });
  }

  render() {
    return (
      <BooksListContext.Provider
        value={{
          ...this.state,
        }}
      >
        {this.props.children}
      </BooksListContext.Provider>
    );
  }
}

function addBook(book) {
  console.log(BooksListContext);
}

function App() {
  const books = useContext(BooksListContext);
  console.log('render')
  console.log(books)

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {books.list.map(book => (
            <li>(book.name)</li>
          ))}
        </ul>
        {/* <button onClick={() => addBook({name: 'test'})}>Add book</button> */}
        <button onClick={() => books.add({name: 'test'})}>Add book</button>
      </header>
    </div>
  );
}

export default App;
