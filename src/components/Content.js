import React from 'react';
import ImageOne from '../images/potato-1.jpg';
import ImageTwo from '../images/potato-2.jpg';

const Content = () => {
  return (
    <>
      <div className='menu-card'>
        <img src={ImageOne} alt='egg' className='h-full rounded mb-20 shadow' />
        <div className='center-content'>
          <h2 className='text-2xl mb-2'>Hasselback Potatoes</h2>
          <p className='mb-2'>The accordion-like slits are perfect for topping with our savory scallion butter, or breadcrumbs, cheese, bacon, herbs ...</p>
          <span>$16</span>
          
        </div>
      </div>
      <div className='menu-card'>
        <img src={ImageTwo} alt='egg' className='h-full rounded mb-20 shadow' />
        <div className='center-content'>
          <h2 className='text-2xl mb-2'>Grilled Sweet Potatoes With Lemon-Herb Sauce</h2>
          <p className='mb-2'>The lemon-herb sauce and cooling Greek yogurt make this winter starch summer-ready.</p>
          <span>$18</span>
        </div>
      </div>
    </>
  );
};

export default Content;
