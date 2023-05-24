import { useState } from 'react';
import Panel from './Panels';

/**
 *
 * @param {ArrOfObjects} param0, an array of objects with key, title, descrip properties
 * @returns clickable panels that check the state and return the state through events
 */
export default function Container({ pages }) {
  const [activeIndex, setActiveIndex] = useState(undefined);

  return (
    <div>
      {pages.map((page) => (
        <Panel
          key={page.id}
          title={page.title}
          descrip={page.descrip}
          isActive={activeIndex === page.id}
          onShow={() =>
            setActiveIndex(activeIndex === page.id ? undefined : page.id)
          }
        />
      ))}
    </div>
  );
}
