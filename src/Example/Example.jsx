import React from 'react'
import { Route, Routes } from 'react-router-dom'

const Home = () => <h1>Home page</h1>
const About = () => <h1>About us page</h1>
const Example = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
    </Routes>
  )
}

export default Example;
