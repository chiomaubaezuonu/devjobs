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
            <Switch defaultChecked onChange={onChange}  checked={false} />
            <img src="/images/moon.svg" className='moon' alt="moon" />
          </div>
        </div>
        <div className="header-filters">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, inventore repellat. Sequi qui voluptatibus autem alias laudantium et non totam?
        </div>
      </header>

    </>
  )
}

export default App
