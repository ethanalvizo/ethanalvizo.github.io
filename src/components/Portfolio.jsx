import React from "react";
import portfolio from "./data/portfolio";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {portfolio.map((project, idx) => (
          <PortfolioItem key={idx} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
