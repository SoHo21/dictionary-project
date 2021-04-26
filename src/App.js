import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container"> 
      <header className="App-header">
      DICTIONARY
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        Coded by Sofia. <a href="https://github.com/SoHo21/dictionary-project" target="_blank" rel="noreferrer"> Open-sourced on GitHub </a>  and <a href="https://angry-spence-c7ac4e.netlify.app/" target="_blank" rel="noreferrer"> hosted on Netlify</a>.
      </footer>
      </div>
    </div>
  );
}