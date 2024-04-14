import { Link } from "react-router-dom"
import { useState } from "react"

function Navbar() {
    const [activeItem, setActiveItem] = useState('home')

    const handleClick = (item) => {
        setActiveItem(item)
    }
    
  return (
    <div className=''>
        <ul className="flex justify-center mt-[-28px] gap-16 text-lg font-medium  bg-gray-100 mb-12 py-3 ">
             <li>
                <Link 
                to='/'
                onClick={() => handleClick('home')}
                className={`${activeItem === 'home' ? 'text-white bg-gray-800 px-2 py-1 rounded' : ''}`}>Home</Link>
            </li>
            <li>
                <Link 
                to='/roman-to-number'
                onClick={() => handleClick('roman-to-number')}
                className={`${activeItem === 'roman-to-number' ? 'text-white bg-gray-800 px-2 py-1 rounded' : ''}`}>Roman Conversion</Link>
            </li>
            <li>
                <Link 
                to='/age-calculator'
                onClick={() => handleClick('age-calculator')}
                className={activeItem === 'age-calculator' ? 'text-white bg-gray-800 px-2 py-1 rounded':''}>Age Calculator</Link>
            </li>
            <li>
                <Link 
                to='/birthday-countdown'
                 onClick={() => handleClick('birthday-countdown')}
                className={activeItem === 'birthday-countdown' ? 'text-white bg-gray-800 px-2 py-1 rounded':''}>Birthday Countdown</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar