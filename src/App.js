import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import NavbarComponent from './components/NavbarComponent';
import Photos from './components/Photos';
import About from './components/About';
import Photo from './components/Photo'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  const [page, setPage] = useState('Photos')

  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <Switch>
          <Route exact path="/">
            <Photos />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Photos/:id">
          <Photo />
          </Route>
        </Switch>


       
      </BrowserRouter>
    </>

  );
}

export default App;
