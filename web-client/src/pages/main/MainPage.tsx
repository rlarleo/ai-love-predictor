import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { isGeneratorFunction } from 'util/types';
import { motion } from 'framer-motion';

const INITIAL_TIME = new Date().toLocaleTimeString().slice(0, -3);

const MainPage = () => {
  const CURRENT_TIME = new Date().toLocaleTimeString().slice(0, -3);

  const [myMessage, setMyMessage] = useState<
    {
      content: string;
      delay: number;
      time: string;
    }[]
  >([]);

  return (
    <div className="flex flex-col h-full w-full items-center text-white">
      {/* <span className="text-4xl">너는 솔로?</span>
      <span>그것이 알고싶다</span>
      <span>인공지능이 알려주는 내가 연애할 확률은?</span>
      <button type="button" className="">
        확률 알아보기
      </button>
      <span>그것이 알고싶다</span> */}
    </div>
  );
};

export default MainPage;
