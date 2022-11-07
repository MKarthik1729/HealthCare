import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Link to='client'>client</Link><br />
      <Link to='doctor'>Doctor</Link><br />
      <Link to='Association'>Association</Link>
    </div>
  )
}

export default Home