import React from 'react';
import MyPhoto from '../MyPhoto/MyPhoto';
import Intro from '../Intro/Intro';
import Textanimation from '../../Textanimation/TextAnimation';


const HeroLayout = () => {
    return (
        <div className='sm:w-[90%]   mx-auto  mt-10 px-5 py-10'>

            <div className='flex sm:flex-row flex-col-reverse gap-2 sm:gap-0  justify-between'>
                <Intro></Intro>

                <MyPhoto></MyPhoto>
            </div>
            {/* 
        <Textanimation text="Just some shiny text!" disabled={false} speed={3} className='custom-class'></Textanimation> */}
        </div>
    );
};

export default HeroLayout;