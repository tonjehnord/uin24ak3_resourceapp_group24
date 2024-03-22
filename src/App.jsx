import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import Resources from './components/Resources'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/:category" element={<Resources />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App

//Kilder:
// LMS
// UIN2024_coursebase
// Forelesninger