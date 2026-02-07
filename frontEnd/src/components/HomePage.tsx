import React, { useState } from 'react'
import './HomePage.css'

const HomePage = () => {
  const [visualize, setVisualize] = useState(false)
  const [branch, setBranch] = useState('branch')
  const handleBranchSelection=(selection: string)=>{
    if(branch=='branch'){
      setBranch(selection);
    }
    else{
      setBranch('branch');
    }
  }
  return (
    <div className="mainBody">
      <p className="titleName">TensorKit</p>

      <div className={`mainContainer ${visualize ? 'visualized' : 'hidden'}`}>
        <div className={`selectorContainer ${visualize ? 'withVisualizer' : 'centered'}`}>
          <div className='mlBranches'>
            {(branch=='branch') || (branch=='Supervised') ?<div className='branchButton' onClick={()=>handleBranchSelection('Supervised')}>Supervised</div>:undefined}
            {(branch=='branch') || (branch=='unSupervised') ?<div className='branchButton' onClick={()=>handleBranchSelection('unSupervised')}>unSupervised</div>:undefined}
          </div>
          <div className='visualizeButton' onClick={() => setVisualize(v => !v)}>
            {visualize?'Hide':'Visualize'}
          </div>
        </div>
        <div
          className={`visualizerContainer ${visualize ? 'visible' : 'hidden'}`}
        />
      </div>
    </div>
  )
}

export default HomePage
