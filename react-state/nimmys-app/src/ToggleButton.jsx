import { useState } from 'react';

export default function ToggleButton({ text, bgColor }) {
  const [isClicked, setIsClicked] = useState(false);
  const [y, setY] = useState('');

  const handleClick = () => {
    setIsClicked(!isClicked);
    setY(y + 'Y');
  };

  if (isClicked) {
    bgColor = 'darkgrey';
  }

  return (
    <button
      onClick={handleClick}
      style={{
        background: bgColor,
        color: 'white',
        height: '2rem',
        width: 'fit-content',
      }}>
      {text + y}
    </button>
  );
}
