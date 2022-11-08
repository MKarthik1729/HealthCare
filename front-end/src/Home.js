import React from 'react'
// import { Link } from 'react-router-dom'
import { CrazyButton, Linking, RedP } from './styles/general'
import './App.css'
function Home() {
  return (
    <div className='App App-header'>
      <CrazyButton >
      <Linking to='client'>client</Linking>
      </CrazyButton><br />
      <CrazyButton>
      <Linking to='doctor'>Doctor</Linking><br />
      </CrazyButton><br />
      <CrazyButton>
      <Linking to='Association'>Association</Linking>
      </CrazyButton>
      <RedP>hdqwkhuekhUJIJN</RedP>
    </div>
  )
}

export default Home