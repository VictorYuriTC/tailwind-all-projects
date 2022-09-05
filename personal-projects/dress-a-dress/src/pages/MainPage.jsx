import React from 'react'
import Header from '../components/Header';
import ClothesList from '../components/ClothesList';

function MainPage(props) {

  return (
    <div className="bg-main-bg">
      <Header />
      <ClothesList />
    </div>
  );
}
export default MainPage;