import React, { useState } from "react";
import PropTypes from "prop-types";
import { assets, songsData } from "../assets/assets";

export default function Player({ initialSongIndex = 0 }) {
  const [currentSongIndex, setCurrentSongIndex] = useState(initialSongIndex);
  const currentSong = songsData[currentSongIndex];

  if (!currentSong) {
    return (
      <div className="h-[10%] bg-black flex justify-center items-center text-white px-4">
        <p>No song data available.</p>
      </div>
    );
  }

  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img
          className="w-12"
          src={currentSong.image}
          alt={`${currentSong.name} cover`}
        />
        <div>
          <p>{currentSong.name}</p>
          <p>{currentSong.desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col items-center gap-1 m-auto">
          <div className="flex gap-4">
            <img
              className="w-4 cursor-pointer"
              src={assets.shuffle_icon}
              alt=""
            />
            <img className="w-4 cursor-pointer" src={assets.prev_icon} alt="" />
            <img className="w-4 cursor-pointer" src={assets.play_icon} alt="" />
            <img className="w-4 cursor-pointer" src={assets.next_icon} alt="" />
            <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="" />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <p>1:06</p>
          <div className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
            <hr className="h-1 border-none w-0 bg-green-800 rounded-full" />
          </div>
          <p>3:20</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img className="w-4" src={assets.play_icon} alt="" />
        <img className="w-4" src={assets.mic_icon} alt="" />
        <img className="w-4" src={assets.queue_icon} alt="" />
        <img className="w-4" src={assets.speaker_icon} alt="" />
        <img className="w-4" src={assets.volume_icon} alt="" />
        <div className="w-20 bg-slate-50 h-1 rounded"></div>
        <img className="w-4" src={assets.mini_player_icon} alt="" />
        <img className="w-4" src={assets.zoom_icon} alt="" />
      </div>
    </div>
  );
}

Player.propTypes = {
  initialSongIndex: PropTypes.number,
};
