import { useState } from 'react';
import './App.css';

function App() {
  const [selectedBody, setSelectedBody] = useState(1);
  const [selectedEyes, setSelectedEyes] = useState(1);
  const [selectedHair, setSelectedHair] = useState(1);
  const [selectedMouths, setSelectedMouths] = useState(1);
  const [selectedEyebrows, setSelectedEyebrows] = useState(1);
  const [selectedGlasses, setSelectedGlasses] = useState(1);
  const [selectedL1, setSelectedL1] = useState(1);
  const [selectedL2, setSelectedL2] = useState(1);
  const [selectedL3, setSelectedL3] = useState(1);

  const handleRandomize = () => {
    setSelectedBody(Math.floor(Math.random() * 17) + 1);
    setSelectedEyes(Math.floor(Math.random() * 24) + 1);
    setSelectedHair(Math.floor(Math.random() * 73) + 1);
    setSelectedMouths(Math.floor(Math.random() * 24) + 1);
    setSelectedGlasses(Math.floor(Math.random() * 17) + 1);
    setSelectedEyebrows(Math.floor(Math.random() * 15) + 1);
    setSelectedL1(Math.floor(Math.random() * 5) + 1);
    setSelectedL2(Math.floor(Math.random() * 5) + 1);
    setSelectedL3(Math.floor(Math.random() * 9) + 1);
  }

  const displayBodyEl = () => {
    return Array.apply(null, Array(17)).map((el, idx) => (
      <div className={`clickable square ${idx === selectedBody - 1 ? 'selected': ''}`} key={idx} onClick={() => setSelectedBody(idx + 1)}>
        <img 
          src={`https://character-customization.netlify.app/character/body/${idx + 1}.png`} 
          alt="" 
          height="60" 
          className="img-center"
          style={{top: "50%"}}
        />
      </div>
    ))
  }
  const displayEyesEl = () => {
    return Array.apply(null, Array(24)).map((el, idx) => (
      <div className={`clickable square ${idx === selectedEyes - 1 ? 'selected' : ''}`} key={idx} onClick={() => setSelectedEyes(idx + 1)}>
        <img 
          src={`https://character-customization.netlify.app/character/eyes/${idx + 1}.png`} 
          alt="" 
          height="150" 
          className="img-center" 
          style={{top:"35px"}}
        />
      </div>
    ))
  }
  const displayHairEl = () => {
    return Array.apply(null, Array(73)).map((el, idx) => (
      <div className={`clickable square ${idx === selectedHair - 1 ? 'selected' : ''}`} key={idx} onClick={() => setSelectedHair(idx + 1)}>
        <img 
          src={`https://character-customization.netlify.app/character/hair/${idx + 1}.png`} 
          alt="" 
          height="60" 
          className="img-center" 
          style={{top:"50%"}}
        />
      </div>
    ))
  }
  const displayMouthEl = () => {
    return Array.apply(null, Array(24)).map((el, idx) => (
      <div className={`clickable square ${idx === selectedMouths - 1 ? 'selected' : ''}`} key={idx} onClick={() => setSelectedMouths(idx + 1)}>
        <img 
          src={`https://character-customization.netlify.app/character/mouths/${idx + 1}.png`}
          alt="" 
          height="120" 
          className="img-center" 
          style={{top:"50%"}}
        />
      </div>
    ))
  }
  const displayEyebrowsEl = () => {
    return Array.apply(null, Array(15)).map((el, idx) => (
      <div className={`clickable square ${idx === selectedEyebrows - 1 ? 'selected' : ''}`} key={idx} onClick={() => setSelectedEyebrows(idx + 1)}>
        <img 
          src={`https://character-customization.netlify.app/character/eyebrows/${idx + 1}.png`} 
          alt="" 
          height="60" 
          className="img-center" 
          style={{top: "50%"}}
        />
      </div>
    ))
  }
  const displayGlassesEl = () => {
    return Array.apply(null, Array(17)).map((el, idx) => (
      <div className={`clickable square ${idx === selectedGlasses - 1 ? 'selected' : ''}`} key={idx} onClick={() => setSelectedGlasses(idx + 1)}>
        <img 
          src={`https://character-customization.netlify.app/character/accessories/glasses/${idx + 1}.png`} 
          alt="" 
          height="60" 
          className="img-center"
          style={{top: "50%"}}
        />
      </div>
    ))
  }
  const displayL1El = () => {
    return Array.apply(null, Array(5)).map((el, idx) => (
      <div className={`clickable square ${idx === selectedL1 - 1 ? 'selected' : ''}`} key={idx} onClick={() => setSelectedL1(idx + 1)}>
        <img 
          src={`https://character-customization.netlify.app/character/clothes/layer_1/${idx + 1}.png`} 
          alt="" 
          height="60" 
          className="img-center" 
          style={{top: "50%"}}
        />
      </div>
    ))
  }
  const displayL2El = () => {
    return Array.apply(null, Array(5)).map((el, idx) => (
      <div className={`clickable square ${idx === selectedL2 - 1 ? 'selected' : ''}`} key={idx} onClick={() => setSelectedL2(idx + 1)}>
        <img 
          src={`https://character-customization.netlify.app/character/clothes/layer_2/${idx + 1}.png`} 
          alt="" 
          height="60" 
          className="img-center" 
          style={{top: "50%"}}
        />
      </div>
    ))
  }
  const displayL3El = () => {
    return Array.apply(null, Array(9)).map((el, idx) => (
      <div className={`clickable square ${idx === selectedL3 - 1 ? 'selected' : ''}`} key={idx} onClick={() => setSelectedL3(idx + 1)}>
        <img 
          src={`https://character-customization.netlify.app/character/clothes/layer_3/${idx + 1}.png`} 
          alt="" 
          height="60" 
          className="img-center" 
          style={{top: "50%"}}
        />
      </div>
    ))
  }
  return (
    <div className="App">
      <div className="title">CHARACTER</div>
      <div className="subtitle">🛠️CUSTOMIZATION🛠️</div>
      <div className="divider"></div>
      <div className="avatar-group gap-30">
        <div>
          <div className="avatar-wrapper">
            <div className="avatar">
              <img 
                src={`https://character-customization.netlify.app/character/body/${selectedBody}.png`} 
                alt="" 
                width="260" 
                style={{zIndex: "0", position: "absolute", left:"0px", top: "0px"}}
              />
              <img 
                src={`https://character-customization.netlify.app/character/eyes/${selectedEyes}.png`} 
                alt="" 
                width="260" 
                style={{zIndex: "1", position: "absolute", left:"0px", top: "0px"}}
              />
              <img 
                src={`https://character-customization.netlify.app/character/hair/${selectedHair}.png`} 
                alt="" 
                width="260" 
                style={{zIndex: "6", position: "absolute", left:"0px", top: "0px"}}
              />
              <img 
                src={`https://character-customization.netlify.app/character/clothes/layer_1/${selectedL1}.png`} 
                alt="" 
                width="260" 
                style={{zIndex: "2", position: "absolute", left:"0px", top: "0px"}}
              />
              <img 
                src={`https://character-customization.netlify.app/character/clothes/layer_2/${selectedL2}.png`} 
                alt="" 
                width="260" 
                style={{zIndex: "3", position: "absolute", left:"0px", top: "0px"}}
              />
              <img 
                src={`https://character-customization.netlify.app/character/clothes/layer_3/${selectedL3}.png`} 
                alt="" 
                width="260" 
                style={{zIndex: "4", position: "absolute", left:"0px", top: "0px"}}
              />
              <img 
                src={`https://character-customization.netlify.app/character/mouths/${selectedMouths}.png`} 
                alt="" 
                width="260" 
                style={{zIndex: "4", position: "absolute", left:"0px", top: "0px"}}
              />
              <img 
                src={`https://character-customization.netlify.app/character/noses/1.png`}
                alt="" width="260" 
                style={{zIndex: "4", position: "absolute", left:"0px", top: "0px"}}
              />
              <img 
                src={`https://character-customization.netlify.app/character/eyebrows/${selectedEyebrows}.png`}
                alt="" width="260"
                style={{zIndex: "4", position: "absolute", left:"0px", top: "0px"}}
              />
              <img
                src={`https://character-customization.netlify.app/character/accessories/glasses/${selectedGlasses}.png`} 
                alt="" 
                width="260" 
                style={{zIndex: "5", position: "absolute", left:"0px", top: "0px"}}
              />
            </div>
            <div className="text-center">
              <button className="button" onClick={() => handleRandomize()}>Randomize!</button>
            </div>
          </div>
        </div>
        <div>
          <div className="list-section">
            <h2>Body</h2>
            <div className="list">
              {displayBodyEl()}
            </div>
          </div>
          <div className="list-section">
            <h2>Eyes</h2>
            <div className="list">
              {displayEyesEl()}
            </div>
          </div>
          <div className="list-section">
            <h2>Hair</h2>
            <div className="list">
              {displayHairEl()}
            </div>
          </div>
          <div className="list-section">
            <h2>Mouth</h2>
            <div className="list">
              {displayMouthEl()}
            </div>
          </div>
          <div className="list-section">
            <h2>Eyebrows</h2>
            <div className="list">
              {displayEyebrowsEl()}
            </div>
          </div>
          <div className="list-section">
            <h2>Glasses</h2>
            <div className="list">
              {displayGlassesEl()}
            </div>
          </div>
          <div className="list-section">
            <h2>Clothing(L1)</h2>
            <div className="list">
              {displayL1El()}
            </div>
          </div>
          <div className="list-section">
            <h2>Clothing (L2)</h2>
            <div className="list">
              {displayL2El()}
            </div>
          </div>
          <div className="list-section">
            <h2>Clothing (L3)</h2>
            <div className="list">
              {displayL3El()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
