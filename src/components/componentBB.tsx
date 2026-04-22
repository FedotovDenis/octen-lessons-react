import React, { useContext } from 'react';
import { MyContext } from '../context/MyContextProvaider';
 

export const ComponentBB = () => {

  const { changeTheme } = useContext(MyContext);

  const handlerDark = () => {
    changeTheme('dark');
  }

  const handlerLight = () => {
    changeTheme('light');
  }

  return (
    <div>    
      <button onClick={handlerDark}>Change Theme to dark</button>
      <button onClick={handlerLight}>Change Theme to light</button>
  </div>
  );
};