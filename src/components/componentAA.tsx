import React from 'react';
import { useContext } from 'react';
import { MyContext } from '../context/MyContextProvaider';
 import './componentAA.css';

export const ComponentAA = () => {

  const { theme } = useContext(MyContext);
  return (
    <div className={theme}>
      <h1>This is ComponentAA {theme}</h1>
    </div>
  );
};