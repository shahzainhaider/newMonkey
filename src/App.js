import './App.css';
import React,{useState} from 'react';
import LoadingBar from 'top-loading-bar/dist';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



const App=()=>{
  const pagesize=6

  const [progress, setProgress] = useState(0)
   
    return (
      <>
      <Router>
      <Navbar/>
      <LoadingBar
        color='blue'
        progress={progress}
      />
      <Routes>
      <Route exact path='/' element={<News setProgress={setProgress}  key='general' country="in" pagesize={pagesize} category="general"/>}/>
      <Route exact path='/health' element={<News setProgress={setProgress}  key='health' country="in" pagesize={pagesize} category="health"/>}/>
      <Route exact path='/sports' element={<News setProgress={setProgress}  key='sports' country="in" pagesize={pagesize} category="sports"/>}/>
      <Route exact path='/entertainment' element={<News setProgress={setProgress}  keyentertainment country="in" pagesize={pagesize} category="entertainment"/>}/>
      <Route exact path='/technology' element={<News setProgress={setProgress}  key='technology' country="in" pagesize={pagesize} category="technology"/>}/>
      <Route exact path='/science' element={<News setProgress={setProgress}  key='science' country="in" pagesize={pagesize} category="science"/>}/>
      <Route exact path='/business' element={<News setProgress={setProgress}  key='business' country="in" pagesize={pagesize} category="business"/>}/>
      </Routes>
      </Router>
      </>
    )
}

export default App
