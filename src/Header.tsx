import { Switch, Modal } from 'antd';
import { useEffect, useState } from 'react';


const Header = () => {

    const [darkTheme, setDarkTheme] = useState(false)
    const [isChecked, setIsChecked] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onChange = (checked: boolean) => {
        checked ? setDarkTheme(true) : setDarkTheme(false)
    };

    

    useEffect(() => {
        document.body.style.backgroundColor = darkTheme ? "#121721" : "#f2f2f2"
    }, [darkTheme])

    return (
        <div>
           
        </div>
    )
}


export default Header;