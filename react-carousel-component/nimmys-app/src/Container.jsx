import { useEffect } from 'react';
import { useState } from 'react';

export default function Container({ imgs }) {
  const [player, setPlayer] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setPlayer((player + 1) % imgs.length),
      3000
    );
    return () => clearInterval(interval);
  }, [player, imgs]);

  return (
    <div className="carousel">
      <h2 className="name">{imgs[player].name}</h2>
      <div className="image-arrows">
        <i
          className="arrow left-arrow fa-solid fa-chevron-left"
          onClick={() => setPlayer((player - 1 + imgs.length) % imgs.length)}
        />
        <img src={imgs[player].img} alt={imgs[player].name} />
        <i
          className="arrow right-arrow fa-solid fa-chevron-right"
          onClick={() => setPlayer((player + 1) % imgs.length)}
        />
      </div>
      <div className="progress-btns">
        <Indicators imgs={imgs} onSelect={setPlayer} player={player} />
      </div>
    </div>
  );
}

function Indicators({ imgs, onSelect, player }) {
  const dots = [];
  for (let i = 0; i < imgs.length; i++) {
    const color = imgs[i].id === player ? '' : '-regular';
    dots.push(
      <i
        key={imgs[i].id}
        onClick={() => onSelect(imgs[i].id)}
        className={`dot fa${color} fa-circle`}
      />
    );
  }
  return <span>{dots}</span>;
}
