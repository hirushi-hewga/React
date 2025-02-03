import './App.css';

const App = () => {
    const book = {}
    book.title = 'The Name of the Wind'
    book.author = 'Patrick Rothfuss'
    book.genres = 'Fantasy'
    book.pageCount = 662
    book.reviews = {}
    book.reviews.MasterfulStorytelling = 'Readers note that Rothfuss\'s writing style is exceptionally captivating, featuring rich descriptions and poetic elements that create a unique atmosphere throughout the novel.'
    book.reviews.DeepCharacters = 'The book receives praise for its depth and complexity of characters, particularly Kvothe and his friends, all possessing distinct personalities and histories that add layers to the narrative.'
    book.reviews.EnchantingWorld = 'The setting—a world filled with magic and mysteries—draws readers in, sparking a desire to learn more about its history and cultures.'
    book.image = "https://m.media-amazon.com/images/I/91UzPegYyjL._AC_UF1000,1000_QL80_.jpg"
    
    return (
      <div className="book">
        <div className="info">
          <img src={book.image}></img>
          <div className="context">
            <h1>Title: {book.title}</h1>
            <p>Author: {book.author}</p>
            <p>Genres: {book.genres}</p>
            <p>Page count: {book.pageCount}</p>
          </div>
        </div>
        <div className="reviews">
          <h2>Masterful Storytelling</h2>
          <p>{book.reviews.MasterfulStorytelling}</p>
          <h2>Deep Characters</h2>
          <p>{book.reviews.DeepCharacters}</p>
          <h2>Enchanting World</h2>
          <p>{book.reviews.EnchantingWorld}</p>
        </div>
      </div>
    );
}

export default App;

// npx create-react-app project-name - створити проект
// npm start - запуск проекту
// npm i - встановити модулі