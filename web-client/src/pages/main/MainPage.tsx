import React from 'react';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import TabPanel from '@components/tab/LovingTabPanel';
import LovingTab from '@components/tab/LovingTab';
import LovingTabs from '@components/tab/LovingTabs';
import { useGetTestQuery } from '@services/apis/testApi';

const RootPage = () => {
  const [value, setValue] = React.useState(0);
  const { currentData: test } = useGetTestQuery();
  console.log(test);
  console.log('nono');

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <Box sx={{ width: '90%' }}>
        <LovingTabs value={value} onChange={handleChange}>
          <LovingTab label="Item One" />
          <LovingTab label="Item Two" />
        </LovingTabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </Box>
  );
};

export default RootPage;
