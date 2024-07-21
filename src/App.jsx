import { useState } from 'react';
import './App.css';
import { Axios } from 'axios';

function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const API_KEY = "aad5bc41b4facd305f2e3a5cb57f63f3"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`

  const searchLocation = (event) => {
    if(event.key === "Enter") {
      Axios.get(url)
       .then(response => {
         setData(response.data)
         console.log(response);
        })
       .catch(error => {
        console.log(error);
      });
      setLocation("");
    }
  }

  return (
    <div className='w-full -full relative'>
      <div className="text-center p-4">
        <input 
          type="text" 
          className='py-3 px-6 w-[700px] text-lg rounded-3xl border border-gray-200 text-gray-600 placeholder:text-gray-400 focus:outline-none bg-white-600/100 shadow-md'  placeholder='Enter the location' 
          value={location}
          onChange={(event) => event.target.value}
          onKeyDownCapture={searchLocation}/>
      </div>
    </div>
  )
}

export default App
