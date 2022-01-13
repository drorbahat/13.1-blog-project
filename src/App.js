import Navbar from './components/Navbar.js'
import CreateBlog from './components/CreateBlog.js'

import Home from './components/Home.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App-root">
        <Navbar />
        <div className='App-content'>
          <Routes>
            <Route path='/Home' element={<Home />} />
            <Route path='/CreateBlog' element={<CreateBlog/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;