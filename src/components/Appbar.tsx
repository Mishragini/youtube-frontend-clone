import {useState} from'react';

import SideNavbar from './SideNavbar';
import ToggleButton from './ToggleButton';
import { useRecoilValue } from 'recoil';
import { sideNavbarState } from '@/store/atom';
export default function Appbar(){
   const open=useRecoilValue(sideNavbarState);
    const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };
 
    return(
        <div className="flex justify-between mt-4 ">
           
            <ToggleButton ></ToggleButton>
            <div className="flex">
            <div className="search-bar flex items-center">
        <div className="relative">
          <input
      className={` border border-gray-500 rounded-full pl-4 pr-8 py-3 text-white bg-black ${
        isSearchVisible ? 'visible' : 'invisible'
      } sm:visible md:w-64 lg:w-96`}
            type="text"
            placeholder="Search..."
          />
           <button onClick={toggleSearch} className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-transparent border-none p-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
      </div> 
      <div className="border  border-gray-500 rounded-full p-3  bg-gray-500 ml-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
</svg>

      </div>
      </div>    
    <div className="flex justify-between mt-2 mr-2 ">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-4 mt-2">
<path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-4 mt-2 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
  </svg>
  <img className="rounded-full w-10 h-10 "src='pfp.png' />
    </div>
    {open&&<SideNavbar/>}

        </div>
    )
}
