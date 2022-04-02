import './App.css';
import Errorpage from './componants/Errorpage';
import OurNav from './componants/OurNav';
import Home from './componants/Home';
import Posts from './componants/Posts';
import Profile from './componants/Profile';
import Validation from './componants/Validation';
import Footer from './componants/Footer';
import Details from './componants/Details';
import { useState } from 'react';
import {  Navigate, Route, Routes } from 'react-router-dom';
function App() {
  let [body,setBody] = useState("");
  let [title,setTitle] = useState("");

  let onBody = (data) => {
    setBody(data);
  }

  let onTitle = (tData) => {
    setTitle(tData);
}
  return (
    <>
      <OurNav />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/posts' element={<Posts onBody = {onBody} onTitle = {onTitle}/>}/>
       <Route path='/posts/:id' element={<Posts />}/>
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Validation />} />
        <Route path='/details' element={<Details body={body} title={title}/>}/>
        <Route path='*' element={< Errorpage />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
