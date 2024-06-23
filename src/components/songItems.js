import React from "react";
import PropTypes from "prop-types";

export default function SongItems({ name, image, desc, id }) {
  return (
    <div className="p-2 min-w-[180px] px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
      {image && (
        <img src={image} alt={`Cover art for ${name}`} className="rounded" />
      )}
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
}

SongItems.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string, // image is optional
  desc: PropTypes.string, // desc is optional
  id: PropTypes.number.isRequired,
};
