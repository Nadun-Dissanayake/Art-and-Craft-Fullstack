
import './App.css';
import Header from './common_components/header';
import Layout from './layout';
import IndexPages from './pages/indexpages';
import LogginPage from './pages/logginpage';
import RegisterPage from './pages/registerpage';
import Post from './post';
import {Route, Routes} from "react-router-dom";
import { UserContextProvider } from './userContext';
import CreateProduct from './pages/createProduct';
import PostPage from './pages/postPage';
import EditPost from './pages/editPost';
import Home_hero from './home_components/home_hero';
import Service from './home_components/service';
import About from './home_components/about';
import Blog from './home_components/blog';
import Contact from './home_components/contact';

function App() {
  return (
    <UserContextProvider>
      <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element = {<IndexPages/>}/>
        <Route path='/loggin' element = {<LogginPage/>}/>
        <Route path='/register' element = {<RegisterPage/>}/>
        <Route path='/create' element = {<CreateProduct/>}/>
        <Route path='/product/:id' element = {<PostPage/>}/>
        <Route path='/edit/:id' element = {<EditPost/>}/>
        <Route path='/home' element = {<Home_hero/>}/>
        <Route path='/service' element = {<Service/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/blog' element = {<Blog/>}/>
        <Route path='/contact' element = {<Contact/>}/>
      </Route> 
    </Routes>
    </UserContextProvider>
  );
}

export default App;
