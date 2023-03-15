import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import { genderAtom, progressBarAtom } from '@core/jotai/atoms';
import Woman from '@components/SVG/Woman';
import Man from '@components/SVG/Man';
import { useEffect } from 'react';

const SelectGenderPage = () => {
  const navigate = useNavigate();
  const [, setGender] = useAtom(genderAtom);
  const [, setProgress] = useAtom(progressBarAtom);
  useEffect(() => {
    setProgress(12.5);
  }, []);

  return (
    <div className="flex flex-col items-center w-full h-full gap-12 py-20 shadow-lg">
      <span className="sm:text-[24px] font-semibold text-center">
        연애하고 싶은 상대의 성별을 <br /> 선택해주세요.
      </span>
      <div className="flex-auto" />{' '}
      <div className="flex w-full gap-5 px-12">
        <button
          className="flex flex-col w-[380px] items-center gap-5"
          type="button"
          onClick={() => {
            setGender('MALE');
            navigate('/upload-profile');
          }}
        >
          <Man />
          <div className="bg-green-regular rounded-2xl font-semibold w-full h-[84px] text-[26px] flex items-center justify-center gap-2">
            남자
          </div>
        </button>
        <button
          className="flex flex-col w-[380px] items-center gap-5"
          type="button"
          onClick={() => {
            setGender('FEMALE');
            navigate('/upload-profile');
          }}
        >
          <Woman />
          <div className="bg-pink-regular rounded-2xl w-full font-semibold h-[84px] text-[26px] flex items-center justify-center gap-2">
            여자
          </div>
        </button>
      </div>
      <div className="flex-[2]" />
    </div>
  );
};

export default SelectGenderPage;
