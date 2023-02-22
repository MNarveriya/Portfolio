import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "About",
    path: "/about",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text"
  },
  {
    title: "Project",
    path: "/project",
    icon: <AiIcons.AiOutlineProject />,
    cName: "nav-text"
  },
  {
    title: "Service",
    path: "/service",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text"
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text"
  }
];
