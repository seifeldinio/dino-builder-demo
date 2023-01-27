import { AiTwotoneAppstore, AiTwotoneEdit } from "react-icons/ai";
import { MdDesignServices } from "react-icons/md";
import { BiNotification, BiStoreAlt } from "react-icons/bi";
import { BsGearFill } from "react-icons/bs";
import { RiChat3Fill } from "react-icons/ri";
import { HiOutlineDocument } from "react-icons/hi";
import { IoIosList } from "react-icons/io";

// Sidebar Links
export const links = [
  {
    title: "Home",
    links: [
      {
        name: "Dashboard",
        slug: "dashboard",
        icon: <AiTwotoneAppstore className="dark:text-white text-black" />,
      },
      {
        name: "App",
        slug: "app",
        icon: <MdDesignServices className="dark:text-white text-black" />,
      },
      {
        name: "Store",
        slug: "store",
        icon: <BiStoreAlt className="dark:text-white text-black" />,
      },
    ],
  },

  {
    title: "Connect",
    links: [
      {
        name: "Connect",
        slug: "connect",
        icon: <RiChat3Fill className="dark:text-white text-black" />,
      },

      {
        name: "Documents",
        slug: "documents",
        icon: <HiOutlineDocument className="dark:text-white text-black" />,
      },
    ],
  },
  {
    title: "Info",
    links: [
      // {
      //   name: "Billing",
      //   slug: "billing",
      //   icon: <IoMdCard className="dark:text-white text-black" />,
      // },
      {
        name: "Overview",
        slug: "overview",
        icon: <IoIosList className="dark:text-white text-black" />,
      },

      // {
      //   name: "Guides",
      //   slug: "guides",

      //   icon: <MdHelp className="dark:text-white text-black" />,
      // },
    ],
  },
];

// Mobile links
export const mobileLinks = [
  {
    title: "Home",
    links: [
      {
        name: "Dashboard",
        slug: "dashboard",
        icon: <AiTwotoneAppstore className="dark:text-white text-black" />,
      },
      // {
      //   name: "App",
      //   slug: "app",
      //   icon: <MdDesignServices className="dark:text-white text-black" />,
      // },
      {
        name: "Store",
        slug: "store",
        icon: <BiStoreAlt className="dark:text-white text-black" />,
      },
    ],
  },

  {
    title: "Connect",
    links: [
      {
        name: "Connect",
        slug: "connect",
        icon: <RiChat3Fill className="dark:text-white text-black" />,
      },

      {
        name: "Documents",
        slug: "documents",
        icon: <HiOutlineDocument className="dark:text-white text-black" />,
      },
    ],
  },
  {
    title: "Info",
    links: [
      // {
      //   name: "Billing",
      //   slug: "billing",
      //   icon: <IoMdCard className="dark:text-white text-black" />,
      // },
      {
        name: "Overview",
        slug: "overview",
        icon: <IoIosList className="dark:text-white text-black" />,
      },

      // {
      //   name: "Guides",
      //   slug: "guides",

      //   icon: <MdHelp className="dark:text-white text-black" />,
      // },
    ],
  },
];

// Settings Search all pages
export const pagesSearch = [
  {
    name: "Dashboard",
    slug: "/dashboard",
    icon: <AiTwotoneAppstore className="dark:text-white text-black" />,
    keywords: "dashboard status update bug release progress feature  live beta",
  },

  {
    name: "Store",
    slug: "/store",
    icon: <BiStoreAlt className="dark:text-white text-black" />,
    keywords:
      "store manage ar products augmented reality upload payment method recovery stripe credit card apple pay google",
  },

  {
    name: "Push notifications",
    slug: "/store/push-notifications",
    icon: <BiNotification className="dark:text-white text-black" />,
    keywords:
      "send push notification offer promote competition competitor devices abandoned cart communicate ai analysis analytics",
  },
  // {
  //   name: "Billing",
  //   slug: "/billing",
  //   icon: <IoMdCard className="dark:text-white text-black" />,
  //   keywords:
  //     "billing maintenance renewal cost paid amount remaining plan current payment",
  // },
  {
    name: "Connect",
    slug: "/connect",
    icon: <RiChat3Fill className="dark:text-white text-black" />,
    keywords:
      "connect teams microsoft ms communicate chat project manager support",
  },
  {
    name: "App",
    slug: "/app",
    icon: <MdDesignServices className="dark:text-white text-black" />,
    keywords: "app prototype beta design live release launch simulator simulation simple app example",
  },
  {
    name: "Documents",
    slug: "/documents",
    icon: <HiOutlineDocument className="dark:text-white text-black" />,
    keywords:
      "documents contract master signed branding files identity brand color scheme guideline logo",
  },
  {
    name: "Project overview",
    slug: "/overview",
    icon: <IoIosList className="dark:text-white text-black" />,
    keywords:
      "project overview general information countries country region timezone team features available description abilities",
  },
  // {
  //   name: "Guides",
  //   slug: "/guides",
  //   icon: <MdHelp className="dark:text-white text-black" />,
  //   keywords: "guides tutorial course playlist video how to create training",
  // },
  {
    name: "Settings",
    slug: "/settings",
    icon: <BsGearFill className="dark:text-white text-black" />,
    keywords:
      "settings edit change add ons dark mode light mode theme appearance abilities",
  },
  {
    name: "Edit Profile",
    slug: "/edit",
    icon: <AiTwotoneEdit className="dark:text-white text-black" />,
    keywords: "edit profile pic picture first name last ",
  },
];
