import { useState } from 'react'
import './HomePage.css'

const HomePage = () => {
  const [visualize, setVisualize] = useState(false)

  return (
    <div className="mainBody">
      <p className="titleName">TensorKit</p>

      <div className="mainContainer">
        <div
          className={`selectorContainer ${visualize ? 'withVisualizer' : 'centered'}`}
        >
          <button onClick={() => setVisualize(v => !v)}>
            visualize
          </button>
        </div>

        <div
          className={`visualizerContainer ${visualize ? 'visible' : 'hidden'}`}
        />
      </div>
    </div>
  )
}

export default HomePage
