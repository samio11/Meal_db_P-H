import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { IoMdPeople } from "react-icons/io";

const Load_food_ctg = () => {
    const food = useLoaderData();
    const food1 = food.meals
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {
                food1?.map((x, idx) => {
                    return (
                        <div key={idx} className="card bg-base-100 shadow-xl">
                            <figure><img className='w-full h-[200px]' src={x.strMealThumb} alt={x.strMeal} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{x.strMeal}</h2>
                               <div className='flex justify-start items-center gap-3'>
                               <IoMdPeople />
                               <p>{x.idMeal}</p>
                               </div>
                                <div className="card-actions justify-end">
                                    <Link to={`/cart/${x.idMeal}`} className="btn btn-primary">Buy Now</Link>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Load_food_ctg;