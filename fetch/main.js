async function JSONData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const jsonData = await response.json();
  console.log(jsonData);
}

JSONData();
