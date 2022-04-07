import { react, useState, useEffect } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faHtml5,
  faJava,
  faReact,
  faJsSquare,
  faGitAlt,
} from '@fortawesome/free-brands-svg-icons'
const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <div className="Container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          I studied computer science in high school and college, it is my first
          year after graduating college looking forward for my first tech job.
        </p>
        <p>
          I'm interested in backend technologies and challenging myself everyday
          working with my self in diffucult projects and learn something
          everyday.
        </p>
        <p>
          Im working with Java with Spring boot I've created a registration demo
          project that you can find in my github repositories, also learning
          React.js for frontend development.
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faJava} color="white" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faGitAlt} color="#5ED4F4" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faJava} color="#white" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
