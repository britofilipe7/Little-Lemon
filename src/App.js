import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/Home";
import BookingPage from "./components/pages/BookingPage";
import React, { useState } from 'react';
import AppContext from "./components/AppContext";

function App() {

  const [state, setState] = useState({
    "initialTimes": ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
    "dates": {},
  });

  return (
    <AppContext.Provider value={{ state, setState }}>
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/booking' element={<BookingPage availableTimes={state["availableTimes"]}/>} />
            </Routes>
        </Router>
    </AppContext.Provider>

  );
}

export default App;
