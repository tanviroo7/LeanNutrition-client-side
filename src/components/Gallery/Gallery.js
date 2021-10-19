import React from "react";

const Gallery = () => {
  return (
    <div>
      <h1 className="text-4xl text-gray-500 font-extrabold mt-12">Gallery</h1>
      <div className="container mx-auto">
        <div className="grid-cols-3 p-20 space-y-2  lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
          <div className="w-full rounded">
            <img
              src="https://images.pexels.com/photos/373941/pexels-photo-373941.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </div>
          <div className="w-full col-span-2 row-span-2 rounded">
            <img
              src="https://images.pexels.com/photos/8436762/pexels-photo-8436762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </div>
          <div className="w-full rounded">
            <img
              src="https://images.pexels.com/photos/3984340/pexels-photo-3984340.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </div>
          <div className="w-full rounded">
            <img
              src="https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </div>
          <div className="w-full rounded">
            <img
              src="https://images.pexels.com/photos/863926/pexels-photo-863926.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </div>
          <div className="w-full rounded">
            <img
              src="https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
