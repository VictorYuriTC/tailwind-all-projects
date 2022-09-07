import React from 'react'
import Header from '../components/Header';
import ClothesList from '../components/ClothesList';
import AsideBar from '../components/AsideBar';

function MainPage(props) {

  return (
    <div className="bg-main-bg min-h-screen">
      <Header />
      <div className="flex flex-row pl-8 pr-8 gap-0">
        <AsideBar />
        <ClothesList />
      </div>
    </div>
  );
}
export default MainPage;