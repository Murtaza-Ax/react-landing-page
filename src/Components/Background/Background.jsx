import React from 'react'
import video from '../../assets/video1.mp4';
import img1 from "../../assets/image1.png";
import img2 from "../../assets/image2.jpg";
import img3 from "../../assets/image3.jpg";
import './Background.css'

const Background = ({heroCount, playStatus}) => {
  // if playStatus is true, play video 
  if (playStatus) {
    return <video className='background fade-in' autoPlay loop muted>
      <source src={video} type='video/mp4' />
    </video>
  }

  // else check heroCount and display images accordingly
  else if (heroCount === 0) {
    return <img src={img1} className='background fade-in' alt="" />
  }
  else if (heroCount === 1) {
    return <img src={img2} className='background fade-in' alt="" />
  }
  else if (heroCount === 2) {
    return <img src={img3} className='background fade-in' alt="" />
  }
}

export default Background
