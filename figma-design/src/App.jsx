import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Roadmap from './components/Roadmap1'
import Frequent from './components/frequent'
import ExploreCard from './components/ExploreCard'
import Footer from './components/Footer'


export default function App() {
  return (
    <>
    <Header/>
    <About/>
    <Roadmap/>
   <Frequent/>
   <ExploreCard/>
   <Footer/>
    </>
  )
}