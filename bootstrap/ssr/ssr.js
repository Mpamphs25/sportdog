import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Link, useForm, createInertiaApp } from "@inertiajs/react";
import { FaFacebook, FaTwitter, FaAngleLeft, FaAngleRight, FaBars, FaWindowClose, FaSearch, FaInstagram, FaYoutube } from "react-icons/fa/index.esm.js";
import { RiDoubleQuotesL } from "react-icons/ri/index.esm.js";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
function Widget() {
  return /* @__PURE__ */ jsxs("div", { className: " mt-12 lg:mt-15  lg:w-4/12 ", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl italic text-blue-900 font-bold mt-1", children: "ΤΕΛΕΥΤΑΙΑ ΝΕΑ" }),
    /* @__PURE__ */ jsx("div", { className: "mt-5 ", children: /* @__PURE__ */ jsxs("ul", { className: "flex justify-between items-center ", children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { className: "transition text-2xl text-blue-300 hover:text-blue-700 ", children: "'Ολα" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { className: "transition text-2xl text-blue-300 hover:text-blue-700 ", children: "Sports" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { className: "transition text-2xl text-blue-300 hover:text-blue-700 ", children: "Life" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { className: "transition text-2xl text-blue-300 hover:text-blue-700 ", children: "Hot Dog" }) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "bg-gray-100 h-34 lg:h-64 overflow-y-scroll border-t border-blue-900 p-2 ", children: [
      /* @__PURE__ */ jsxs("div", { className: "", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
          /* @__PURE__ */ jsx("time", { children: "10:40" }),
          " |",
          /* @__PURE__ */ jsx("span", { children: "Ποδοσφαιρο" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: " border-b-2 ", children: /* @__PURE__ */ jsx(Link, { className: "  text-base text-blue-900 font-bold  ", children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, facilis" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
          /* @__PURE__ */ jsx("time", { children: "10:40" }),
          " |",
          /* @__PURE__ */ jsx("span", { children: "Ποδοσφαιρο" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: " border-b-2 ", children: /* @__PURE__ */ jsx(Link, { className: "  text-base text-blue-900 font-bold  ", children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, facilis" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
          /* @__PURE__ */ jsx("time", { children: "10:40" }),
          " |",
          /* @__PURE__ */ jsx("span", { children: "Ποδοσφαιρο" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: " border-b-2 ", children: /* @__PURE__ */ jsx(Link, { className: "  text-base text-blue-900 font-bold  ", children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, facilis" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
          /* @__PURE__ */ jsx("time", { children: "10:40" }),
          " |",
          /* @__PURE__ */ jsx("span", { children: "Ποδοσφαιρο" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: " border-b-2 ", children: /* @__PURE__ */ jsx(Link, { className: "  text-base text-blue-900 font-bold  ", children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, facilis" }) })
      ] })
    ] })
  ] });
}
function Article$1({ article }) {
  const { title, description, text } = article;
  return /* @__PURE__ */ jsx("section", { className: "max-w-5xl mx-auto relative ", children: /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col sm:flex-row", children: [
    /* @__PURE__ */ jsxs("article", { className: "w-full sm:w-8/12    sm:px-6 py-4 ", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-12 text-5xl  font-bold h-20 ", children: title }),
      /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("img", { className: "w-full", src: "/images/ball.jpg", alt: title }) }),
      /* @__PURE__ */ jsxs("div", { className: "sm:w-5/6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-base italic mb-2 ", children: description }),
        /* @__PURE__ */ jsx("div", { className: "mt-2 ", children: /* @__PURE__ */ jsx("p", { className: "  py-4  text-2xl mb-4", children: text }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Widget, {})
  ] }) });
}
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Article$1
}, Symbol.toStringTag, { value: "Module" }));
function Socials({ show }) {
  if (show) {
    return /* @__PURE__ */ jsxs("div", { className: " bg-black/50 w-28 h-24 flex flex-col justify-center items-center absolute right-0 top-0   ", children: [
      /* @__PURE__ */ jsx("h6", { className: "text-white text-md", children: "SHARE WITH" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2", children: [
        /* @__PURE__ */ jsx(FaFacebook, { className: "cursor-pointer transition-all duration-300 rounded-full border-none w-8 h-8 text-white bg-transparent hover:bg-blue-700 " }),
        /* @__PURE__ */ jsx(FaTwitter, { className: " cursor-pointer transition-all duration-300 rounded-full   w-8 h-8 text-white bg-transparent border-white hover:text-sky-600  " })
      ] })
    ] });
  }
}
function Card$2({ text, title, slug, author, date, category }) {
  const [show, setShow] = useState(false);
  return /* @__PURE__ */ jsx("div", { className: "  mt-12 sm:w-6/12 p-2", onMouseEnter: () => !show ? setShow(true) : setShow(false), onMouseLeave: () => !show ? setShow(true) : setShow(false), children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx("img", { className: " border-4 border-sky-600 relative", src: "/images/ball.jpg", alt: title }),
    /* @__PURE__ */ jsx(Socials, { show }),
    /* @__PURE__ */ jsxs("div", { className: "bg-sky-100 h-54  p-3  relative", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex", children: [
        /* @__PURE__ */ jsxs("span", { className: "absolute left-0 bottom-full -mb-4   p-2 text-center font-bold bg-white", children: [
          " ",
          /* @__PURE__ */ jsx(Link, { href: route("categories.index", [category["slug"]]), children: category.title })
        ] }),
        /* @__PURE__ */ jsx("time", { className: "text-sm  ml-auto -mt-3 ", children: date })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1 h-52 justify-center lg:gap-3", children: [
        /* @__PURE__ */ jsxs(Link, { href: route("article.index", { article: slug }), children: [
          " ",
          /* @__PURE__ */ jsx("h2", { className: " text-3xl font-bold text-left   ", children: title })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-700 text-md  ", children: text.substring(0, 150) }),
        /* @__PURE__ */ jsx("p", { className: "  text-blue ", children: /* @__PURE__ */ jsx(Link, { href: route("authors.index", [author["slug"]]), className: "italic ", children: author.title_by }) })
      ] })
    ] })
  ] }) });
}
function Maincardsmall({ text, title, slug, category, author, date }) {
  const [show, setShow] = useState(false);
  return /* @__PURE__ */ jsx("article", { className: " lg:max-w-sm lg:flex lg:items-center lg:flex-col lg:gap-2 lg:w-1/4 relative ", onMouseEnter: () => !show ? setShow(true) : setShow(false), onMouseLeave: () => !show ? setShow(true) : setShow(false), children: /* @__PURE__ */ jsxs("div", { className: "", children: [
    /* @__PURE__ */ jsx("img", { className: "w-full border-4 border-sky-600 relative", src: "/images/ball.jpg", alt: title }),
    /* @__PURE__ */ jsx(Socials, { show }),
    /* @__PURE__ */ jsxs("div", { className: "bg-sky-100 p-3  relative", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex", children: [
        /* @__PURE__ */ jsxs("span", { className: "absolute left-0 bottom-full -mb-4   p-2 text-center font-bold bg-white", children: [
          " ",
          /* @__PURE__ */ jsx(Link, { href: route("categories.index", [category["slug"]]), children: category.title })
        ] }),
        /* @__PURE__ */ jsx("time", { className: "text-sm  ml-auto -mt-3 ", children: date })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col  gap-1 lg:gap-0", children: [
        /* @__PURE__ */ jsxs(Link, { href: route("article.index", { article: slug }), children: [
          " ",
          /* @__PURE__ */ jsx("h2", { className: " text-3xl font-bold text-left   mt-3", children: title })
        ] }),
        /* @__PURE__ */ jsx("p", { className: `text-gray-700 text-md   `, children: text.substring(0, 150) }),
        /* @__PURE__ */ jsxs("p", { className: "  text-blue", children: [
          " ",
          /* @__PURE__ */ jsx(Link, { href: route("authors.index", [author["slug"]]), className: "italic ", children: author.title_by })
        ] })
      ] })
    ] })
  ] }) });
}
function Article({ text, title, description, slug, index, category, author, date }) {
  const [show, setShow] = useState(false);
  if (index === 0) {
    return /* @__PURE__ */ jsx("article", { className: "mb-10 md:h-80 lg:w-3/6 shadow-lg relative ", onMouseEnter: () => !show ? setShow(true) : setShow(false), onMouseLeave: () => !show ? setShow(true) : setShow(false), children: /* @__PURE__ */ jsxs("div", { style: { backgroundImage: `url('/images/ball.jpg')` }, className: "h-80 lg:max-w-7xl   bg-cover bg-repeat bg-center  lg:h-96 flex  flex-col items-start justify-end  gap-2 ", children: [
      /* @__PURE__ */ jsx(Socials, { show }),
      /* @__PURE__ */ jsx(Link, { href: route("categories.index", [category["slug"]]), as: "button", className: "px-3 py-1 bg-white ml-3 font-bold", children: category.title }),
      /* @__PURE__ */ jsxs(Link, { href: route("article.index", { article: slug }), children: [
        " ",
        /* @__PURE__ */ jsx("h2", { className: "px-3 text-4xl md:text-5xl text-white font-bold   text-left", children: title })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "px-4 text-white text-lg md:text-2xl ", children: description }),
      /* @__PURE__ */ jsx("p", { className: "ml-3 mb-2 text-white text-sm", children: /* @__PURE__ */ jsx(Link, { href: route("authors.index", [author["slug"]]), className: "italic ", children: author.title_by }) })
    ] }) });
  }
  if (index === 1) {
    return /* @__PURE__ */ jsx(Maincardsmall, { slug, text, title, category, author, date });
  }
}
function Cards(props) {
  const [show, setShow] = useState(false);
  return /* @__PURE__ */ jsx("div", { className: "relative w-full sm:w-2/4", children: /* @__PURE__ */ jsxs("div", { onMouseEnter: () => !show ? setShow(true) : setShow(false), onMouseLeave: () => !show ? setShow(true) : setShow(false), style: { backgroundImage: `url('/images/ball.jpg')` }, className: "h-80 lg:max-w-7xl   bg-cover bg-repeat bg-center  lg:h-96 flex  flex-col items-start justify-end  gap-2 ", children: [
    /* @__PURE__ */ jsx(Socials, { show }),
    /* @__PURE__ */ jsx(Link, { as: "button", className: "px-3 py-1 bg-white ml-3", href: route("categories.index", [props.category["slug"]]), children: props.category.title }),
    /* @__PURE__ */ jsxs(Link, { href: route("article.index", { article: props.slug }), children: [
      " ",
      /* @__PURE__ */ jsx("h2", { className: "px-3 text-4xl md:text-5xl text-white font-bold   text-left", children: props.title })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "px-4 text-white text-lg md:text-2xl ", children: props.description }),
    /* @__PURE__ */ jsx("p", { className: "ml-3 mb-2 text-white text-sm", children: /* @__PURE__ */ jsx(Link, { href: route("authors.index", [props.author["slug"]]), className: "italic ", children: props.author.title_by }) })
  ] }) });
}
function MiddleSectionTwo({ newRestItemsTwo }) {
  return /* @__PURE__ */ jsx("section", { className: "max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between gap-2 mt-20", children: newRestItemsTwo.map((item) => {
    return /* @__PURE__ */ jsx(Cards, { ...item }, item.id);
  }) });
}
function Section({ children }) {
  return /* @__PURE__ */ jsx("section", { className: "max-w-screen-xl mx-auto flex  flex-wrap gap-3 sm:mx-auto sm:gap-0   ", children });
}
function Blogger({ name, picture }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col  gap-1 sm:gap-0 lg:flex-row items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("img", { className: "w-20 rounded-full", src: picture.thumbnail, alt: name.last }),
      /* @__PURE__ */ jsx(RiDoubleQuotesL, { style: { fill: "white" }, className: "bg-sky-500 rounded-full w-6 h-6 absolute top-0 right-0" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1 sm:gap-0 p-4 flex-1", children: [
      /* @__PURE__ */ jsxs("h4", { className: "text-lg text-sky-800", children: [
        name.first,
        " ",
        name.last
      ] }),
      /* @__PURE__ */ jsx(Link, { className: " text-2xl font-bold", children: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, placeat." })
    ] })
  ] });
}
const url = "https://randomuser.me/api/?results=3";
function Bloggers() {
  const [user, setUser] = useState([]);
  useState([]);
  useState([]);
  const getUsers = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (!data)
        return;
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };
  const { results } = user;
  useEffect(() => {
    getUsers();
  }, []);
  return /* @__PURE__ */ jsxs("section", { className: "max-w-screen-xl mx-auto mt-12   ", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1 sm:gap-0 sm:flex-row justify-evenly items-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl uppercase  font-bold text-blue-900 ", children: "bloggers" }),
      /* @__PURE__ */ jsx("div", { className: "flex-1  border-b border-gray-300 mx-6" }),
      /* @__PURE__ */ jsx(Link, { className: "text-blue-600 font-bold italic", children: " Δείτε όλους τους bloggers " })
    ] }),
    /* @__PURE__ */ jsx("div", { className: " mt-6 flex flex-col gap-2 sm:gap-0 sm:flex-row  justify-evenly", children: results == null ? void 0 : results.map((result, index) => {
      const { name, picture } = result;
      return /* @__PURE__ */ jsx(Blogger, { name, picture }, index);
    }) })
  ] });
}
function Card$1({ slug, text, title, category, date, author }) {
  const [show, setShow] = useState(false);
  return (
    //h-64
    /* @__PURE__ */ jsxs("div", { className: "relative", onMouseEnter: () => !show ? setShow(true) : setShow(false), onMouseLeave: () => !show ? setShow(true) : setShow(false), children: [
      /* @__PURE__ */ jsx("img", { className: "  relative", src: "/images/ball.jpg", alt: title }),
      /* @__PURE__ */ jsx(Socials, { show }),
      /* @__PURE__ */ jsxs("div", { className: "   p-3  relative", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex", children: [
          /* @__PURE__ */ jsx("span", { className: "absolute left-0 bottom-full -mb-4   p-2 text-center font-bold bg-white", children: /* @__PURE__ */ jsx(Link, { href: route("categories.index", [category["slug"]]), children: category.title }) }),
          /* @__PURE__ */ jsx("time", { className: "text-sm  ml-auto -mt-3 ", children: date })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1  ", children: [
          /* @__PURE__ */ jsxs(Link, { href: route("article.index", { article: slug }), children: [
            " ",
            /* @__PURE__ */ jsx("h2", { className: " text-2xl font-bold text-left   my-3 hover:text-blue-900", children: title })
          ] }),
          /* @__PURE__ */ jsx("p", { className: `text-gray-700 text-md   `, children: text.substring(0, 90) }),
          /* @__PURE__ */ jsx("p", { className: "  text-blue-700", children: /* @__PURE__ */ jsx(Link, { href: route("authors.index", [author["slug"]]), className: "italic ", children: author.title_by }) })
        ] })
      ] })
    ] })
  );
}
function BigCard({ slug, description, title, category, author }) {
  const [show, setShow] = useState(false);
  return /* @__PURE__ */ jsx("div", { className: "relative", onMouseEnter: () => !show ? setShow(true) : setShow(false), onMouseLeave: () => !show ? setShow(true) : setShow(false), children: /* @__PURE__ */ jsxs("div", { style: { backgroundImage: `url('/images/ball.jpg')`, height: "700px" }, className: "lg:max-w-7xl   bg-cover bg-repeat bg-center flex items-start justify-end gap-5  flex-col   gap-2 ", children: [
    /* @__PURE__ */ jsx(Socials, { show }),
    /* @__PURE__ */ jsx(Link, { href: route("categories.index", [category["slug"]]), as: "button", className: "px-3 py-1 bg-white ml-3", children: category.title }),
    /* @__PURE__ */ jsxs(Link, { href: route("article.index", { article: slug }), children: [
      " ",
      /* @__PURE__ */ jsx("h2", { className: "px-3 text-4xl md:text-5xl text-white font-bold   text-left", children: title })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "px-4 text-white text-lg md:text-2xl ", children: description }),
    /* @__PURE__ */ jsx("p", { className: "ml-3 mb-2 text-white text-sm", children: /* @__PURE__ */ jsx(Link, { href: route("authors.index", [author["slug"]]), className: "italic ", children: author.title_by }) })
  ] }) });
}
function MiddleSection({ restItems }) {
  return /* @__PURE__ */ jsx("section", { className: "max-w-screen-xl mx-auto grid sm:grid-cols-4 lg:grid-cols-8 gap-3 mt-20", children: restItems.map((article, index) => {
    const { id, text, title, description, slug, category, author, date } = article;
    if (index === 0) {
      return /* @__PURE__ */ jsx("div", { className: " sm:col-span-2 sm:row-span-2  self-stretch justify-self-stretch ", children: /* @__PURE__ */ jsx(BigCard, { slug, description, title, category, author }) }, id);
    }
    if (index === 3) {
      return /* @__PURE__ */ jsx("div", { className: "sm:col-span-4  lg:col-start-7 lg:col-end-9 lg:row-start-2 lg:row-span-2  " }, id);
    } else {
      return /* @__PURE__ */ jsx("div", { className: " sm:col-span-2", children: /* @__PURE__ */ jsx(Card$1, { slug, text, title, category, author, date }) }, id);
    }
  }) });
}
function Card(props) {
  const [show, setShow] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "relative mb-4", onMouseEnter: () => !show ? setShow(true) : setShow(false), onMouseLeave: () => !show ? setShow(true) : setShow(false), children: [
    /* @__PURE__ */ jsx("img", { className: " border-4 border-sky-600 relative", src: "/images/ball.jpg", alt: props.title }),
    /* @__PURE__ */ jsx(Socials, { show }),
    /* @__PURE__ */ jsxs("div", { className: " h-64  p-3  relative", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex", children: [
        /* @__PURE__ */ jsxs("span", { className: "absolute left-0 bottom-full -mb-4   p-2 text-center font-bold bg-white", children: [
          " ",
          /* @__PURE__ */ jsx(Link, { href: route("categories.index", [props.category["slug"]]), children: props.category.title })
        ] }),
        /* @__PURE__ */ jsx("time", { className: "text-sm  ml-auto -mt-3 ", children: props.date })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1  lg:gap-3", children: [
        /* @__PURE__ */ jsxs(Link, { href: route("article.index", { article: props.slug }), children: [
          " ",
          /* @__PURE__ */ jsx("h2", { className: " text-3xl font-bold text-left   my-3", children: props.title })
        ] }),
        /* @__PURE__ */ jsx("p", { className: `text-gray-700 text-md   `, children: props.text.substring(0, 150) }),
        /* @__PURE__ */ jsx("p", { className: "  text-blue", children: /* @__PURE__ */ jsx(Link, { href: route("authors.index", [props.author["slug"]]), className: "italic ", children: props.author.title_by }) })
      ] })
    ] })
  ] });
}
function ReadMoreButton() {
  return /* @__PURE__ */ jsx(Link, { href: "#", className: " sm:w-96 border-2 border-gray-500 p-2 font-bold transition  ease-in-out delay-150 hover:bg-blue-900 hover:text-white", as: "button", children: "ΔΙΑΒΑΣΤΕ ΠΕΡΙΣΣΟΤΕΡΑ ΑΡΘΡΑ" });
}
function SliderCard({ title, slug, index, current }) {
  return /* @__PURE__ */ jsxs("div", { className: "mt-16 absolute top-0 left-0 transition ease-in-out delay-150", style: {
    transform: `translateX( ${100 * (index - current)}%)`
  }, children: [
    /* @__PURE__ */ jsx("img", { className: "w-full mt-10 max-h-96  relative", src: "/images/ball.jpg", alt: title }),
    /* @__PURE__ */ jsxs("div", { className: "  p-3  relative", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex", children: [
        /* @__PURE__ */ jsx("span", { className: "absolute left-0 bottom-full -mb-4   p-2 text-center font-bold bg-white", children: "Ποδοσφαιρο" }),
        /* @__PURE__ */ jsx("time", { className: "text-sm text-white ml-auto -mt-3 ", children: "14-6-2023 11:11" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col   ", children: /* @__PURE__ */ jsx(Link, { href: route("article.index", { article: slug }), children: /* @__PURE__ */ jsx("h2", { className: " text-2xl font-bold text-left text-white  my-3 hover:text-blue-900", children: title }) }) })
    ] })
  ] });
}
function SliderSmall({ bets }) {
  const [betSlider, setBetSLider] = useState(bets);
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd)
      return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      slideLeft();
    }
    if (isRightSwipe) {
      slideRight();
    }
  };
  const slideRight = () => {
    current >= betSlider.length - 1 ? setCurrent(0) : setCurrent(current + 1);
  };
  const slideLeft = () => {
    current <= 0 ? setCurrent(betSlider.length - 1) : setCurrent(current - 1);
  };
  useEffect(() => {
    let slideId = setInterval(() => {
      slideRight();
    }, 5e3);
    return () => clearInterval(slideId);
  }, [current]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "w-full", onTouchStart, onTouchMove, onTouchEnd, children: betSlider.map((bet, index) => {
      const { text, title, slug } = bet;
      return /* @__PURE__ */ jsx(
        SliderCard,
        {
          slug,
          text,
          title,
          slideRight,
          slideLeft,
          current,
          index
        }
      );
    }) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("button", { onClick: slideLeft, children: /* @__PURE__ */ jsx(FaAngleLeft, { className: "text-white text-5xl ", style: { position: "absolute", top: "51%", left: "-4%" } }) }),
      /* @__PURE__ */ jsx("button", { onClick: slideRight, children: /* @__PURE__ */ jsx(FaAngleRight, { className: " text-white text-5xl ", style: { position: "absolute", top: "50%", right: "-4%" } }) })
    ] })
  ] });
}
function MiddleSectionThree({ newRestItemsFour, bets }) {
  return /* @__PURE__ */ jsxs("section", { className: "max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between gap-2 mt-20 ", children: [
    /* @__PURE__ */ jsxs("div", { className: "order-2 sm:order-1 sm:w-3/4 grid  sm:grid-cols-2 lg:grid-cols-3 gap-4  -mt-10  ", children: [
      newRestItemsFour.map((item) => {
        return /* @__PURE__ */ jsx(Card, { ...item }, item.id);
      }),
      /* @__PURE__ */ jsx("div", { className: "mx-auto sm:col-span-2 lg:col-span-3 sm:mt-14 ", children: /* @__PURE__ */ jsx(ReadMoreButton, {}) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden  order-1 sm:order-2 sm:w-1/5 -mt-36", children: /* @__PURE__ */ jsx(SliderSmall, { bets }) })
  ] });
}
function SliderBig({ bets }) {
  const [betSlider, setBetSLider] = useState(bets);
  const [current, setCurrent] = useState(0);
  const slideRight = () => {
    current >= betSlider.length - 3 ? setCurrent(0) : setCurrent(current + 3);
  };
  const slideLeft = () => {
    current <= 0 ? setCurrent(betSlider.length - 3) : setCurrent(current - 3);
  };
  useEffect(() => {
    let slideId = setInterval(() => {
      slideRight();
    }, 5e3);
    return () => clearInterval(slideId);
  }, [current]);
  return /* @__PURE__ */ jsxs("div", { className: " mx-auto flex justify-center items-end  gap-3 ", children: [
    betSlider.map((bet, index) => {
      const { title, slug } = bet;
      if (index === current || index === current + 1 || index === current + 2) {
        return /* @__PURE__ */ jsxs("div", { className: "md:w-1/4  lg:1/3", children: [
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { className: "w-full  relative", src: "/images/ball.jpg", alt: title }) }),
          /* @__PURE__ */ jsxs("div", { className: "  p-3  relative", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex", children: [
              /* @__PURE__ */ jsx("span", { className: "absolute left-0 bottom-full -mb-4   p-2 text-center font-bold bg-white", children: "Ποδοσφαιρο" }),
              /* @__PURE__ */ jsx("time", { className: "text-sm text-white ml-auto -mt-3 ", children: "14-6-2023 11:11" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-col  h-32 justify-start  ", children: /* @__PURE__ */ jsx(Link, { href: route("article.index", { article: slug }), children: /* @__PURE__ */ jsx("h2", { className: " text-xl xl:text-2xl font-bold text-left text-white  my-3 ", children: title }) }) })
          ] })
        ] });
      }
    }),
    /* @__PURE__ */ jsxs("div", { className: "", children: [
      /* @__PURE__ */ jsx("button", { onClick: slideLeft, children: /* @__PURE__ */ jsx(FaAngleLeft, { className: "text-white text-5xl absolute md:top-2/4 md:left-11 md:w-12  md:h-12 lg:w-24 xl:w-40 xl:h-20 2xl:w-80" }) }),
      /* @__PURE__ */ jsx("button", { onClick: slideRight, children: /* @__PURE__ */ jsx(FaAngleRight, { className: " text-white text-5xl absolute md:top-2/4 md:right-12 md:w-12  md:h-12 lg:w-24 lg:right-14 xl:w-40 xl:h-20 2xl:w-80 " }) })
    ] })
  ] });
}
function SliderMedium({ bets }) {
  const [betSlider, setBetSLider] = useState(bets);
  const [current, setCurrent] = useState(0);
  const slideRight = () => {
    current >= betSlider.length - 2 ? setCurrent(0) : setCurrent(current + 2);
  };
  const slideLeft = () => {
    current <= 0 ? setCurrent(betSlider.length - 2) : setCurrent(current - 2);
  };
  useEffect(() => {
    let slideId = setInterval(() => {
      slideRight();
    }, 5e3);
    return () => clearInterval(slideId);
  }, [current]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "w-full mt-10   flex items-center justify-center  gap-1", onTouchMove: slideLeft, children: betSlider.map((bet, index) => {
      const { title, slug } = bet;
      if (index === current || index === current + 1) {
        return /* @__PURE__ */ jsxs(
          "div",
          {
            className: "  w-1/2",
            children: [
              /* @__PURE__ */ jsx("img", { className: "w-full   relative", src: "/images/ball.jpg", alt: title }),
              /* @__PURE__ */ jsxs("div", { className: "  p-3  relative", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex", children: [
                  /* @__PURE__ */ jsx("span", { className: "absolute left-0 bottom-full -mb-4   p-2 text-center font-bold bg-white", children: "Ποδοσφαιρο" }),
                  /* @__PURE__ */ jsx("time", { className: "text-sm text-white ml-auto -mt-3 ", children: "14-6-2023 11:11" })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-col h-20 justify-start   ", children: /* @__PURE__ */ jsxs(Link, { href: route("article.index", { article: slug }), children: [
                  " ",
                  /* @__PURE__ */ jsx("h2", { className: " text-lg font-bold text-left text-white   hover:text-blue-900", children: title })
                ] }) })
              ] })
            ]
          }
        );
      }
    }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-center items-center w-full mb-20", children: [
      /* @__PURE__ */ jsx("button", { onClick: slideLeft, children: /* @__PURE__ */ jsx(FaAngleLeft, { className: "text-white text-5xl w-20 h-18" }) }),
      /* @__PURE__ */ jsx("button", { onClick: slideRight, children: /* @__PURE__ */ jsx(FaAngleRight, { className: " text-white text-5xl w-20 h-18 " }) })
    ] })
  ] });
}
function SliderItem({ bets }) {
  const [sliderBetsMedium, setSliderBetsMedium] = useState(bets.slice(0, bets.length - 1));
  const [isDesktop, setDesktop] = useState(window.innerWidth >= 1024);
  const [isLaptop, setLaptop] = useState(window.innerWidth >= 508 && window.innerWidth < 1023);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 508);
  const updateMediaDesktop = () => {
    setDesktop(window.innerWidth >= 1024);
  };
  const updateMediaLaptop = () => {
    setLaptop(window.innerWidth >= 508 && window.innerWidth < 1023);
  };
  const updateMobile = () => {
    setIsMobile(window.innerWidth < 508);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMediaDesktop);
    return () => window.removeEventListener("resize", updateMediaDesktop);
  }, [isDesktop]);
  useEffect(() => {
    window.addEventListener("resize", updateMediaLaptop);
    return () => window.removeEventListener("resize", updateMediaLaptop);
  }, [isLaptop]);
  useEffect(() => {
    window.addEventListener("resize", updateMobile);
    return () => window.removeEventListener("resize", updateMobile);
  }, [isMobile]);
  if (isMobile) {
    return /* @__PURE__ */ jsx(SliderSmall, { bets });
  }
  if (isLaptop) {
    return /* @__PURE__ */ jsx(SliderMedium, { bets: sliderBetsMedium });
  }
  if (isDesktop) {
    return /* @__PURE__ */ jsx(SliderBig, { bets });
  }
}
function Title({ name }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center space-x-1", children: [
    /* @__PURE__ */ jsx("div", { className: "border-b-2 border-gray-300 w-5/12 " }),
    /* @__PURE__ */ jsx("h1", { className: " text-blue-900 font-bold text-4xl italic  ", children: name }),
    /* @__PURE__ */ jsx("div", { className: "border-b-2 border-gray-300  w-5/12 " })
  ] });
}
function SLider({ bets }) {
  return /* @__PURE__ */ jsxs("section", { className: "mt-32  ", children: [
    /* @__PURE__ */ jsx("div", { className: "max-w-screen-xl lg:max-w-screen-2xl mx-auto", children: /* @__PURE__ */ jsx(Title, { name: "ΣΤΟΙΧΗΜΑ" }) }),
    /* @__PURE__ */ jsx("div", { className: "w-full  overflow-hidden    relative bg-cover bg-repeat bg-center  mt-16", style: { backgroundImage: `url('/images/stadium.webp')`, height: "500px" }, children: /* @__PURE__ */ jsx("div", { className: "max-w-screen-xl lg:max-w-screen-2xl flex md:mt-12 mx-auto  ", children: /* @__PURE__ */ jsx("div", { className: " flex  mt-20 2xl:mt-10 ", children: /* @__PURE__ */ jsx("article", { className: "   p-4  h-fit  ", children: /* @__PURE__ */ jsx(SliderItem, { bets }) }) }) }) })
  ] });
}
function Life({ life }) {
  return /* @__PURE__ */ jsxs("section", { className: "mt-32 max-w-screen-xl lg:max-w-screen-2xl mx-auto", children: [
    /* @__PURE__ */ jsx("div", { className: " ", children: /* @__PURE__ */ jsx(Title, { name: "LIFE" }) }),
    life.map((item) => {
      const { id, date, description, title, slug } = item;
      return /* @__PURE__ */ jsxs("article", { className: "flex flex-col sm:flex-row justify-between mt-10 sm:gap-3 sm:m-10 max-w-6xl relative", children: [
        /* @__PURE__ */ jsx("div", { className: "basis-50 sm:basis-64 ", children: /* @__PURE__ */ jsx("img", { src: "/images/ball.jpg", className: "w-full ", alt: title }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 mt-2 ", children: [
          /* @__PURE__ */ jsx("span", { className: "mr-2  absolute sm:static top:2/4 -mt-8 cursor-pointer text-md p-2 text-center  bg-blue-800 text-white", children: "Ποδοσφαιρο" }),
          /* @__PURE__ */ jsx("time", { className: "text-sm  ml-32 -mt-3 ", children: date }),
          /* @__PURE__ */ jsxs(Link, { href: route("article.index", { article: slug }), children: [
            " ",
            /* @__PURE__ */ jsx("h2", { className: "text-blue-900 text-2xl font-bold text-left   my-3", children: title })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "sm:mt-14", children: description.substring(0, 100) }),
          /* @__PURE__ */ jsxs("p", { className: "  text-blue-600", children: [
            "Tου ",
            /* @__PURE__ */ jsx("span", { className: "italic ", children: "Χαραλαμπου Σεντη" })
          ] })
        ] })
      ] }, id);
    })
  ] });
}
function Articles({ articles, twoArticles, skipTwoArticles, skipFourArticles, skipFourteenArticles, skipEighteenArticles }) {
  const [newItems, setNewItems] = useState(twoArticles);
  const [newItemsThree, setNewItemsThree] = useState(skipTwoArticles);
  const [restItems, setRestItems] = useState(skipFourArticles);
  const [newRestItems2, setNewItems2] = useState(skipFourteenArticles);
  const [newRestItemsFour, setNewItemsFour] = useState(skipEighteenArticles);
  const [bets, setBets] = useState(articles.slice(-9));
  const [life, setLife] = useState(articles.slice(0, 10));
  console.log(articles);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsx("div", { className: "lg:flex lg:gap-7 ", children: newItems.map((article, index) => {
      const { id, text, title, description, slug, category, author, date } = article;
      return /* @__PURE__ */ jsx(Article, { text, title, slug, author, date, category, description, index }, id);
    }) }) }),
    /* @__PURE__ */ jsxs("div", { className: " max-w-screen-xl mx-auto flex flex-col flex-nowrap lg:justify-start lg:flex-row  lg:justify-between mt-12 ", children: [
      /* @__PURE__ */ jsx("div", { className: "  flex flex-col sm:flex-row sm:flex-wrap sm:justify-around lg:w-8/12  flex-1 lg:mr-5", children: newItemsThree.map((article, index) => {
        const { id, text, title, description, slug, category, author, date } = article;
        return /* @__PURE__ */ jsx(Card$2, { text, title, author, date, category, slug, description }, id);
      }) }),
      /* @__PURE__ */ jsx(Widget, {})
    ] }),
    /* @__PURE__ */ jsx(Bloggers, {}),
    /* @__PURE__ */ jsx(MiddleSection, { restItems }),
    /* @__PURE__ */ jsx(MiddleSectionTwo, { newRestItemsTwo: newRestItems2 }),
    /* @__PURE__ */ jsx(MiddleSectionThree, { newRestItemsFour, bets }),
    /* @__PURE__ */ jsx(SLider, { bets }),
    /* @__PURE__ */ jsx(Life, { life })
  ] });
}
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Articles
}, Symbol.toStringTag, { value: "Module" }));
function Pagination({ data }) {
  return /* @__PURE__ */ jsx("div", { className: "flex text-blue-900 mt-16  w-48 justify-around mx-auto", children: data.links.map((link) => {
    return /* @__PURE__ */ jsxs(Link, { href: link.url, children: [
      link.label.replace("&raquo;", "").replace("&laquo;", ""),
      " "
    ] });
  }) });
}
function Index$2(props) {
  const [show, setShow] = useState(false);
  console.log(props);
  const { articles, twoArticles } = props;
  return /* @__PURE__ */ jsxs("section", { className: "max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-5xl mb-12", children: props.twoArticles[0].author.title }),
    /* @__PURE__ */ jsx("div", { className: "grid  sm:grid-cols-8 gap-3 relative", children: twoArticles.map((article) => {
      const { category, slug, title, description, author } = article;
      return /* @__PURE__ */ jsx("article", { className: "col-span-8 lg:col-span-4", children: /* @__PURE__ */ jsxs("div", { style: { backgroundImage: `url('/images/ball.jpg')` }, className: "h-80 lg:max-w-7xl   bg-cover bg-repeat bg-center  lg:h-96 flex  flex-col items-start justify-end  gap-2 ", children: [
        /* @__PURE__ */ jsx(Socials, { show }),
        /* @__PURE__ */ jsx(Link, { href: route("categories.index", [category["slug"]]), as: "button", className: "px-3 py-1 bg-white ml-3 font-bold", children: category.title }),
        /* @__PURE__ */ jsxs(Link, { href: route("article.index", { article: slug }), children: [
          " ",
          /* @__PURE__ */ jsx("h2", { className: "px-3 text-4xl md:text-5xl text-white font-bold   text-left", children: title })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "px-4 text-white text-lg md:text-2xl ", children: description }),
        /* @__PURE__ */ jsx("p", { className: "ml-3 mb-2 text-white text-sm", children: /* @__PURE__ */ jsx(Link, { href: route("authors.index", [author["slug"]]), className: "italic ", children: author.title_by }) })
      ] }) }, article.id);
    }) }),
    /* @__PURE__ */ jsx("div", { className: " grid sm:grid-cols-2 lg:grid-cols-3 gap-y-2 mx-auto gap-3 mt-12", children: articles.data.map((article) => {
      const { category, slug, title, text, author, date } = article;
      return /* @__PURE__ */ jsx("article", { children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("img", { className: " border-4 border-sky-600 relative", src: "/images/ball.jpg", alt: title }),
        /* @__PURE__ */ jsx(Socials, { show }),
        /* @__PURE__ */ jsxs("div", { className: "p-3  relative", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex", children: [
            /* @__PURE__ */ jsxs("span", { className: "absolute left-0 bottom-full -mb-4   p-2 text-center font-bold bg-white", children: [
              " ",
              /* @__PURE__ */ jsx(Link, { href: route("categories.index", [category["slug"]]), children: category.title })
            ] }),
            /* @__PURE__ */ jsx("time", { className: "text-sm  ml-auto -mt-3 ", children: date })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-px h-52 justify-center lg:gap-3", children: [
            /* @__PURE__ */ jsxs(Link, { href: route("article.index", { article: slug }), children: [
              " ",
              /* @__PURE__ */ jsx("h2", { className: " text-2xl font-bold text-left mt-5  ", children: title })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700 text-md  ", children: text.substring(0, 150) }),
            /* @__PURE__ */ jsx("p", { className: "  text-blue ", children: /* @__PURE__ */ jsx(Link, { href: route("authors.index", [author["slug"]]), className: "italic ", children: author.title_by }) })
          ] })
        ] })
      ] }) }, article.id);
    }) }),
    /* @__PURE__ */ jsx(Pagination, { data: articles })
  ] });
}
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$2
}, Symbol.toStringTag, { value: "Module" }));
function Index$1(props) {
  const [show, setShow] = useState(false);
  const { articles, twoArticles } = props;
  console.log(articles);
  return /* @__PURE__ */ jsxs("section", { className: "max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-5xl mb-12", children: props.twoArticles[0].category.title }),
    /* @__PURE__ */ jsx("div", { className: "grid  sm:grid-cols-8 gap-3 relative", children: twoArticles.map((article) => {
      const { category, slug, title, description, author } = article;
      return /* @__PURE__ */ jsx("article", { className: "col-span-8 lg:col-span-4", children: /* @__PURE__ */ jsxs("div", { style: { backgroundImage: `url('/images/ball.jpg')` }, className: "h-80 lg:max-w-7xl   bg-cover bg-repeat bg-center  lg:h-96 flex  flex-col items-start justify-end  gap-2 ", children: [
        /* @__PURE__ */ jsx(Socials, { show }),
        /* @__PURE__ */ jsx(Link, { href: route("categories.index", [category["slug"]]), as: "button", className: "px-3 py-1 bg-white ml-3 font-bold", children: category.title }),
        /* @__PURE__ */ jsxs(Link, { href: route("article.index", { article: slug }), children: [
          " ",
          /* @__PURE__ */ jsx("h2", { className: "px-3 text-2xl md:text-3xl text-white font-bold   text-left", children: title })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "px-4 text-white text-lg md:text-xl ", children: description }),
        /* @__PURE__ */ jsx("p", { className: "ml-3 mb-2 text-white text-sm", children: /* @__PURE__ */ jsx(Link, { href: route("authors.index", [author["slug"]]), className: "italic ", children: author.title_by }) })
      ] }) }, article.id);
    }) }),
    /* @__PURE__ */ jsx("div", { className: " grid sm:grid-cols-2 lg:grid-cols-3 gap-y-2 mx-auto gap-3 mt-12", children: articles.data.map((article) => {
      const { category, slug, title, text, author, date } = article;
      return /* @__PURE__ */ jsx("article", { children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("img", { className: " border-4 border-sky-600 relative", src: "/images/ball.jpg", alt: title }),
        /* @__PURE__ */ jsx(Socials, { show }),
        /* @__PURE__ */ jsxs("div", { className: "  p-3  relative", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex", children: [
            /* @__PURE__ */ jsxs("span", { className: "absolute left-0 bottom-full -mb-4   p-2 text-center font-bold bg-white", children: [
              " ",
              /* @__PURE__ */ jsx(Link, { href: route("categories.index", [category["slug"]]), children: category.title })
            ] }),
            /* @__PURE__ */ jsx("time", { className: "text-sm  ml-auto -mt-3 ", children: date })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-px h-52 justify-center lg:gap-3", children: [
            /* @__PURE__ */ jsxs(Link, { href: route("article.index", { article: slug }), children: [
              " ",
              /* @__PURE__ */ jsx("h2", { className: " text-2xl font-bold text-left mt-5  ", children: title })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700 text-md  ", children: text.substring(0, 150) }),
            /* @__PURE__ */ jsx("p", { className: "  text-blue ", children: /* @__PURE__ */ jsx(Link, { href: route("authors.index", [author["slug"]]), className: "italic ", children: author.title_by }) })
          ] })
        ] })
      ] }) }, article.id);
    }) }),
    /* @__PURE__ */ jsx(Pagination, { data: articles })
  ] });
}
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$1
}, Symbol.toStringTag, { value: "Module" }));
const menuLinks = [
  { id: 1, href: "#", styleLink: "text-white ml-2 text-2xl lg:text-xs lg:text-blue-700 lg:hover:text-blue-900  xl:text-base", label: "VIDEOS" },
  { id: 2, href: "#", styleLink: "text-white ml-2 text-2xl lg:text-xs lg:text-blue-700 lg:hover:text-blue-900  xl:text-base", label: "SUPERLEAGUE" },
  { id: 3, href: "#", styleLink: "text-white ml-2 text-2xl lg:text-xs lg:text-blue-700 lg:hover:text-blue-900  xl:text-base", label: "PREMIER LEAGUE" },
  { id: 4, href: "#", styleLink: "text-white ml-2 text-2xl lg:text-xs lg:text-blue-700 lg:hover:text-blue-900  xl:text-base", label: "EUROLEAGUE" },
  { id: 5, href: "podosfairo", styleLink: "text-2xl ml-2 text-white  lg:text-xs lg:text-blue-700 lg:hover:text-blue-900  xl:text-base", label: "ΠΟΔΟΣΦΑΙΡΟ" },
  { id: 6, href: "mpasket", styleLink: "text-2xl ml-2 text-white  lg:text-xs lg:text-blue-700 lg:hover:text-blue-900  xl:text-base", label: "ΜΠΑΣΚΕΤ" },
  { id: 7, href: "#", styleLink: "text-white ml-2 text-2xl lg:text-xs lg:text-blue-700 lg:hover:text-blue-900  xl:text-base", label: "ΣΤΟΙΧΗΜΑ" },
  { id: 8, href: "#", styleLink: "text-white ml-2 text-2xl lg:text-xs lg:text-blue-700 lg:hover:text-blue-900  xl:text-base", label: "MATCHDAY PREVIEW" },
  { id: 9, href: "#", styleLink: "text-white  ml-2 text-2xl lg:text-xs lg:text-blue-700 lg:hover:text-blue-900  xl:text-base", label: "HOT DOG" },
  { id: 10, href: "#", styleLink: "text-white ml-2 text-2xl lg:text-xs lg:text-blue-700 lg:hover:text-blue-900  xl:text-base", label: "ΡΟΗ" },
  { id: 11, href: "#", styleLink: "text-white  ml-2 text-2xl lg:text-xs lg:text-blue-700 lg:hover:text-blue-900  xl:text-base", label: "ΠΡΩΤΟΣΕΛΙΔΑ" }
];
function Navbar() {
  const { errors, data, setData, get } = useForm({
    search: ""
  });
  const [showMenu, setShowMenu] = useState(false);
  const [hideMenu, setHideMenu] = useState(true);
  const handleSearch = (e) => {
    e.preventDefault();
    get("/search");
  };
  const handlemenuOpen = () => {
    if (!showMenu) {
      setShowMenu(true);
      setHideMenu(false);
      document.getElementById("navBar").classList.remove("hidden");
    } else {
      setShowMenu(false);
      setHideMenu(true);
      document.getElementById("navBar").classList.add("hidden");
    }
  };
  return /* @__PURE__ */ jsxs("nav", { className: "w-full  flex flex-wrap lg:relative lg:flex-nowrap lg:h-16  lg:justify-between   md:items-center border-2 border-gray-200 mb-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between  items-center w-full lg:w-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "sm:w-48 ", children: /* @__PURE__ */ jsx(Link, { href: route("articles.index"), children: /* @__PURE__ */ jsx("img", { src: "images/logo.png", alt: "SportDog Logo", className: "inline-block  " }) }) }),
      /* @__PURE__ */ jsx("div", { className: "   lg:w-0 lg:hidden lg:m-0 mr-1 mt-2 ", children: /* @__PURE__ */ jsx("button", { onClick: handlemenuOpen, children: !showMenu ? /* @__PURE__ */ jsx(FaBars, { className: "w-8 h-8 text-sky-800" }) : /* @__PURE__ */ jsx(FaWindowClose, { className: "w-8 h-8 text-sky-800" }) }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex    lg:justify-end lg:items-center gap-10", children: [
      /* @__PURE__ */ jsx("div", { className: " flex ", children: /* @__PURE__ */ jsx("ul", { className: "lg:mr-12  hidden w-screen lg:w-full h-screen flex flex-col gap-5 lg:gap-0 lg:h-auto lg:justify-center  bg-blue-900 lg:flex  lg:flex-row lg:bg-white  ", id: "navBar", children: menuLinks.map((link) => {
        const { id, href, styleLink, label } = link;
        return /* @__PURE__ */ jsx(Link, { href: `/category/${href}`, className: styleLink, children: label }, id);
      }) }) }),
      /* @__PURE__ */ jsx("div", { className: "hidden lg:flex   lg:absolute lg:top-full lg:left-1/3  2xl:static ", id: "form-container", children: /* @__PURE__ */ jsx("form", { onSubmit: handleSearch, action: "search", className: "lg:relative  lg:mx-auto lg:mt-2 2xl:my-0   border-2 rounded border-sky-700 ", children: /* @__PURE__ */ jsxs("div", { className: " xl:flex  border-sky-700 ", children: [
        /* @__PURE__ */ jsx("input", { placeholder: "search", name: "search", type: "text", id: "search", className: "lg:w-96 2xl:w-48", onChange: (e) => setData("search", e.target.value) }),
        /* @__PURE__ */ jsx("button", { children: /* @__PURE__ */ jsx(FaSearch, { className: " font-thin text-sky-700 lg:absolute  lg:right-0.5 lg:top-0.5" }) })
      ] }) }) })
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxs("section", { className: "w-full mt-32 sm:h-56 bg-gray-100 flex flex-col justify-center items-center sm:gap-2", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Link, { href: route("articles.index"), children: /* @__PURE__ */ jsx("img", { src: "images/logo.png", alt: "SportDog Logo", className: "inline-block  lg:w-40" }) }) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("ul", { className: "flex justify-between gap-5 mt-6", children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { children: /* @__PURE__ */ jsx(FaFacebook, { className: "rounded  bg-transparent text-slate-700 w-10 h-10 hover:text-blue-500 transition easy-in-out delay-150" }) }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { children: /* @__PURE__ */ jsx(FaTwitter, { className: "rounded  bg-transparent text-slate-700 w-10 h-10 hover:text-blue-500 transition easy-in-out delay-150" }) }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { children: /* @__PURE__ */ jsx(FaInstagram, { className: "rounded  bg-transparent text-slate-700 w-10 h-10 hover:text-pink-500 transition easy-in-out delay-150" }) }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { children: /* @__PURE__ */ jsx(FaYoutube, { className: "rounded  bg-transparent text-slate-700 w-10 h-10 hover:text-red-600 transition easy-in-out delay-150" }) }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("ul", { className: "flex flex-col sm:flex-row justify-between items-center  gap-1 sm:gap-5 mt-6", children: [
      /* @__PURE__ */ jsx("li", { className: "text-xs hover:text-black", children: /* @__PURE__ */ jsx(Link, { children: "ΤΑΥΤΟΤΗΤΑ" }) }),
      /* @__PURE__ */ jsx("li", { className: "text-xs hover:text-black", children: /* @__PURE__ */ jsx(Link, { children: "ΟΡΟΙ ΧΡΗΣΗΣ" }) }),
      /* @__PURE__ */ jsx("li", { className: "text-xs hover:text-black", children: /* @__PURE__ */ jsx(Link, { children: "ΠΟΛΙΤΙΚΗ ΑΠΟΡΡΗΤΟΥ" }) }),
      /* @__PURE__ */ jsx("li", { className: "text-xs hover:text-black", children: /* @__PURE__ */ jsx(Link, { children: "ΠΟΛΙΤΙΚΗ ΠΡΟΣΩΠΙΚΩΝ ΔΕΔΟΜΕΝΩΝ" }) })
    ] }) })
  ] });
}
function Layout$1({ children }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx(Navbar, {}) }),
    /* @__PURE__ */ jsx("main", { className: "p-4   ", children }),
    /* @__PURE__ */ jsx("footer", { children: /* @__PURE__ */ jsx(Footer, {}) })
  ] });
}
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Layout$1
}, Symbol.toStringTag, { value: "Module" }));
function Index(props) {
  var _a;
  const { searchResult, q } = props;
  return /* @__PURE__ */ jsxs("section", { className: "max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-5xl capitalize mb-12", children: q }),
    /* @__PURE__ */ jsx("div", { className: "w-full grid grid-cols-12 gap-3", children: (_a = searchResult == null ? void 0 : searchResult.data) == null ? void 0 : _a.map((item, index) => {
      const { author, category, date, description, title } = item;
      return /* @__PURE__ */ jsxs("div", { className: index < 2 ? "col-span-6 bg-red-900 " : "col-span-4 bg-green-900 ", children: [
        title,
        date,
        category.title,
        description,
        author.title
      ] });
    }) })
  ] });
}
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Article/Index.jsx": __vite_glob_0_0, "./Pages/Articles/Index.jsx": __vite_glob_0_1, "./Pages/Authors/Index.jsx": __vite_glob_0_2, "./Pages/Categories/Index.jsx": __vite_glob_0_3, "./Pages/Layout.jsx": __vite_glob_0_4, "./Pages/Search/Index.jsx": __vite_glob_0_5 });
      let page2 = pages[`./Pages/${name}.jsx`];
      page2.default.layout = page2.default.layout || ((page3) => /* @__PURE__ */ jsx(Layout, { children: page3 }));
      return page2;
    },
    setup: ({ App, props }) => /* @__PURE__ */ jsx(App, { ...props })
  })
);
