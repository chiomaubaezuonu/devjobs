import { Switch, Modal } from 'antd';
import { useEffect, useState } from 'react';


const Header = () => {

    const [darkTheme, setDarkTheme] = useState(false)
    const [isChecked, setIsChecked] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onChange = (checked: boolean) => {
        checked ? setDarkTheme(true) : setDarkTheme(false)
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    useEffect(() => {
        document.body.style.backgroundColor = darkTheme ? "#121721" : "#f2f2f2"
    }, [darkTheme])

    return (
        <div>
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
        </div>
    )
}


export default Header;