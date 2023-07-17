import './App.css'
import React, { useState } from 'react';
function App() {
  const [isHover, setIsHover] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [Hover, setHover] = useState(false);
  const [Hovered, setHovered] = useState(false);
  const [Hove, setHove] = useState(false);
  const [MouseHover, setMouseHover] = useState(false);
  const [MHover, setMHover] = useState(false);
  const [MouseHandle, setMouseHandle] = useState(false);

  const handleMouseEntered = (state) => {
    state(true);
  };
  const handleMouseLeave = (state) => {
    state(false);
  };

  return (
    <div className="App">
      <div className="decor">
        <div
          className="imgDiv"
          onMouseEnter={() => handleMouseEntered(setIsHover)}
          onMouseLeave={() => handleMouseLeave(setIsHover)}>
             <img src={isHover ? require('./img/dimondClr.png') : require('./img/dimond.webp')} alt="" className="img img1" />
        </div>

        <div
          className="imgDiv"
          onMouseEnter={() => handleMouseEntered(setIsHovered)}
          onMouseLeave={() => handleMouseLeave(setIsHovered)}
        >
          <img src={isHovered ? require('./img/clrjs.jpg') : require('./img/js logo.jpg')} alt="" className="img img2" />
        </div>
        <div
          className="imgDiv"
          onMouseEnter={() => handleMouseEntered(setHover)}
          onMouseLeave={() => handleMouseLeave(setHover)}
        >
          <img src={Hover ? require('./img/clrCpls.png') : require('./img/cplus.png')} alt="" className="img img2" />
        </div>

        <div
          className="imgDiv"
          onMouseEnter={() => handleMouseEntered(setHovered)}
          onMouseLeave={() => handleMouseLeave(setHovered)}
        >
          <img src={Hovered ? require('./img/clr react.png') : require('./img/react logo.png')} alt="" className="img img2" />
        </div>

        <div
          className="imgDiv"
          onMouseEnter={() => handleMouseEntered(setHove)}
          onMouseLeave={() => handleMouseLeave(setHove)}
        >
          <img src={Hove ? require('./img/html.png') : require('./img/html5.png')} alt="" className="img img2" />
        </div>
        <div
          className="imgDiv"
          onMouseEnter={() => handleMouseEntered(setMouseHover)}
          onMouseLeave={() => handleMouseLeave(setMouseHover)}
        >
          <img src={MouseHover ? require('./img/clrpls.jpg') : require('./img/plss.jpg')} alt="" className="img img2" />
        </div>

        <div
          className="imgDiv"
          onMouseEnter={() => handleMouseEntered(setMHover)}
          onMouseLeave={() => handleMouseLeave(setMHover)}
        >
          <img src={MHover ? require('./img/rrclr.jpg') : require('./img/rr.jpg')} alt="" className="img img2" />
        </div>

        <div
          className="imgDiv"
          onMouseEnter={() => handleMouseEntered(setMouseHandle)}
          onMouseLeave={() => handleMouseLeave(setMouseHandle)}
        >
          <img src={MouseHandle ? require('./img/dataclr.png') : require('./img/data.png')} alt="" className="img img2" />
        </div>
      </div>
    </div>
  );
}

export default App;
