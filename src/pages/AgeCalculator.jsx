import React, { useState } from 'react';

function AgeCalculator() {
    const [birthYear, setBirthYear] = useState('');
    const [birthMonth, setBirthMonth] = useState('');
    const [birthDay, setBirthDay] = useState('');
    const [age, setAge] = useState('');

    // Function to validate date inputs
    const isValidDate = (year, month, day) => {
        const date = new Date(year, month - 1, day);
        return (
            date.getFullYear() === parseInt(year, 10) &&
            date.getMonth() === parseInt(month, 10) - 1 &&
            date.getDate() === parseInt(day, 10)
        );
    };

    // Function to calculate age
    const calculateAge = () => {
        if (!isValidDate(birthYear, birthMonth, birthDay)) {
            alert('Please enter a valid date.');
            return;
        }

        const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
        const currentDate = new Date();

        let years = currentDate.getFullYear() - birthDate.getFullYear();
        let months = currentDate.getMonth() - birthDate.getMonth();
        let days = currentDate.getDate() - birthDate.getDate();
        let hours = currentDate.getHours() - birthDate.getHours();
        let minutes = currentDate.getMinutes() - birthDate.getMinutes();
        let seconds = currentDate.getSeconds() - birthDate.getSeconds();

        if (months < 0 || (months === 0 && days < 0)) {
            years--;
            months += 12;
        }
        if (days < 0) {
            const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 0);
            days = prevMonth.getDate() - birthDate.getDate() + currentDate.getDate();
            months--;
        }
        if (hours < 0) {
            hours += 24;
            days--;
        }
        if (minutes < 0) {
            minutes += 60;
            hours--;
        }
        if (seconds < 0) {
            seconds += 60;
            minutes--;
        }

        setAge(`${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);

    };
   
    const handleCalculateAge = () => {
        calculateAge()
        const interval = setInterval( calculateAge,1000)
        return () => clearInterval(interval)
    }
    
    return (
        <div>
            <h2 className='py-2 text-2xl font-bold text-cyan-600 bg-gray-300 rounded-md'>Age Calculator</h2>
            <div className='mt-12'>
                <label className='text-lg font-semibold ml-4' htmlFor="yearInput">Year:</label>
                <input
                    type="number"
                    id="yearInput"
                    value={birthYear}
                    onChange={(e) => setBirthYear(e.target.value)}
                    className='outline-none bg-gray-200 ml-[20px] px-2 py-1.5 rounded-md text-gray-800'
                />
                <label className='text-lg font-semibold ml-4' htmlFor="monthInput">Month:</label>
                <input
                    type="number"
                    id="monthInput"
                    value={birthMonth}
                    onChange={(e) => setBirthMonth(e.target.value)}
                    className='outline-none bg-gray-200 ml-[20px] px-2 py-1.5 rounded-md text-gray-800'
                />
                <label className='text-lg font-semibold ml-4' htmlFor="dayInput">Day:</label>
                <input
                    type="number"
                    id="dayInput"
                    value={birthDay}
                    onChange={(e) => setBirthDay(e.target.value)}
                    className='outline-none bg-gray-200 ml-[20px] px-2 py-1.5 rounded-md text-gray-800'
                />
                </div>
                <div className='mt-16'>
                <button onClick={handleCalculateAge}
                className='bg-gray-300 rounded-md text-lg font-bold text-gray-800 px-2 py-2 '>Calculate Age</button>
            </div>
            <div className='mt-20 bg-gray-200 flex items-center justify-center rounded-md h-20'>
                {age && <p className='text-lg font-semibold text-gray-800'><span className='font-bold'>Your age is:</span> {age}</p>}
            </div>
        </div>
    );
}

export default AgeCalculator;
