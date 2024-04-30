
async function makeRequest(url: string, options = {}) {
  const urlTest = 'http://localhost:1312/'
  try {
    const response = await fetch(urlTest, options);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error making request:', error);
    return null; // Or throw an error if needed
  }
}

export default makeRequest