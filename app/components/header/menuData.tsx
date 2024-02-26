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
    path: "/pages/about",
    newTab: false,
  },
  {
    id: 33,
    title: "History",
    path: "/",
    newTab: false,
  },

  {
    id: 4,
    title: "Products",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Aliphatic Solvents",
        path: "/pages/products/aliphatic",
        newTab: false,
      },
      {
        id: 42,
        title: "Aromatic Solvents",
        path: "/pages/products",
        newTab: false,
      },
      {
        id: 43,
        title: "Packaged Products",
        path: "/pages/products",
        newTab: false,
      },
      {
        id: 43,
        title: "Customized Products",
        path: "/pages/products",
        newTab: false,
      },
      {
        id: 43,
        title: "Trading Products",
        path: "/pages/products",
        newTab: false,
      },


    ],
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];
export default MenuData;
