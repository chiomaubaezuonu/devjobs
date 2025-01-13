import { useEffect, useState } from 'react'
import { Switch } from 'antd';
import jobData from './data';
import './App.css'

// interface JOb {
//   id: number,
//   company: string,
//   logo: string,
//   logoBackground: string,
//   position: string,
//   postedAt: string,
//   contract: string,
//   location: string,
//   website: string,
//   apply: string,
//   description: string,
//   requirements: {
//     contents: string,    Why does having this throw netlify error that `Job is declared but never used`
//     items: [],
//   },
//   role: {
//     contents: string,
//     items: []
//   }



// }

function App() {


  const [darkTheme, setDarkTheme] = useState(false)
  const [displayedJobs, setDisplayedJobs] = useState(12)


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
        {jobData.slice(0, displayedJobs).map((job) => {
          return <div key={job.id} className='job-card'>
            <div className="job-details">
              <div className='logo-background' style={{ backgroundColor: job.logoBackground }}>
                <img src={job.logo} className='logo' alt="logo" />
              </div>
              <div className='job-post-div'>
                <span className='job-post'>{job.postedAt} <span className="dot"> . </span></span>
                <span className='contract'>{job.contract}</span>
              </div>
              <p className='job-title'>{job.position}</p>
              <p className='company'>{job.company}</p>
            </div>
            <p className='job-location'>{job.location}</p>
          </div>
        })
        }
        {displayedJobs === 12 ? <button className='load-more-btn' onClick={() => setDisplayedJobs(15)}>Load More</button> : ""}
      </main>

    </>
  )
}

export default App
