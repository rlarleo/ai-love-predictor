import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '@components/layout/Layout';
import SelectGenderPage from '@pages/select-gender/SelectGenderPage';
import UploadProfilePage from '@pages/upload-profile/UploadProfilePage';
import ConversationPage from '@pages/conversation/ConversationPage';
import ResultPage from '@pages/result/ResultPage';
import MainPage from '@pages/main/MainPage';

const App = () => {
  return (
    <div className="App flex items-center justify-center bg-gray-200">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/select-gender" element={<SelectGenderPage />} />
            <Route path="/upload-profile" element={<UploadProfilePage />} />
            <Route path="/conversation" element={<ConversationPage />} />
            <Route path="/result" element={<ResultPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
