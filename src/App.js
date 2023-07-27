import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './pages/Home';
import About from './pages/About'; 
import Articles from './pages/Articles';
import Article from './pages/Article';
import NotFound from './pages/PageNotFound';
import Login from './pages/login';
import CreateAccount from './pages/createAccount';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <NavBar></NavBar>
          <div id="page-body">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/articles" element={<Articles/>}/>
              <Route path="/articles/:articleId" element={<Article/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="create-account" element={<CreateAccount/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
