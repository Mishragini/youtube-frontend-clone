import {useState} from'react';
import { sideNavbarState } from '@/store/atom';
import { useRecoilState} from 'recoil';
import SideNavbar from './SideNavbar';
export default function Appbar(){
    const [open,setOpen]=useRecoilState(sideNavbarState);

    const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };
  const handleSideNavbar=()=>{
    console.log(open)
    setOpen(!open);
  }
    return(
        <div className="flex justify-between mt-4">
           
            <div className="flex mt-2 ">
            <button
  onClick={handleSideNavbar}
  data-drawer-target="separator-sidebar"
  data-drawer-toggle="separator-sidebar"
  aria-controls="separator-sidebar"
  type="button"
  className="inline-flex items-center p-1 mr-2 ms-3 -mt-2 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8"
  >
    <path
      fill-rule="evenodd"
      d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
      clip-rule="evenodd"
    />
  </svg>
</button>


            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="youtube" width="32" height="32">
  <g fill-rule="evenodd" clip-rule="evenodd">
    <path fill="#F44336" d="M15.32 4.06c-.434-.772-.905-.914-1.864-.968C12.498 3.027 10.089 3 8.002 3c-2.091 0-4.501.027-5.458.091-.957.055-1.429.196-1.867.969C.23 4.831 0 6.159 0 8.497v.008c0 2.328.23 3.666.677 4.429.438.772.909.912 1.866.977.958.056 3.368.089 5.459.089 2.087 0 4.496-.033 5.455-.088.959-.065 1.43-.205 1.864-.977.451-.763.679-2.101.679-4.429v-.008c0-2.339-.228-3.667-.68-4.438z"></path>
    <path fill="#FAFAFA" d="M6 11.5v-6l5 3z"></path>
  </g>
</svg>

            <div className="ml-2 text-2xl font-bold text-white">MeTube</div>
            </div>
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
    {open&&(<SideNavbar />)}

        </div>
    )
}
