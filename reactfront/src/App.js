import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// importamos los componentes
import CompShowBlogs from './blog/ShowBlogs';
import CompCreateBlog from './blog/CreateBlog';
import CompEditBlog from './blog/EditBlog';
import CompShowUsers from './user/ShowUsers';
import CompCreateUser from './user/CreateUser';
import CompUseUser from './user/UseUser';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompShowBlogs/>}/>
          <Route path='/create' element={<CompCreateBlog/>}></Route>
          <Route path='/edit/:id' element={<CompEditBlog/>}></Route>
          <Route path='/users' element={<CompShowUsers/>}></Route>
          <Route path='/createUser' element={<CompCreateUser/>}></Route>
          <Route path='/useUser' element={<CompUseUser/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
