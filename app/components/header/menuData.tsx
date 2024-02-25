import { Menu } from "@/app/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/pages/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Products",
    path: "/pages/products",
    newTab: false,
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  
  {
    id: 4,
    title: "Solutions",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Blog Grid Page",
        path: "/blog",
        newTab: false,
      },
      
    ],
  },
];
export default menuData;
