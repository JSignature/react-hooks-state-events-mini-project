import { React, useState } from 'react'

function CategoryFilter({ categories }) {
  const [cats, setCats] = useState(categories)
  const [isActive, setIsActive] = useState(false)

  function categoryClicked(cat) {
    console.log('Clicked' + cat)
    setIsActive(!isActive)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {cats.map(category => (
        <button
          className={isActive ? 'selected' : ''}
          onClick={() => categoryClicked(category)}
          key={category.id}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
