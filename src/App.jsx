import React from 'react';
import ModelViewer from './ModelViewer';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>3D Hockey Cards</h1>
      <ModelViewer
        src="https://raw.githubusercontent.com/phovorka/GLB/7785cf3c35be86121b445ec4bacd6a85ac99b705/Krejci%20card%202.glb
        "
        alt="Astronaut"
      />
    </div>
  );
}

export default App;
