import { useState } from 'react';
import './App.css';
import ABw from './components/ABw';
import CuraBw from './components/CuraBw';
import ElBw from './components/ElBw';
import LogoColor from './components/LogoColor';
import MorBw from './components/MorBw';
import Stars from './components/Stars';

function App() {
  const [hover, setHover] = useState({
    general: false,
    stars: false,
    letterA: false,
    letterEl: false,
    letterMor: false,
    letterCura: false
  })

  const handleChange = (part) => {
    setHover({ ...hover, [part]: true })
  }

  const handleChangeCancel = (part) => {
    setHover({
      general: false,
      stars: false,
      letterA: false,
      letterEl: false,
      letterMor: false,
      letterCura: false
    })
  }

  return (
    <div className="App min-h-[100vh] flex justify-center items-center">
      <div className='relative'>
        <LogoColor

          handleChangeCancel={handleChangeCancel}
        />
        <div
          onMouseEnter={() => handleChange("general")}
          onMouseLeave={handleChangeCancel}
          className='absolute top-0 left-0'
        >
          <Stars
            handleChange={handleChange}
            hover={hover}
          />
          <ElBw
            handleChange={handleChange}
            hover={hover}
          />
          <ABw
            handleChange={handleChange}
            hover={hover}
          />
          <CuraBw
            handleChange={handleChange}
            hover={hover}
          />
          <MorBw
            handleChange={handleChange}
            hover={hover}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
