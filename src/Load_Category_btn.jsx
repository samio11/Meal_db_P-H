import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";

const Load_Category_btn = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(d1 => setData(d1.categories))
    }, [])
    return (
        <div className=''>
            {
                data?.map((x, idx) => {
                    return (
                        <div className='btn btn-outline w-full my-3' key={idx}>
                            <NavLink
                                to={`/categories/${x.strCategory}`}
                                className={({ isActive, isPending }) =>
                                    isPending ? "text-black" : isActive ? "text-red-600" : ""
                                }
                            >
                                {x.strCategory}
                            </NavLink>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Load_Category_btn;