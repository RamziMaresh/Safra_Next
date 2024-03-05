import { Menu } from "../../types/menu";

const MenuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: " - Safra Profile",
        path: "/pages/about",
        newTab: false,
      },
      {
        id: 52,
        title: " - Safra Solutions For: ",
        path: "/pages/about/solutionsFor",
        newTab: false,
      },
      {
        id: 52,
        title: " - Safra History",
        path: "/pages/about/history",
        newTab: false,
      },
    ]
  },

  {
    id: 4,
    title: "Refinary",
    path: "",
    newTab: false,
    submenu: [
      {
        id: 71,
        title: " - Refinary Profile",
        path: "/pages/refinary",
        newTab: false,
      },
      {
        id: 72,
        title: " - Refinary Products",
        path: "/pages/refinary/reProducts",
        newTab: false,
      },
    ]
  },
  {
    id: 6,
    title: "SPP Products",
    path: "/pages/products/spp",
    newTab: false,
  },
  {
    id: 3,
    title: "Contact",
    path: "/pages/contact",
    newTab: false,
  },
];
export default MenuData;
