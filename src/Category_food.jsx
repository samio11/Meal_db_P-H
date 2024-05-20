import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category_food = () => {
    const category1 = useLoaderData();
    const category2 = category1.categories;
    console.log(category2);
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            {
                category2.map((item, idx) => {
                    return (
                        <div key={idx} className="card w-full bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={item.strCategoryThumb} alt={item.strCategory} className="w-full h-[200px] rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{item.strCategory}</h2>
                                <div className="card-actions">
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Category_food;