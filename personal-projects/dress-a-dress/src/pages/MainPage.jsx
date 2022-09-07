import React from 'react'
import Header from '../components/menus/Header';
import ClothesList from '../components/lists/ClothesList';
import AsideBar from '../components/menus/AsideBar';

function MainPage(props) {

  return (
    <div className="flex flex-col bg-main-bg min-h-screen">
      <Header />
      <div className="flex flex-row gap-4 pl-8 pr-8">
        <AsideBar />
        <ClothesList />
      </div>
    </div>
  );
}
export default MainPage;