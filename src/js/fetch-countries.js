const BASE_URL = `https://restcountries.com/v2`;
const FILTER_RESPONSE = `name,capital,flags,languages,population`;


export default async function fetchCountries(name) {
  const response = await fetch(
    `${BASE_URL}/name/${name}?field=${FILTER_RESPONSE}`
  );
  const data = await response.json();
  if (data.status === 404) {
    throw new Error();
  }
  return data;
}