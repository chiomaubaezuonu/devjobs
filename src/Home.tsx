import { useEffect, useState } from 'react'
import { Switch, Modal } from 'antd';
import jobData from './data';
import './App.css'

interface Job {
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
    content: string,   /* Why does having this throw netlify error that `Job is declared but never used` and ask of the header curve too*/
    items: string[],
  },
  role: {
    content: string,
    items: string[]
  }
}

function Home() {


  const [darkTheme, setDarkTheme] = useState(false)
  const [displayedJobs, setDisplayedJobs] = useState(12)
  const [isChecked, setIsChecked] = useState(false)
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)


  const onChange = (checked: boolean) => {
    checked ? setDarkTheme(true) : setDarkTheme(false)
  };

  useEffect(() => {
    document.body.style.backgroundColor = darkTheme ? "#121721" : "#f2f2f2"
  }, [darkTheme])


  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSelectedJob = (id: number): void => {
    const selected = jobData.find(job => job.id === id)
    console.log(selected)
    if (selected) {
      setSelectedJob(selected)
    }

  }




  return (
    <>
      {!selectedJob ?
        <div>
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
                  <span className={`tick-bg ${!isChecked ? "unchecked" : ""}`} onClick={() => setIsChecked(!isChecked)}>
                    <span className={`tick ${!isChecked ? "untick" : ""}`}>
                    </span>
                  </span>
                  <span className='job-hours-text'>Full Time Only</span>
                </div>
                <button className='search-btn'>Search</button>
              </div>
              <div className="mobile-input-wrapper">
                <input className={`search-input-mobile ${darkTheme ? "dark" : ""}`} type="text" placeholder='filter by title...' required />
                <img src="/images/filter-mobile.svg" onClick={showModal} className='mobile-filter' alt="filter-mobile" />
                <div className="search-icon-div">
                  <img src="/images/mobile-search.svg" className='mobile-search' alt="mobile-search" />
                </div>
              </div>
            </div>
          </header>
          <Modal className='modal' open={isModalOpen} onOk={handleOk} onCancel={handleCancel} getContainer={false} >
            <select className="location-filter-mobile"><option value="false">Filter by location…</option><option value="Germany">Germany</option><option value="Japan">Japan</option><option value="New Zealand">New Zealand</option><option value="Russia">Russia</option><option value="Singapore">Singapore</option><option value="United Kingdom">United Kingdom</option><option value="United States">United States</option></select>
            <div className="hours">
              <span className={`tick-bg ${!isChecked ? "unchecked" : ""}`} onClick={() => setIsChecked(!isChecked)}>
                <span className={`tick ${!isChecked ? "untick" : ""}`}>
                </span>
              </span>
              <span className='job-hours-text'>Full Time Only</span>
            </div>
            <button className='load-more-btn mobile' onClick={() => setDisplayedJobs(15)}>Load More</button>
          </Modal>
          <main className={`jobs-list-container ${darkTheme ? "main-dark" : ""} `}>
            {jobData.slice(0, displayedJobs).map((job) => {
              return <div key={job.id} className={`job-card  ${darkTheme ? "dark" : ""} `} onClick={() => (handleSelectedJob(job.id))}>
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
            {displayedJobs === 12 ? <button className='load-more-btn mobile' onClick={() => setDisplayedJobs(15)}>Load More</button> : ""}
          </main>
        </div>
        :
        <div className="selectedJOb">
          <p>{selectedJob.company}</p>
        </div>
}
    </>
  )
}

export default Home
