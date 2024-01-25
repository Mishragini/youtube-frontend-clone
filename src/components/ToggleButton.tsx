import { sideNavbarState } from "@/store/atom";
import { useRecoilState } from "recoil";
export default function ToggleButton(){
    const [open,setOpen]=useRecoilState(sideNavbarState);

    const handleSideNavbar=()=>{
        setOpen(!open);
      }
      return(<>
        <div className="flex mt-2 ">
            <button
  onClick={handleSideNavbar}
  data-drawer-target="separator-sidebar"
  data-drawer-toggle="separator-sidebar"
  aria-controls="separator-sidebar"
  type="button"
  className="inline-flex items-center p-1 mr-2 ms-3 -mt-1 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
      </>)
}