import './App.css';
import './index.css';
import Content from './Components/Content';
import Detail from './Components/Detail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    
    <BrowserRouter>
     <Link to='/'><h3 className='heading my-5'>Homepage</h3></Link>
     <Routes>
      <Route path="/" element={<Content />} />
      <Route path="/:slug" element={<Detail />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
