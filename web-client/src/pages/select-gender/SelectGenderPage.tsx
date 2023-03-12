import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import { genderAtom } from '@core/jotai/atoms';

const SelectGenderPage = () => {
  const navigate = useNavigate();
  const [gender, setGender] = useAtom(genderAtom);
  return (
    <div className="flex w-full py-20 flex-col h-full shadow-lg  items-center gap-12">
      <span className="sm:text-[24px] font-semibold text-center">
        연애하고 싶은 상대의 성별을 <br /> 선택해주세요.
      </span>
      <div className="flex-auto" />{' '}
      <div className="flex w-full gap-5 px-12">
        <button
          className="bg-green-regular rounded-2xl font-semibold w-[380px] h-[84px] text-[26px] flex items-center justify-center gap-2"
          type="button"
          onClick={() => {
            setGender('MALE');
            navigate('/upload-profile');
          }}
        >
          남자
        </button>
        <button
          className="bg-pink-regular rounded-2xl w-[380px] font-semibold h-[84px] text-[26px] flex items-center justify-center gap-2"
          type="button"
          onClick={() => {
            setGender('FEMALE');

            navigate('/upload-profile');
          }}
        >
          여자
        </button>
      </div>
      <div className="flex-[2]" />
    </div>
  );
};

export default SelectGenderPage;
