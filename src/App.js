import React from 'react';
import ImageGrid from './comps/ImageGrid';
import Title from './comps/Title';
import Uploadform from './comps/Uploadform';

function App() {
  return (
    <div className="App">
      <Title/>
      <Uploadform/>
      <ImageGrid/>
    </div>
  );
}

export default App;
