import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from '@components/layout/Container';
import SelectGenderPage from '@pages/select-gender/SelectGenderPage';
import UploadProfilePage from '@pages/upload-profile/UploadProfilePage';
import ChattingPage from '@pages/chatting/ChattingPage';
import ResultPage from '@pages/result/ResultPage';
import MainPage from '@pages/main/MainPage';
import ProgressBarContainer from '@components/layout/ProgressBarContainer';

const App = () => {
  return (
    <div className="App flex bg-[#F5F5F5]">
      <BrowserRouter>
        <Routes>
          <Route element={<Container />}>
            <Route path="/" element={<MainPage />} />
            <Route element={<ProgressBarContainer />}>
              <Route path="/select-gender" element={<SelectGenderPage />} />
              <Route path="/upload-profile" element={<UploadProfilePage />} />
              <Route path="/chatting" element={<ChattingPage />} />
            </Route>
            <Route path="/result" element={<ResultPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
