import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
import '../styles/App.css';
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';
import Page from './Page';


// import Home from '../components/Home/Home';
// import News from '../components/News/News';
// import Contact from '../components/Contact/Contact';
// import ErrorPage from '../components/ErrorPage/ErrorPage';



const App = () => {
  return ( 
    <Router>
    <div className="app">
        <header>
          {<Header/>}
        </header>
        <main>
          <aside>
            {<Navigation/>}
          </aside>
          <section className='page'>
            {<Page/>}
          </section>
        </main>
        <footer>{<Footer />}</footer>
      </div>
    </Router>
   );
}
 
export default App;



// const App = () => {
//   return ( 
//     <Router>
//     <div className="App">
//       <header>
//         <nav>
//           <ul>
//             <li><NavLink to="/" exact="true">Start</NavLink></li>
//             <li><NavLink to="/news">Aktualności</NavLink></li>
//             <li><NavLink to="/contact">Kontakt</NavLink></li>
//           </ul>
//         </nav>
//         </header>
//           <section>
//             <Routes>
//               <Route path="/" exact element={<Home/>} />
//               <Route path="/news" element={<News/>} />
//               <Route path="/contact" element={<Contact />} />
//               <Route path="*" element={<ErrorPage />} />
//             </Routes>
//         </section>
//       </div>
//     </Router>
//    );
// }