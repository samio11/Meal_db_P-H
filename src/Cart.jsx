import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { IoLogoYoutube } from "react-icons/io5";

const Cart = () => {
    const [cart, setCart] = useState([]);
    const cartData = useLoaderData();
    const cartData1 = cartData.meals
    console.log(cartData1)
    const navigate = useNavigate();
    const handleBack = () =>{
        navigate(-1)
    }
    return (
        <div>
            {
                cartData1?.map((x, idx) => {
                    return (
                        <div key={idx}>
                            <div className="hero bg-base-200">
                                <div className="hero-content flex-col lg:flex-row">
                                    <img className='w-[200px] lg:w-[400px] h-auto rounded-lg' src={x.strMealThumb} />
                                    <div>
                                        <h1 className="text-5xl font-bold">{x.strMeal}</h1>
                                        <p className="py-6">{x.strInstructions}</p>
                                        <div className='flex justify-around items-center'>
                                        <IoLogoYoutube />
                                        <a href={x?.strYoutube}>{x?.strYoutube}</a>
                                        </div>
                                        <button onClick={handleBack} className="btn btn-outline">Back</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    );
};

export default Cart;