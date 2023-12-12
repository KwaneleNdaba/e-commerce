'use client'
import React from 'react'
import classes from './index.module.scss'
import { useFilter } from '../../../_providers/Filter'
import { Category } from '../../../../payload/payload-types'
import { Checkbox } from '../../../_components/Checkbox'
import { HR } from '../../../_components/HR'
import { RadioButton } from '../../../_components/Radio'

function Filters({ categories }: { categories: Category[] }) {
  const { categoryFilters, sort, setCategoryFilters, setSort } = useFilter()

  const handleCategories = (categoryId: string) => {
    if (categoryFilters.includes(categoryId)) {
      const updatedCategories = categoryFilters.filter(id => id !== categoryId)

      setCategoryFilters(updatedCategories)
    } else {
      setCategoryFilters([...categoryFilters, categoryId])
    }
  }




  const handleSort = (value: string) => setSort(value)//dispatching the value to the collectionArchive 
  return (
    <div className={classes.filters}>
      <div>
        <h6 className={classes.title}>Products Categories</h6>
        <div className={classes.categories}>
          {categories.map(category => {
            const isSelected = false;
            return (
              <Checkbox
                isSelected={isSelected}
                value={category.id}
                onClickHandler={handleCategories}
                key={category.id}
                label={category.title}
              />
            )
          })}
        </div>
        <HR className={classes.hr} />
        <h6 className={classes.title}></h6>
        <div className={classes.categories}>
          <RadioButton
            label="Latest"
            value="-createdAt"
            isSelected={sort === '-createdAt'}
            onRadioChange={handleSort}
            groupName="sort"
          />
          <RadioButton
            label="Oldest"
            value="createdAt"
            isSelected={sort === 'createdAt'}
            onRadioChange={handleSort}
            groupName="sort"
          />
        </div>
      </div>
    </div>
  )
}

export default Filters
