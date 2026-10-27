import { useState, useEffect } from 'react'
import Waldo from './components/Waldo/Waldo.jsx'
import park from './assets/backgrounds/waldo_01_park.png'
import nightCity from './assets/backgrounds/waldo_02_night_city.png'
import mall from './assets/backgrounds/waldo_03_mall.png'
import stadium from './assets/backgrounds/waldo_04_stadium.png'
import beach from './assets/backgrounds/waldo_05_beach.png'
import streetParade from './assets/backgrounds/waldo_06_street_parade.png'
import market from './assets/backgrounds/waldo_07_market.png'
import concert from './assets/backgrounds/waldo_08_concert.png'
import school from './assets/backgrounds/waldo_09_school.png'
import library from './assets/backgrounds/waldo_10_library.png'
import './App.css'

export default function App() {
  const [background, setBackground] = useState(park);

  const changeBackground = () => {
    const backgroundList = [park, nightCity, mall, stadium, beach, streetParade, market, concert, school, library]
    let choosenBackgroundIndex = Math.floor(Math.random() * backgroundList.length);
    let choosenBackground = backgroundList[choosenBackgroundIndex];
    while (choosenBackground === background) {
      choosenBackgroundIndex = Math.floor(Math.random() * backgroundList.length);
      choosenBackground = backgroundList[choosenBackgroundIndex];
    }

    setBackground(choosenBackground);
  }

  return (
    <div className="app"
    style={{
      backgroundImage: `url(${background})`, 
      backgroundSize: 'cover', 
    }}>
      <Waldo changeBackground={changeBackground}/>
    </div>
  )
}