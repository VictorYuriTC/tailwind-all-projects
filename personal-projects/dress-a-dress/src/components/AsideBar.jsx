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
        .replaceAll('_', ' ').replaceAll('ladies ', '').toUpperCase())
    const categoriesAvailable = sortedNormalizedCategories
      .map(mappedCategory => (
        <Link
          className="hover:text-red-600 hover:underline text-sm font-base"
          key={mappedCategory}
          to={`/category/${mappedCategory
          .replaceAll(' ', '-')
          .toLowerCase()}`
        }>
          { mappedCategory }
        </Link>
      ))
    setCategories(categoriesAvailable)
  }, [])
  return (
    <div className="flex flex-col ml-4">
      { categories }
    </div>
  );
}
export default AsideBar;