import React from 'react';
import { ComponentA } from './components/componentA';
import { ComponentB } from './components/componentB';
import { MyContext } from './context/MyContextProvaider';
import { useState } from 'react';

export const App = () => {

  const [themeColor, setThemeColor] = useState<string>('light');
  
  return (
    <div>
      <MyContext.Provider value={{ theme: themeColor, changeTheme: (themeValue: string) => {
        setThemeColor(themeValue)
      } }}>
        <ComponentA/>
        <ComponentB/>
      </MyContext.Provider>
    </div>
    
  );
}

export default App;