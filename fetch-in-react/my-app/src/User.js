/* eslint-disable no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';
import UserCard from './UserCard';

export default function User({ userId, onCancel }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [user, setUser] = useState();

  /* your code here (hint: useEffect) */

  useEffect(() => {
    try {
      async function singleUser() {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        if (!response.ok) {
          throw new Error(`fetch Error ${response.status}`);
        }
        const jsonData = await response.json();
        setUser(jsonData);
        console.log(jsonData);
      }
      singleUser();
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [userId, error]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.error('Fetch error:', error);
    return <p>Error! {error.message}</p>;
  }

  return (
    <div>
      <button onClick={() => onCancel()}>Close</button>
      <UserCard user={user} />
    </div>
  );
}
