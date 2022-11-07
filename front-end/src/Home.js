import React from 'react'
import { Link } from 'react-router-dom'
import { CrazyButton, RedP } from './styles/general'

function Home() {
  return (
    <div>
      <CrazyButton>
      <Link to='client'>client</Link>
      </CrazyButton><br />
      <CrazyButton>
      <Link to='doctor'>Doctor</Link><br />
      </CrazyButton><br />
      <CrazyButton>
      <Link to='Association'>Association</Link>
      </CrazyButton>
      <RedP>hdqwkhuekhUJIJN</RedP>
    </div>
  )
}

export default Home