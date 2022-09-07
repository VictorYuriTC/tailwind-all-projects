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
        .replaceAll('_', ' ').toUpperCase())
    const categoriesAvailable = sortedNormalizedCategories
      .map(mappedCategory => (
        <Link
          className="hover:text-red-600 text-truncate hover:underline text-xs md:text-2xs"
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
    <div className="hidden gap-2 md:flex md:flex-col">
      { categories }
    </div>
  );
}
export default AsideBar;