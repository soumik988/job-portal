import React, { useContext } from 'react'
import { categories } from '../assets/assets'
import { AppContext } from '../context/AppContext';

const PopularCategories = () => {
    const colors = [
        "bg-blue-100 text-blue-800",
        "bg-green-100 text-green-800",
        "bg-red-100 text-red-800",
        "bg-yellow-100 text-yellow-800",
        "bg-purple-100 text-purple-800",
        "bg-pink-100 text-pink-800",
        "bg-indigo-100 text-indigo-800",
        "bg-teal-100 text-teal-800",
        "bg-orange-100 text-orange-800",
        "bg-gray-100 text-gray-800",
    ];
    const { categoriesData } = useContext(AppContext)
    return (
        <div className='py-16'>
            <h1 className='font-semibold text-2xl text-gray-800 md:text-4xl'>
                Most Popular Categroies
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
                {categories.map((item, index) => {
                    const colorClass = colors[index % colors.length];
                    return (
                        <div
                            key={index}
                            className={`flex  max-w-[250px] items-center justify-center gap-1 border border-gray-300 rounded-xl py-6 px-4 shadow ${colorClass}`}
                        >
                            <img src={item.icon} alt='' />
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className="text-lg font-semibold">{item.name}</h3>
                                <p className="text-sm">{item.positions} open Positions</p>
                            </div>

                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default PopularCategories