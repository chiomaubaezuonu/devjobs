import { useEffect, useState } from 'react'
import jobData from './data';
import { Modal, Switch } from 'antd';
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

    const onChange = (checked: boolean) => {
        checked ? setDarkTheme(true) : setDarkTheme(false)
    };

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


    useEffect(() => {
        document.body.style.backgroundColor = darkTheme ? "#121721" : "#f2f2f2"
    }, [darkTheme])

    return (
        <>

            <header className='header'>
                <div className="inner">
                    <a href="/">
                        <div className='logo'>
                            <img src="/images/logo.svg" alt="header-logo" />
                        </div>
                    </a>
                    <div className="theme">
                        <img src="/images/sun.svg" className='sun' alt="sun" />
                        <Switch onChange={onChange} defaultChecked={false} />
                        <img src="/images/moon.svg" className='moon' alt="moon" />
                    </div>
                </div>
                {!selectedJob ? <div className="header-filters">
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
                    : ""
                }
            </header>
            {!selectedJob ?
                <div>
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
                <div>
                    <div className="selectedJob">
                        <div className="company-name-wrapper">
                            <div className={`company-details ${darkTheme ? "dark" : ""} `}>
                                <div className="logo-bg" style={{ backgroundColor: selectedJob.logoBackground }}>

                                    <img src={selectedJob.logo} alt="company logo" />
                                </div>
                                <div className="company-info">
                                    <h3 className='company-name'>{selectedJob.company}</h3>
                                    <h3 className='example'>{selectedJob.website.replace("https://", "")}</h3>
                                </div>
                                <div className="company-link">
                                    <a href={selectedJob.website} className={`company-site ${darkTheme ? "btn-dark" : ""}`} target='_blank'>
                                        Company Site
                                    </a>
                                </div>
                            </div>
                        </div>


                        <div className={`job-info-container ${darkTheme ? "dark" : ""}`}>
                            <div className={`job-info ${darkTheme ? "dark" : ""}`}>
                                <div className="job-top-info-left">
                                    <div className='job-post-div'>
                                        <span className='job-post'>{selectedJob.postedAt} <span className="dot"> . </span></span>
                                        <span className='contract'>{selectedJob.contract}</span>
                                    </div>
                                    <p
                                        className='title'>{selectedJob.position}</p>
                                    <p className='job-location'>{selectedJob.location}</p>
                                </div>
                                <div className="div">
                                    <a target='_blank' className="apply-btn">Apply</a>
                                </div>
                            </div>
                            <p className='job-desc'>{selectedJob.description}</p>
                            <p className='requirement-title'>Requirements</p>
                            <p className='requirement-text'>{selectedJob.requirements.content}</p>
                            <ul className='requirement-list-container'>
                                {selectedJob.requirements.items.map((item) => (
                                    <li className='requirement-list'>{item}</li>
                                ))}
                            </ul>
                            <p className='requirement-title'>What You Will Do</p>
                            <p className='requirement-text'>{selectedJob.role.content}</p>

                            <ul className='requirement-list-container'>
                                {selectedJob.role.items.map((item) => (
                                    <li className='requirement-list'>{item}</li>
                                ))}
                            </ul>
                        </div>

                    </div>
                    <div className={`footer ${darkTheme ? "dark" : ""}`}>
                        <div className="footer-details">
                            <div>
                                <p className={`title ${darkTheme ? "footer-dark" : ""}`}>{selectedJob.position}</p>
                                <p className='footer-company'>{selectedJob.company}</p>
                            </div>
                            <div className="div">
                                <a target='_blank' className="apply-btn">Apply</a>
                            </div>
                        </div>

                    </div>
                </div>
            }
        </>
    )
}

export default Home
