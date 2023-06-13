import React, { useCallback, useEffect, useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter((prev) => prev + 1);
  }, []);

  useCallback(() => {
    return { foo: 'bar' };
  }, []);

  return <div>Fetching {counter} times</div>;
}
