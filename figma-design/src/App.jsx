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
import Features from './components/Feature'
import Tokenomics from './components/Tokenomic'


export default function App() {
  return (
    <>
    <Header/>
    <div style={{ height:"700px", paddingTop:"150px" , background:"rgb(0,22,29)"}}>
    <Features/>

    </div>
    <About/>
    <div style={{ height:"700px",  background:"rgb(0,22,29)"}}>

    <Tokenomics/>
    </div>
    <Roadmap/>
   <Frequent/>
   <ExploreCard/>
   <Footer/>
    </>
  )
}