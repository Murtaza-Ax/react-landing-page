import React, { useState, useEffect } from 'react'
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

const App = () => {
  // Text
  let heroData = [
    {text1: "Dive into", text2: "what you love"},
    {text1: "Indulge", text2: "your passions"},
    {text1: "Give in to", text2: "your passions"}
  ];

  // State to keep track of the current index
  const [heroCount, setHeroCount] = useState(2);
  // State to manage the video status
  const [playStatus, setPlayStatus] = useState(false);


  useEffect(() => {
  // interval that updates heroCount every 3 seconds
    setInterval(() => {
      setHeroCount((prevCount) => prevCount === 2 ? 0 : prevCount + 1);
    }, 3000);
  },[]);


  return (
    <div>
      <Background heroCount={heroCount} playStatus={playStatus} />
      <Navbar />
      <Hero heroData={heroData[heroCount]} heroCount={heroCount} setHeroCount={setHeroCount} playStatus={playStatus} setPlayStatus={setPlayStatus} />
    </div>
  )
}

export default App
