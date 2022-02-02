import React from "react";

export default function NavElement({
  link,
  text,
  active,
  setActiveElement,
  index,
}) {
  return (
    <a
    //  href={link}
      className={`block mt-4 lg:inline-block lg:mt-0 mr-4 cursor-pointer ${active ? "text-purple-300" : "text-gray-200"}`}
      onClick={() => setActiveElement(index) }
    >
      {text}
    </a>
  );
}
