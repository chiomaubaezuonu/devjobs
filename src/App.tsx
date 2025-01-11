import { useEffect, useState } from 'react'
import { Switch } from 'antd';


import './App.css'

function App() {


  const [darkTheme, setDarkTheme] = useState(false)
  const onChange = (checked: boolean) => {
    console.log(checked)
  checked ? setDarkTheme(true) : setDarkTheme(false)
  };

  useEffect(() => {
document.body.style.backgroundColor = darkTheme ? "#121721" : "#f2f2f2"
  }, [darkTheme])

  return (
    <>

      <header className='header'>
        <div className="inner">
          <div className='logo'>
            <img src="/images/logo.svg" alt="header-logo" />
          </div>
          <div className="theme">
            <img src="/images/sun.svg" className='sun' alt="sun" />
            <Switch onChange={onChange} defaultChecked={false} />
            <img src="/images/moon.svg" className='moon' alt="moon" />
          </div>
        </div>
        <div className="header-filters">
          <input type="text" className={`search-input ${darkTheme ? "dark" : ""}`} placeholder='Filter by title, comnpanies, expertise...' />
          <input type="text" className={`location-filter ${darkTheme ? "dark" : ""}`} placeholder='Filter by location...' />
          <div className={`job-hours-div ${darkTheme ? "dark": ""}`}>
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
      <main className={darkTheme ? "dark" : ""}>
        
      </main>

    </>
  )
}

export default App
