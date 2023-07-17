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

  const handleMouseEnter = () => {    setIsHover(true);  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleMouseEntered = () => {
    setIsHovered(true);
  };

  const handleMouseLeaved = () => {
    setIsHovered(false);
  };

  const mouseHandle = () => {
    setHover(true);
  };

  const mouseEnter = () => {
    setHover(false);
  };

  const mouseHandle1 = () => {
    setHovered(true);
  };

  const mouseEnter1 = () => {
    setHovered(false);
  };

  const mouseHandled = () => {
    setHove(true);
  };

  const mouseEntered = () => {
    setHove(false);
  };

  const mouseHandleEnter = () => {
    setMouseHover(true);
  };

  const mouseHandleLeave = () => {
    setMouseHover(false);
  };

  const MouseHandleEnter = () => {
    setMHover(true);
  };

  const MouseHandleLeave = () => {
    setMHover(false);
  };

  const handlemouse = () => {
    setMouseHandle(true);
  };

  const handleMouse = () => {
    setMouseHandle(false);
  };

  return (
    <div className="App">
      <div className="decor">
        <div
          className="imgDiv"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {isHover ? (
            <img src={require('./img/dimondClr.png')} alt="" className="img img1" />
          ) : (
            <img src={require('./img/dimond.webp')} alt="" className="img img1 hover" />
          )}
        </div>

        <div
          className="imgDiv"
          onMouseEnter={handleMouseEntered}
          onMouseLeave={handleMouseLeaved}
        >
          {isHovered ? (
            <img src={require('./img/clrjs.jpg')} alt="" className="img img2" />
          ) : (
            <img src={require('./img/js logo.jpg')} alt="" className="img img2" />
          )}
        </div>

        <div
          className="imgDiv"
          onMouseEnter={mouseHandle}
          onMouseLeave={mouseEnter}
        >
          {Hover ? (
            <img src={require('./img/clrCpls.png')} alt="" className="img img2" />
          ) : (
            <img src={require('./img/cplus.png')} alt="" className="img img3" />
          )}
        </div>

        <div
          className="imgDiv"
          onMouseEnter={mouseHandle1}
          onMouseLeave={mouseEnter1}
        >
          {Hovered ? (
            <img src={require('./img/clr react.png')} alt="" className="img img2" />
          ) : (
            <img src={require('./img/react logo.png')} alt="" className="img img4" />
          )}
        </div>

        <div
          className="imgDiv"
          onMouseEnter={mouseHandled}
          onMouseLeave={mouseEntered}
        >
          {Hove ? (
            <img src={require('./img/html.png')} alt="" className="img img2" />
          ) : (
            <img src={require('./img/html5.png')} alt="" className="img img5" />
          )}
        </div>

        <div
          className="imgDiv"
          onMouseEnter={mouseHandleEnter}
          onMouseLeave={mouseHandleLeave}
        >
          {MouseHover ? (
            <img src={require('./img/clrpls.jpg')} alt="" className="img img2" />
          ) : (
            <img src={require('./img/plss.jpg')} width={90} alt="" className="img img6" />
          )}
        </div>

        <div
          className="imgDiv"
          onMouseEnter={MouseHandleEnter}
          onMouseLeave={MouseHandleLeave}
        >
          {MHover ? (
            <img src={require('./img/rrclr.jpg')} alt="" className="img img2" />
          ) : (
            <img src={require('./img/rr.jpg')} alt="" className="img img7" />
          )}
        </div>

        <div
          className="imgDiv"
          onMouseEnter={handlemouse}
          onMouseLeave={handleMouse}
        >
          {MouseHandle ? (
            <img src={require('./img/dataclr.png')} alt="" className="img img2" />
          ) : (
            <img src={require('./img/data.png')} alt="" className="img img8" />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
