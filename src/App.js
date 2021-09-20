import React from 'react';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box  from '@mui/system/Box';

function App() {
  const value = 'CPX';
  return (<
    Box sx={{ width: '100%', maxWidth: 500}} >
      <Typography variant="h1" component="div" gutterBottom>
        Hello {value}
      </Typography>
  </Box>);
}

export default App;
