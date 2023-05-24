import './App.css';
import { useState } from 'react';

const drawerItems = [
  {
    id: 0,
    type: 'header',
    text: 'Menu',
  },
  {
    id: 1,
    type: 'item',
    text: 'About',
  },
  {
    id: 2,
    type: 'item',
    text: 'Get Started',
  },
  {
    id: 3,
    type: 'item',
    text: 'Sign In',
  },
];

/**
 *
 * @returns JSX with overlay, the hideable drawer, and the bar icon to open drawer
 */
function App() {
  const [isActive, setIsActive] = useState(false);

  const shade = isActive ? 'shady' : 'sunny';

  return (
    <div className="App">
      <div
        className={`overlay ${shade}`}
        onClick={() => setIsActive(false)}></div>
      <Drawer
        items={drawerItems}
        isActive={isActive}
        onHide={() => setIsActive(false)}
      />
      <i class="fa-solid fa-bars" onClick={() => setIsActive(true)}></i>
    </div>
  );
}

export default App;

/**
 *
 * @param {arrOfObjects} contains header and items that are in drawer
 * @param {boolean} tells us if drawer is active
 * @param {onHide} state setter that lets us tell parent that an item has been clicked
 * @returns
 */
function Drawer({ items, isActive, onHide }) {
  const hideNseek = isActive ? 'show' : 'hide';

  const itemsLi = items.map((page) => {
    return page.type === 'header' ? (
      <h2 key={page.id}>{page.text}</h2>
    ) : (
      <h3 onClick={onHide} className="item" key={page.id}>
        {page.text}
      </h3>
    );
  });

  return <div className={`Drawer ${hideNseek}`}>{itemsLi}</div>;
}
