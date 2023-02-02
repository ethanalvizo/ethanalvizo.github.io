import React, { useState } from "react";

const TimelineItem = ({ experience }) => {
  const { year, title, company, stack, summary, details } = experience;

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <ol
      className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
        <div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
            {year}
          </span>
          <div className="flex flex-row gap-3 items-baseline">
            <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
              {title}
            </h3>
            <div className="my-1 text-sm italic font-normal leading-none text-stone-400 dark:text-stone-500">
              {company}
            </div>
          </div>
        </div>

        {isExpanded && details ? (
          <ol className="list-disc">
            {details.map((detail, idx) => (
              <li
                key={idx}
                className="mt-2 mb-4 ml-5 text-base font-normal text-stone-500 dark:text-stone-400"
              >
                {detail}
              </li>
            ))}
          </ol>
        ) : (
          <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">
            {summary}
          </p>
        )}
        {stack && (
          <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
            <span className="font-semibold">Technologies:</span>
            {stack.map((tech, idx) => (
              <span
                key={idx}
                className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md"
              >
                {tech}
              </span>
            ))}
          </p>
        )}
      </li>
    </ol>
  );
};

export default TimelineItem;
