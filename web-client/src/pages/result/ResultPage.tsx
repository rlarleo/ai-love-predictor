import React, { useEffect, useState } from 'react';

const ResultPage = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 5000);
  }, []);

  if (!loading)
    return (
      <div className="flex w-full h-full items-center justify-center">
        <span className=" text-[24px]">확률 계산중...</span>
      </div>
    );
  return (
    <div className="flex w-full py-20 flex-col h-full shadow-lg  items-center gap-12">
      <span className="sm:text-[24px] font-semibold text-center">
        당신이 연애할 확률은?
      </span>
      <div className="flex w-full justify-center items-baseline gap-1 text-pink-regular font-bold">
        <span className="text-[96px]">80</span>
        <span className="text-[64px]">%</span>
      </div>
      <span className="text-[24px]">친절하고 세심한 당신은 스폰지밥 유형!</span>
      <div className="flex-[2]" />
    </div>
  );
};
export default ResultPage;
