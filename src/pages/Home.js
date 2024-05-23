import React from 'react'
import LindIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitIcon from '@material-ui/icons/GitHub';
import "../styles/Home.css";

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Welcome, This is YOKESH B.</h2>
        <div className='prompt'>
          <p>A Developer with a passion for learning.</p>
          <LindIcon />
          <EmailIcon />
          <GitIcon />
        </div>
      </div>
      <div className='skills'>
        <h1>Skills:</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-end:</h2>
            <span>html, css , js , react</span>
          </li>
          <li className='item'>
            <h2>Back-end:</h2>
            <span>php</span>
          </li>
          <li className='item'>
            <h2>Database:</h2>
            <span>sql, mongodb</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home;
