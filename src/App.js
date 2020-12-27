import './App.css';
import Header from './components/sidebar/header';
import Home from "./components/home/home";
import About from "./components/about/about";
import Skills from "./components/skills/skills"
function App() {
  return (
    <div className="main-wrapper">
      <Header />

      <main>
        <Home />
        <About />
        <Skills />
      </main>
    </div>
  );
}

export default App;
