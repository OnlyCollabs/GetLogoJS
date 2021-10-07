async function getLogo(query) {
  const url = `https://getlogo.pushowl.com/api/${query}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.url;
}

export default getLogo;
