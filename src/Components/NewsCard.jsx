import React from "react";
import { FaRegBookmark, FaRegEye, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {

  const { title, author, thumbnail_url, details, rating, total_view, tags, id } = news;

  return (
    <div className="card bg-base-100 shadow-md rounded-xl overflow-hidden mb-6">
      {/* Author section */}
      <div className="flex justify-between items-center px-4 pt-4 bg-base-300">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-sm">{author.name}</h3>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toISOString().split("T")[0]}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-500">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold px-4 pt-3">
        {title}
      </h2>

      {/* Image */}
      <figure className="px-4 pt-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-xl w-full object-cover"
        />
      </figure>

      {/* Details */}
      <div className="p-4">
        <p className="text-sm text-gray-600">
          <span className="font-medium text-gray-800">
            {new Date(author.published_date).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>{" "}
          | Tag Cloud Tags: {tags.join(", ")} –{" "}
          {details.slice(0, 200)}...
        </p>
        <Link to={`/news-details/${id}`} className="text-orange-600 font-semibold mt-2 hover:underline">
          Read More
        </Link>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center border-t px-4 py-3">
        <div className="flex items-center gap-1 text-orange-500">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < rating.number ? "text-orange-500" : "text-gray-300"}
            />
          ))}
          <span className="ml-1 text-sm font-semibold text-gray-700">
            {rating.number}
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <FaRegEye />
          <span className="text-sm">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
