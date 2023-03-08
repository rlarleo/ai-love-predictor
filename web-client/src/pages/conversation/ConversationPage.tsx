import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { isGeneratorFunction } from 'util/types';
import { motion } from 'framer-motion';

const INITIAL_TIME = new Date().toLocaleTimeString().slice(0, -3);

const ConversationPage = () => {
  const CURRENT_TIME = new Date().toLocaleTimeString().slice(0, -3);

  const [myMessage, setMyMessage] = useState<
    {
      content: string;
      delay: number;
      time: string;
    }[]
  >([]);

  return (
    <div className="flex max-w-md w-full flex-col h-full bg-[#b2cce0] shadow-lg">
      <div className="py-6">채팅방 이름</div>
      <div className="w-full flex flex-col overflow-y-scroll custom-scroll pl-4 pr-2">
        <div className="flex gap-4">
          <div className="rounded-xl w-12 h-12 bg-gray-400" />
          <div className="flex flex-col items-start">
            <span className="my-1">상대 이름</span>
            {[
              { content: '메세지 01', delay: 0, time: INITIAL_TIME },
              { content: '메세지 02', delay: 1, time: INITIAL_TIME },
              { content: '메세지 03', delay: 2, time: INITIAL_TIME },
            ].map(message => (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: message.delay }}
                className="flex gap-2 items-end mb-4"
              >
                <div className="self-start bg-white rounded-sm px-2 shadow-md py-1">
                  {message.content}
                </div>
                <span className="text-xs">{message.time}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex gap-4 self-end">
          <div className="flex flex-col items-start">
            {myMessage.length > 0 &&
              myMessage.map(message => (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: message.delay }}
                  className="flex gap-2 items-end mb-4"
                >
                  <span className="text-xs">{message.time}</span>
                  <div className="self-start bg-[#fef01b] rounded-sm px-2 shadow-md py-1">
                    {message.content}
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
      <div className="w-full mt-auto flex flex-col gap-4 p-4 bg-white">
        <button
          className="bg-gray-300 rounded-lg p-2 cursor-pointer"
          type="button"
          onClick={() =>
            setMyMessage([
              ...myMessage,
              { content: '답변 01', delay: 0, time: CURRENT_TIME },
            ])
          }
        >
          답변 01
        </button>
        <button
          className="bg-gray-300 rounded-lg p-2 cursor-pointer"
          type="button"
          onClick={() =>
            setMyMessage([
              ...myMessage,
              { content: '답변 02', delay: 0, time: CURRENT_TIME },
            ])
          }
        >
          답변 02
        </button>{' '}
        <button
          className="bg-gray-300 rounded-lg p-2 cursor-pointer"
          type="button"
          onClick={() =>
            setMyMessage([
              ...myMessage,
              { content: '답변 03', delay: 0, time: CURRENT_TIME },
            ])
          }
        >
          답변 03
        </button>
      </div>
    </div>
  );
};

export default ConversationPage;
