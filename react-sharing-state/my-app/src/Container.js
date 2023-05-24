import React from 'react';
import { useState } from 'react';

export default function Container({ items }) {
  const [isActive, setIsActive] = useState(0);

  return (
    <div>
      <div>{items[isActive]}</div>
      <div>
        <CustomButton
          text="Prev"
          onShow={() =>
            setIsActive((isActive - 1 + items.length) % items.length)
          }
        />
        <Indicators
          count={items.length}
          onSelect={setIsActive}
          activeIndex={isActive}
        />
        <CustomButton
          text="Next"
          onShow={() => setIsActive((isActive + 1) % items.length)}
        />
      </div>
    </div>
  );
}

function CustomButton({ text, onShow, bgColor }) {
  bgColor = bgColor ?? 'white';
  return (
    <button style={{ backgroundColor: bgColor }} onClick={onShow}>
      {text}
    </button>
  );
}

function Indicators({ count, onSelect, activeIndex }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    const color = i === activeIndex ? 'lightblue' : undefined;
    buttons.push(
      <CustomButton
        key={i}
        text={i}
        onShow={() => onSelect(i)}
        bgColor={color}
      />
    );
  }
  return <div>{buttons}</div>;
}
