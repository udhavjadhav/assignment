const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001
app.use(cors())
 
// Set up the API route
app.get('/', async (req, res) => {
  // Fetch data from the public API
  const users = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json());
    
  // Send the data to the frontend
  res.json(users);
});
 
// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
