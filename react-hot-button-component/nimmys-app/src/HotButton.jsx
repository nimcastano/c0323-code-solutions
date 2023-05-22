import { useState } from 'react';

export default function HotButton({ color, textColor }) {
  const [isClicked, setIsClicked] = useState(0);

  const handleClick = () => {
    setIsClicked(isClicked + 1);
  };

  color =
    isClicked >= 18
      ? 'white'
      : isClicked >= 15
      ? 'yellow'
      : isClicked >= 12
      ? 'orange'
      : isClicked >= 9
      ? 'lightcoral'
      : isClicked >= 6
      ? 'red'
      : isClicked >= 3
      ? 'purple'
      : 'darkblue';

  textColor = isClicked >= 9 ? 'black' : 'white';

  return (
    <button
      onClick={handleClick}
      style={{
        background: color,
        color: textColor,
        margin: '2rem',
        height: '4rem',
        width: '10rem',
      }}>
      Hot Button
    </button>
  );
}
