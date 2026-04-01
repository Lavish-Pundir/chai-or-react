import React from 'react'
import useTheme from '../contexts/Theme';

export default function ThemeBtn() { 
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const onChangeBtn = () => {
    if (themeMode === 'light') {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      
      <input
        type="checkbox"
        className="sr-only peer"
        checked={themeMode === 'dark'}
        onChange={onChangeBtn} 
         
         
      />

      <div className="w-11 h-6 bg-gray-300 dark:bg-gray-700  rounded-full 
        peer-checked:bg-blue-600 transition 
        after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
        after:bg-white after:border after:rounded-full 
        after:h-5 after:w-5 after:transition-all 
        peer-checked:after:translate-x-full">
      </div>

      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">
        {themeMode === 'light' ? '🌞 Light' : '🌙 Dark'}
      </span>
    </label>
  );
}