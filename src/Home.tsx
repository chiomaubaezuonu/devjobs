import { useEffect, useState } from 'react'
import jobData from './data';
import {  Modal } from 'antd';
import './App.css'
import Header from './Header';

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


    const [isModalOpen, setIsModalOpen] = useState(false);

   

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


    useEffect(() => {
        document.body.style.backgroundColor = darkTheme ? "#121721" : "#f2f2f2"
    }, [darkTheme])

    return (
        <>
            {!selectedJob ?
                <div>
                   {/* <Header /> */}
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
