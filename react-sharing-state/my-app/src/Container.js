import React from 'react';
import { useState } from 'react';

/**
 * A container of items.
 * One item is displayed at a time, with buttons to flip through them:
 * - Next and Prev scroll forward and backward one item
 * - An array of buttons scroll to a specific item
 * TODO: The buttons don't work!
 */
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
          index={isActive}
        />
        <CustomButton
          text="Next"
          onShow={() => setIsActive((isActive + 1) % items.length)}
        />
      </div>
    </div>
  );
}

/**
 * A component that wraps a DOM button.
 * Props:
 *   text: The button's text
 *
 * TODO: Make the background color a prop, default white.
 * TODO: When clicked, the parent needs to be notified.
 */
function CustomButton({ text, onShow, bgColor }) {
  return (
    <button style={{ backgroundColor: bgColor }} onClick={onShow}>
      {text}
    </button>
  );
}

/**
 * An array of indicators (buttons).
 * Props:
 *   count: The number of indicators to display
 *
 * TODO: When an indicator is selected, the active item in the Container
 *       should switch to the index of the selected indicator.
 *       To avoid confusion, use `onSelect` for the event prop name.
 * TODO: Highlight the active indicator lightblue.
 */
function Indicators({ count, onSelect, index }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    const color = i === index ? 'lightblue' : 'white';
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
