"use client"

import { SetStateAction, createContext, useContext, useState } from "react";

interface IContextType {
    categoryFilters: string []
    setCategoryFilters: React.Dispatch<SetStateAction<string[]>>
    sort : string
    setSort :  React.Dispatch<SetStateAction<string>>
}

export const INITIAL_FILTER_DATA : IContextType ={
    categoryFilters : [],
    setCategoryFilters : () => [], 
    sort : "",
    setSort: () => ""
}

const FilterContext = createContext<IContextType>(INITIAL_FILTER_DATA);//all the children will have access to the initial state 

export const FilterProvider = ({children} : {children : React.ReactNode}) => {

    const [categoryFilters, setCategoryFilters] = useState([])
    const [sort, setSort] = useState("-createdAt")// it will show the newest created products first 


    return (
        <FilterContext.Provider value = {{
            categoryFilters,
            setCategoryFilters,
            sort,
            setSort
        }} >
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => useContext(FilterContext)