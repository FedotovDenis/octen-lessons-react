import { createContext } from "react";




type MyContextType = {
    counterValue: number;
    increment: (val: number) => void;
};

export const init = {
    counterValue: 0,
    increment: (val: number) => {
        console.log(val);
    }
};

export const MyContext = createContext<MyContextType>(init);
