import {Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import SearchResult from './pages/searchResult/SearchResult';

const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:query/:startIndex' element={<SearchResult />} />
      </Routes>
    </div>
  )
}

export default App
