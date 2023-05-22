import { useState } from 'react';

export default function ToggleSwitch({ toggle, text, bg }) {
  const [isClicked, setIsClicked] = useState(false);

  toggle = isClicked ? 'switch on' : toggle;
  text = isClicked ? 'ON' : text;
  bg = isClicked ? 'gold' : bg;

  return (
    <div className="App" style={{ background: bg }}>
      <div className={toggle} onClick={() => setIsClicked(!isClicked)}>
        <div className="flipper"></div>
      </div>
      <div className="text">{text}</div>
    </div>
  );
}
