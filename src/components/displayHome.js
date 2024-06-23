import React from "react";
import { albumsData, songsData } from "../assets/assets";
import { map, get } from "lodash"; // Importing map and get from lodash
import NavBar from "./navBar";
import AlbumItems from "./albumItems";
import SongItems from "./songItems";

export default function DisplayHome() {
  return (
    <>
      <NavBar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl ">Today's Hot Hit</h1>
        <div className="flex overflow-auto">
          {map(albumsData, (item) => (
            <AlbumItems
              key={item.id}
              name={get(item, "name", "Default Name")}
              desc={get(item, "desc", "")}
              id={get(item, "id", "")}
              image={get(item, "image", "")}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl ">Recently Played</h1>
        <div className="flex overflow-auto">
          {map(songsData, (item) => (
            <SongItems
              key={item.id}
              name={get(item, "name", "Default Name")}
              desc={get(item, "desc", "")}
              id={get(item, "id", "")}
              image={get(item, "image", "")}
            />
          ))}
        </div>
      </div>
    </>
  );
}
