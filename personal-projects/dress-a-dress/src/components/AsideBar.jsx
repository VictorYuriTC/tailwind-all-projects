import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import fashionData from '../services/fashionData';

function AsideBar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const allCategories = fashionData
      .map(info => info.category)
    const allCategoriesWithoutRepetition = allCategories
      .filter((category, index) => allCategories.indexOf(category) === index)
    const sortedNormalizedCategories = allCategoriesWithoutRepetition
      .map(filteredCategory => filteredCategory
        .replaceAll('_', ' ').replaceAll('ladies', '').toUpperCase())
      .sort()
    const categoriesAvailable = sortedNormalizedCategories
      .map(mappedCategory => (
        <Link key={mappedCategory} to={`/${mappedCategory
          .replace(' ', '')
          .replaceAll(' ', '-')
          .toLowerCase()}`
        }>
          { mappedCategory }
        </Link>
      ))
    setCategories(categoriesAvailable)
  }, [])
  return (
    <div className="flex flex-col">
      { categories }
    </div>
  );
}
export default AsideBar;