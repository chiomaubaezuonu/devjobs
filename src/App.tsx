import { useState } from 'react'
import { Switch } from 'antd';


import './App.css'

function App() {

  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };


  return (
    <>

      <header className='header'>
        <div className="inner">
          <div className='logo'>
            <img src="/images/logo.svg" alt="header-logo" />
          </div>
          <div className="theme">
            <img src="/images/sun.svg" className='sun' alt="sun" />
            <Switch defaultChecked onChange={onChange} checked={false} />
            <img src="/images/moon.svg" className='moon' alt="moon" />
          </div>
        </div>
        <div className="header-filters">
          <input type="text" className='search-input' placeholder='Filter by title, comnpanies, expertise...' />
          <input type="text" className='location-filter' placeholder='Filter by location...' />
          <div className="job-hours-div">
            <div className="hours">
              <span className='span1'>
                <span className='span2'>
                </span>
              </span>
              <span className='job-hours-text'>Full Time Only</span>
            </div>
            <button className='search-btn'>Search</button>
          </div>
        </div>
      </header>
      <main>

      </main>

    </>
  )
}

export default App
