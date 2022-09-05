import React, { useEffect, useState } from 'react'
import fashionData from "../services/fashionData"
import ClothCard from '../components/ClothCard';
import { setInitialLocalStorage } from '../localStorage/localStorage';
import Header from '../components/Header';
import ClothesList from '../components/ClothesList';

function MainPage(props) {

  return (
    <div className="">
      <Header />
      <ClothesList />
    </div>
  );
}
export default MainPage;