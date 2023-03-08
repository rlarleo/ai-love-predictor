import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { useLazyGetTestQuery } from '@services/apis/testApi';
import { isGeneratorFunction } from 'util/types';

const RootPage = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [trigger, { currentData: test }] = useLazyGetTestQuery();

  const handleClick = () => {
    trigger({ param: [value1, value2, value3] });
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <Box sx={{ width: '90%', pt: 10 }}>
        <TextField
          id="1"
          type="number"
          value={value1}
          onChange={e => setValue1(Number(e.target.value))}
        />
        <TextField
          id="2"
          type="number"
          value={value2}
          onChange={e => setValue2(Number(e.target.value))}
        />
        <TextField
          id="3"
          type="number"
          value={value3}
          onChange={e => setValue3(Number(e.target.value))}
        />
        <Button variant="contained" onClick={handleClick}>
          Contained
        </Button>
        <div>{test}</div>
      </Box>
    </Box>
  );
};

export default RootPage;
