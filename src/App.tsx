import { useEffect, useState } from 'react'
import { Switch } from 'antd';
import jobData from './data';
import './App.css'

interface JOb {
  id: number,
  company: string,
  logo: string,
  logoBackground: string,
  position: string,
  postedAt: string,
  contract: string,
  location: string,
  website: string,
  apply: string,
  description: string,
  requirements: {
    contents: string,
    items: [],
  },
  role: {
    contents: string,
    items: []
  }



}

function App() {


  const [darkTheme, setDarkTheme] = useState(false)
  const [jobs, setJobs] = useState<JOb[]>()

  const onChange = (checked: boolean) => {
    console.log(checked)
    checked ? setDarkTheme(true) : setDarkTheme(false)
  };

  useEffect(() => {
    document.body.style.backgroundColor = darkTheme ? "#121721" : "#f2f2f2"
  }, [darkTheme])


  // useEffect(() => {
  //   console.log(jobData.map(job => job.company))
  // }, [])

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
          <div className={`job-hours-div ${darkTheme ? "dark" : ""}`}>
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

      <main className={`jobs-list-container ${darkTheme ? "dark" : ""} `}>
        {jobData.map((job) => {
          return <div key={job.id} className='job-div'>
            <div className="job-details">
              <p>
                <span>{job.postedAt}.</span>
                <span>{job.contract}</span>
              </p>
              <h2>{job.position}</h2>
              <p>{job.company}</p>
              <p>{job.location}</p>
            </div>
            <div className='logo-background' style={{backgroundColor: job.logoBackground}}>
              <img src={job.logo} className='logo' alt="logo" />
            </div>
          </div>
        })
        }
      </main>

    </>
  )
}

export default App
