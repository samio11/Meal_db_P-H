import React from 'react';
import Header from './Header';
import Load_Category_btn from './Load_Category_btn';
import { Outlet, useNavigation } from 'react-router-dom';

const Home = () => {
    const navigation = useNavigation();
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Header></Header>
            <div className='flex justify-start items-start gap-4'>
                {/* Left */}
                <div className='w-[25%]'>
                    <Load_Category_btn></Load_Category_btn>
                </div>
                {/* Right */}
                <div className='w-[70%]'>
                    {
                        navigation.state === 'loading' ? <div>
                            <div className='flex w-full h-[100vh] justify-center items-center'>
                                <div className='loading loading-spinner text-warning'></div>
                            </div>
                        </div> : <Outlet></Outlet>
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;