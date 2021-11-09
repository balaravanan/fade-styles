import Session from './Session';
import React from 'react'
import './fade-in-image.css';
import './fadeInBottom.css';
import './fadeInLeft.css';
import './fadeinright.css';
import Upload from '../../integrated/src/Upload';

function App() {
    // add_hooks("id name", "Classname", false);

  return (
    <div>
     {/* <Session/> */}
<Upload/>
    </div>
  );
}

export default App;
