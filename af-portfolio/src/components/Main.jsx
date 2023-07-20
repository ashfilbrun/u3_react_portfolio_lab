import React from 'react'
// import Header from './Header'
// import Footer from './Footer'
import SkillsList from './SkillsList'
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function Main () {
  return (
    <div>
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/AboutMe' element={<AboutMe />} />
            <Route path='/SkillsList' element={<SkillsList />} />
            <Route path='/ContactMe' element={<ContactMe />} />
          </Routes>
        </Router>
      </div>
    </div>
  )
}