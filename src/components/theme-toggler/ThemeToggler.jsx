"use client"
import React, {useState, useEffect} from 'react';
import { useTheme } from 'next-themes';

import {FaMoon, FaSun} from 'react-icons/fa'


const ThemeToggler = () => {
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();


    useEffect(() =>{
        setMounted(true)
    }, []);

    if (!mounted){
        return null;
    }

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : "dark")} className='w-full flex justify-center'>{theme === 'light' ? <FaMoon/> : <FaSun />}</button>
  )
}

export default ThemeToggler
