import './App.css';

const App = () => {
    const titleText = "Dashboard project"

    return (
      <>
        <div className="title">
          <h1>{titleText}</h1>
        </div>
        <div className="context">
          <p>Content text</p>
        </div>
      </>
    );
}

export default App;

// npx create-react-app project-name - створити проект
// npm start - запуск проекту
// npm i - встановити модулі