import React, { useState } from 'react'

import '../styles/App.css'

function App() {
  const [cat, setCat] = useState()
  const [error, setError] = useState()

  const getCat = () => {
    setCat()
    setError()

    fetch('https://aws.random.cat/meow')
      .then(res => res.json())
      .then(res => setCat(res))
      .catch(e => setError(e.message))
  }

  return (
    <div className="content">
      <h1>Cat Project</h1>
      <button onClick={getCat}>Get Cat</button>
      {error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}
      <div className="cat">
        {cat && <img src={cat.file} alt="cat, a kitty cat" />}
      </div>
    </div>
  )
}

export default App
