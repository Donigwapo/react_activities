import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const countries = [
{name:"Phil", city: ["Manila",'Davao']},
{name:"US", city:["Pennsalvenia", "Los Angeles"]}
]


function App() {
  const [country, setCountry] = useState([])

  return (
  
      <div className="App">
          <select
          value= {country}
          onChange = {((e)=>{
            setCountry([e.target.value])
          })}
          >
            {countries.map((item,index)=>{
              return (
                <option key={index}value={index}>
                  {item.name}
                </option>
              );

            })}

          </select>

          <select>
            {countries[country] &&
            countries[country].city.map((item, index)=>{
            return <option value={index}>
                  {item}
                </option>

            })}
          </select>
     
      </div>
      
  
  );
}

export default App
