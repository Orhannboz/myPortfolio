import react from 'react'
import Layout from '../Layout'
import LogoTitle from '../../assets/images/logo-o1.png'
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import React, { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['R', 'H', 'A', 'N']
  const jobArray = [
    'S',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>m</span>
          <img src={LogoTitle} alt="developer"></img>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={19}
          />
        </h1>
        <h2>Interested in backend technologies </h2>
        <Link to="/contact" className="flat-button">
          {' '}
          Contact me
        </Link>
      </div>
      <Logo></Logo>
    </div>
  )
}

export default Home
