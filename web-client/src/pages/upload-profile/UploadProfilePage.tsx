import { useNavigate } from 'react-router-dom';

const PlusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
    >
      <path
        d="M35.5 20.5H20.5V35.5H15.5V20.5H0.5V15.5H15.5V0.5H20.5V15.5H35.5V20.5Z"
        fill="white"
      />
    </svg>
  );
};
const UploadProfilePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full py-20 flex-col h-full shadow-lg  items-center gap-12">
      <span className="sm:text-[24px] font-semibold text-center">
        당신의 프로필 사진을 <br />
        업로드해주세요.
      </span>
      <div className="flex-auto" />{' '}
      <div className="w-full px-12">
        <button
          className="flex items-center justify-center w-full h-56 border-white border-2 border-dashed"
          type="button"
          onClick={() => {
            navigate('/chatting');
          }}
        >
          <PlusIcon />
        </button>
      </div>
      <div className="flex-[2]" />
    </div>
  );
};

export default UploadProfilePage;
