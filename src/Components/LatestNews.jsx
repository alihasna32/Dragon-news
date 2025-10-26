import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-3 mt-9 bg-base-200 p-3">
      <h1 className="text-base-100 bg-secondary px-3 py-2">Latest</h1>
      <Marquee pauseOnHover={true} speed={60}>
        <p className="font-semibold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          dolorem. Maiores ullam rerum debitis distinctio architecto doloremque
          quam magni cumque. Veniam quo odio harum ipsum doloremque libero
          reprehenderit, totam nesciunt?
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
