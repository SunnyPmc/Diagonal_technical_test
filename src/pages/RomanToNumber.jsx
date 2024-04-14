import { useState } from 'react'


function RomanToNumber() {
    const [romanInput, setRomanInput] = useState('');
    const [conversionResult, setConversionResult] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    //Validate Roman numeral input
    const isValidRoman = (input) => {
        return /^[IVXLCDM]*$/i.test(input);
    };

    //handle input change
    const handleInputChange = (event) => {
        const input = event.target.value.toUpperCase();
        setRomanInput(input);
        setErrorMessage('');
    };

    //Handle Conversion
    const RomanToNumberConversion = () => {
        if (!isValidRoman(romanInput)) {
            setErrorMessage('Please enter a valid Roman numeral (only I, V, X, L, C, D, M allowed)');
            setConversionResult(null);
            return;
        }
        
        //Conversion Logic
        const romanNumerals = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        };

        let result = 0;
        let prevValue = 0;

        for (let i = romanInput.length - 1; i >= 0; i--) {
            const currentValue = romanNumerals[romanInput[i]];
            if (currentValue > prevValue) {
                result += currentValue;
            } else {
                result -= currentValue;
            }
            prevValue = currentValue;
        }
        setConversionResult(result);
    };

  return (
        <div className=''>
            <h2 className='py-2 text-2xl font-bold text-cyan-600 bg-gray-300 rounded-md'>Roman Numeral to Number Converter</h2>
            <div className='mt-16'>
                <label htmlFor="romanInput" className='text-lg font-semibold'>Enter Roman Numeral:</label>
                <input
                    type="text"
                    id="romanInput"
                    value={romanInput}
                    onChange={handleInputChange}
                    className='outline-none bg-gray-200 ml-[20px] px-2 py-1.5 rounded-md text-gray-800'
                />
                </div>
                <div className='mt-16'>
                <button onClick={RomanToNumberConversion} className='bg-gray-300 rounded-md text-lg font-bold text-gray-800 px-2 py-2 '>Convert</button>
            </div>
            <div className='mt-20 bg-gray-200 flex items-center justify-center rounded-md h-20'>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {conversionResult !== null && (
                <p className='text-lg font-semibold text-gray-800'>
                    Result {romanInput} = {conversionResult}
                </p>
            )}
            </div>
        </div>
  )
}

export default RomanToNumber
