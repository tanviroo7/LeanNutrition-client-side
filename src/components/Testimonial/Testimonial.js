import React from "react";

const Testimonial = () => {
  return (
    <div>
      <h1 className="text-4xl text-gray-500 font-extrabold mt-12">
        Testimonials
      </h1>
      <div className="md:grid md:grid-cols-3 md:mt-8 mt-16 gap-8 m-8">
        <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
          <div className="flex justify-center md:justify-end -mt-16">
            <img
              className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
              src="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
              alt=""
            />
          </div>
          <div>
            <h2 className="text-gray-800 text-3xl font-semibold">
              Awesome coaching
            </h2>
            <p className="mt-2 text-gray-600">
              I loved being coached by mr. jay shetty who is an amazing and very
              friendly person and indeed inspired me to become better day by day
              also always looked out for me if i'm lacking in anything and
              overall it's an amazing experience with LeanNutrition team
            </p>
          </div>
          <div className="flex justify-end mt-4">
            <p className="text-xl font-medium text-green-500">Morris Renner</p>
          </div>
        </div>
        <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
          <div className="flex justify-center md:justify-end -mt-16">
            <img
              className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
              src="https://thumbs.dreamstime.com/b/suave-bearded-male-portrait-suave-bearded-male-portrait-100259877.jpg"
              alt=""
            />
          </div>
          <div>
            <h2 className="text-gray-800 text-3xl font-semibold">
              Great workout
            </h2>
            <p className="mt-2 text-gray-600">
              I loved being coached by mr. jay shetty who is an amazing and very
              friendly person and indeed inspired me to become better day by day
              also always looked out for me if i'm lacking in anything and
              overall it's an amazing experience with LeanNutrition team
            </p>
          </div>
          <div className="flex justify-end mt-4">
            <p className="text-xl font-medium text-green-500">Dan Dugamatov</p>
          </div>
        </div>
        <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
          <div className="flex justify-center md:justify-end -mt-16">
            <img
              className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
              alt=""
            />
          </div>
          <div>
            <h2 className="text-gray-800 text-3xl font-semibold">
              Amazing client service
            </h2>
            <p className="mt-2 text-gray-600">
              I loved being coached by mr. jay shetty who is an amazing and very
              friendly person and indeed inspired me to become better day by day
              also always looked out for me if i'm lacking in anything and
              overall it's an amazing experience with LeanNutrition team
            </p>
          </div>
          <div className="flex justify-end mt-4">
            <p className="text-xl font-medium text-green-500"> Mr. Smith</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
