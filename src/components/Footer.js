import React from 'react'
import FbIcon from '@material-ui/icons/Facebook';
import InstaIcon from '@material-ui/icons/Instagram';
import GitIcon from '@material-ui/icons/GitHub';
import LindIcon from '@material-ui/icons/LinkedIn';
import "../styles/Footer.css"

function Footer() {
  return (
    <>
    <div className='footer'>
        <div className='socialMedia'>
            <FbIcon />
            <InstaIcon />
            <GitIcon />
            <LindIcon />
        </div>
        <p> &copy;2023 YokiEditz.fun</p>
    </div>
    </>
  )
}

export default Footer;