import { MenuItem } from "./menu-item";

export interface Category {
    id:number,
    vendor_id:number,
    resturant_id:number,
    name:string,
    href:any,
    menuitems:MenuItem[]


}
