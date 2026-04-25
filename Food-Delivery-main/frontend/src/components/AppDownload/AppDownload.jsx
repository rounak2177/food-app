import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Exprience Download <br/>BaMEE App</p>
      <div className="app-download-platforms">
        <Link to="/play-store" aria-label="Open BaMEE Google Play page">
          <img src={assets.play_store} alt="Google Play" />
        </Link>
        <Link to="/app-store" aria-label="Open BaMEE App Store page">
          <img src={assets.app_store} alt="App Store" />
        </Link>
      </div>
    </div>
  )
}

export default AppDownload
