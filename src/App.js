
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import "./Admin/File/css/dashboard.css"
import "./Admin/File/css/Custom.css"
import Sidebar from './Admin/Layouts/Sidebar';
import Navbar from './Admin/Layouts/Navbar';
import Index from './Admin/Index';
import User from './Admin/User/User';
import Profile from './Admin/User/Profile';
import About from './Admin/User/About';
import Footer from './Admin/Layouts/Footer';
import Post from './Admin/Posts/Post';
import PostData from './Admin/Posts/PostData';
import { Counter } from './Admin/redux/Counter';

function App() {
  return (
    <>
    <BrowserRouter>
    <div className="wrapper">
      <Sidebar />
      <div className="main">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path='/' element={<Index />} />
            <Route>
              <Route path='/user' element={<User />} />
              <Route path='/user/profile' element={<Profile />} />
              <Route path='/user/about' element={<About />} />
            </Route>
            <Route path='/post' element={<Post />} />
            <Route path='/post/postdata/:id' element={<PostData />} />
            <Route path='/counter' element={<Counter/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
