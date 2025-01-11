export const menu = {
  open: {
    width: "250px",
    height: "300px",
    top: "-15px",
    right: "-15px",
    transition: { duration: 0.3, type: "spring", stiffness: 200, damping: 30 }
  },
  closed: {
    width: "45px",
    height: "45px",
    top: "0px",
    right: "0px",
    transition: { 
      duration: 0.3,
      type: "spring",
      stiffness: 200,
      damping: 30
    }
  }
};
export const links = [
  {
    url: "/timeline",
    linkTo: "Timeline",
  },
  {
    url: "/team",
    linkTo: "Team",
  },
  {
    url: "/faq",
    linkTo: "FAQ",
  },
  {
    url: "/work-with-us",
    linkTo: "Work with Us",
  },
];
