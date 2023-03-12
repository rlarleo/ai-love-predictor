import { useNavigate } from 'react-router-dom';

const ArrowRight = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="none"
    >
      <path
        d="M9.50008 0.666626L7.85508 2.31163L14.3651 8.83329H0.166748V11.1666H14.3651L7.85508 17.6883L9.50008 19.3333L18.8334 9.99996L9.50008 0.666626Z"
        fill="white"
      />
    </svg>
  );
};
const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full py-20 flex-col h-full shadow-lg  items-center gap-12">
      <span className="font-PyeongChangPeace font-bold text-4xl sm:text-[48px]">
        너는 솔로?
      </span>
      <span className="font-PyeongChangPeace font-bold text-4xl sm:text-[54px] flex items-center">
        그것이 알고싶다 <span className="rotate-[12deg]">!</span>
      </span>
      <span className="sm:text-[22px] font-semibold">
        인공지능이 알려주는 내가{' '}
        <span className="text-pink-regular sm:text-[25px] ">연애</span>할
        확률은?
      </span>
      <div className="flex-auto" />{' '}
      <button
        className="bg-pink-regular font-semibold rounded-2xl w-[380px] h-[84px] text-[26px] flex items-center justify-center gap-2"
        type="button"
        onClick={() => {
          navigate('/select-gender');
        }}
      >
        확률 알아보기 <ArrowRight />
      </button>
      <span className="text-[22px] mb-6 font-semibold">테스트 공유하기</span>
    </div>
  );
};

export default MainPage;
