import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';


const Home = () => (
  <h1>Strona Główna</h1>
)


const News = () => (
  <h1>Akrualności</h1>
)

const Contact = () => (
  <h1>Kontakt</h1>
)

function App() {
  return (
    <Router>
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><Link to='/'>Start</Link></li>
            <li><Link to='/news'>Aktualności</Link></li>
            <li>Kontakt</li>
          </ul>
        </nav>
        </header>
        <Route path='/' exact component={Home} />
        <Route path='/news' component={News} />
        <Route path='/contact' component={Contact}/>
      </div>
    </Router>
  );
}

export default App;
