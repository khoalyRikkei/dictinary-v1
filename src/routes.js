import Dashboard from "views/Dictionary.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";

import BookStore from "views/BookStore.js";
import Upgrade from "views/Upgrade.js";
import { FaSpellCheck, FaRegUserCircle } from "react-icons/fa";
import {
  MdScreenSearchDesktop,
  MdOutlineAppRegistration,
} from "react-icons/md";
import { BiHome } from "react-icons/bi";
import { GiBookmark } from "react-icons/gi";
import Home from "views/Home";
const styleIcon = {
  fontSize: "30px",
  marginRight: "10px",
};

const dashboardRoutes = [
  // {
  //   upgrade: true,
  //   path: "/upgrade",
  //   name: "Đăng ký học tiếng Thái",
  //   icon: <MdOutlineAppRegistration style={styleIcon} />,
  //   element: <Upgrade />,
  //   layout: "/admin",
  // },
  {
    path: "/home",
    name: "Home",
    icon: <BiHome style={styleIcon} />,
    element: <Home />,
    layout: "/admin",
  },
  {
    path: "/dictionary",
    name: "Từ điển Thái Việt",
    icon: <FaSpellCheck style={styleIcon} />,
    element: <Dashboard />,
    layout: "/admin",
  },
  // {
  //   path: "/user",
  //   name: "User Profile",
  //   icon: <FaRegUserCircle style={styleIcon} />,
  //   element: <UserProfile />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/top-word",
  //   name: "Top word",
  //   icon: <MdScreenSearchDesktop style={styleIcon} />,
  //   element: <TableList />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/top-book",
  //   name: "Top sách",
  //   icon: <GiBookmark style={styleIcon} />,
  //   element: <BookStore />,
  //   layout: "/admin",
  // },
];

export default dashboardRoutes;
