import React from 'react';
import { FaDollarSign  } from "react-icons/fa";

const Price = ({price}) => {
    return (
      <div>
          {[ ...Array(price)].map(star => {  // Hago 4arrays vacios y con map los convierto en FaDollarSign
           return <FaDollarSign size={20} key={Math.floor(Math.random() * 10000)}/>   
          })}
          
      </div> 
    );
};

export default Price;