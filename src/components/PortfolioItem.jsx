import React, { useState } from "react";

const PortfolioItem = ({ project }) => {
  const { title, stack, link, imageUrl, details } = project;

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden h-min"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <img
        src={imageUrl}
        alt="portfolio"
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
          {stack.map((item) => (
            <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
              {item}
            </span>
          ))}
        </p>
      </div>
      {isExpanded && details && (
        <ol className="list-disc mx-5">
          {details.map((detail) => (
            <li className="mt-2 mb-4 ml-5 text-base font-normal text-stone-500 dark:text-stone-400">
              {detail}
            </li>
          ))}
        </ol>
      )}
    </a>
  );
};

export default PortfolioItem;
