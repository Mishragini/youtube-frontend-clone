import { atom } from "recoil";

export const sideNavbarState=atom({
    key:'sideNavbarState',
    default:true
})

export const smallScreenNavbarState=atom({
    key:'smallScreenNavbarState',
    default:false
})