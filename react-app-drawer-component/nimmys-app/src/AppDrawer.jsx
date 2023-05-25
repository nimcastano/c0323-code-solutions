import { useState } from 'react';
import Overlay from './Overlay';

/**
 *
 * @param {arrOfObjects} contains header and items that are in drawer
 * @param {boolean} tells us if drawer is active
 * @param {onHide} state setter that lets us tell parent that either item or overlay has been clicked
 * @returns
 */

export default function AppDrawer({ items }) {
  const [isActive, setIsActive] = useState(false);
  const hideNseek = isActive ? 'show' : 'hide';

  return (
    <div>
      <Overlay isActive={isActive} onHide={setIsActive} />
      <i className="fa-solid fa-bars" onClick={() => setIsActive(true)}></i>
      <div className={`Drawer ${hideNseek}`}>
        {items.map((page) => {
          return page.type === 'header' ? (
            <h2 className={page.type} key={page.id}>
              {page.text}
            </h2>
          ) : (
            <h3
              onClick={() => setIsActive(false)}
              className={page.type}
              key={page.id}>
              {page.text}
            </h3>
          );
        })}
      </div>
    </div>
  );
}
