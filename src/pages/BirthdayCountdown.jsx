import React, { useState, useEffect } from 'react';

function BirthdayCountdown() {
    const [birthYear, setBirthYear] = useState('');
    const [birthMonth, setBirthMonth] = useState('');
    const [birthDay, setBirthDay] = useState('');
    const [countdown, setCountdown] = useState('');

    // Function to validate date inputs
    const isValidDate = (year, month, day) => {
        const date = new Date(year, month - 1, day);
        return (
            date.getFullYear() === parseInt(year, 10) &&
            date.getMonth() === parseInt(month, 10) - 1 &&
            date.getDate() === parseInt(day, 10)
        );
    };

    // Function to calculate next birthday countdown
    const calcBirthdayCountdown = () => {
        if (!isValidDate(birthYear, birthMonth, birthDay)) {
            alert('Please enter a valid date.');
            return;
        }

        const today = new Date();
        const nextBirthday = new Date(today.getFullYear(), parseInt(birthMonth) - 1, parseInt(birthDay));
        
        if (nextBirthday < today) {
            nextBirthday.setFullYear(today.getFullYear() + 1);
        }

        const timeDiff = nextBirthday.getTime() - today.getTime();
        const seconds = Math.floor(timeDiff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);

        const remainingDays = days % 30;
        const remainingHours = hours % 24;
        const remainingMinutes = minutes % 60;
        const remainingSeconds = seconds % 60;

        setCountdown(`${months} months, ${remainingDays} days, ${remainingHours} hours, ${remainingMinutes} minutes, ${remainingSeconds} seconds`);
    };
    const handleCalcBirthdayCountdown = () => {
        calcBirthdayCountdown()
        const interval = setInterval(calcBirthdayCountdown,1000)
        return () => clearInterval(interval)
    }

    // Update countdown every second
    // useEffect(() => {
    //     const interval = setInterval(calcBirthdayCountdown, 1000);
    //     return () => clearInterval(interval);
    // }, [birthYear, birthMonth, birthDay]);

    return (
        <div>
            <h2 className='py-2 text-2xl font-bold text-cyan-600 bg-gray-300 rounded-md'>Next Birthday Countdown</h2>
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
                /></div>
                <div className='mt-16'>
                <button  className='bg-gray-300 rounded-md text-lg font-bold text-gray-800 px-2 py-2 ' onClick={handleCalcBirthdayCountdown}>Submit</button>
            </div>
            <div className='mt-20 bg-gray-200 flex items-center justify-center rounded-md h-20'>
                {countdown && <p className='text-lg font-semibold text-gray-800'>Your birthday is due: {countdown}</p>}
            </div>
        </div>
    );
}

export default BirthdayCountdown;
