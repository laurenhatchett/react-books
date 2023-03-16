import { useState } from "react"
import BookCreate from "./components/BookCreate"

const App = () => {
  const [books, setBooks] = useState([])

  const createBook = (title) => {
    const updatedBooks = [...books,{ 
      id: Math.round(Math.random() * 9999), 
      title }]
    setBooks(updatedBooks)
  }
  
  return <div>
    <BookCreate onCreate={createBook} />
    </div>

}

export default App