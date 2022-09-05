import React, { useEffect, useState } from 'react'
import fashionData from '../services/fashionData';

function AsideBar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const allCategories = fashionData
      .map(info => info.category)
    const allCategoriesWithoutRepetition = allCategories
      .filter((category, index) => allCategories.indexOf(category) === index)
      .map(filteredCategory => filteredCategory.replaceAll('_', ' ').toUpperCase())
      .map(mappedCategory => (
        <span>
          { mappedCategory }
        </span>
      ))
    setCategories(allCategoriesWithoutRepetition)
  }, [])
  return (
    <div className="flex flex-col">
      { categories }
    </div>
  );
}
export default AsideBar;