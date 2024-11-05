import React from "react";
import { BsBank } from "react-icons/bs"; // Importing the icon

function Achievement() {
  // Define data directly inside the component
  const data = [
    {
      icon: <BsBank size={25} />,
      title: "Article 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      icon: <BsBank size={25} />,
      title: "Article 2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      icon: <BsBank size={25} />,
      title: "Article 3",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      icon: <BsBank size={25} />,
      title: "Article 4",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      icon: <BsBank size={25} />,
      title: "Article 5",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      icon: <BsBank size={25} />,
      title: "Article 6",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  return (
    <div className="my-10">
      <div className="achievements-custom-alignment w-full mx-auto text-center">
        <h6 className="text-xl text-center font-medium text-black-600 my-5 mb-1">
          Our People
        </h6>
        <h1 className="text-3xl font-bold text-center text-slate-800 my-3 mt-2">
          What can we achieve together?
        </h1>
        <p className="my-3 mt-3 py-3">
          We've spent 20+ years tracking financial technology challenges with
          early-stage startups, emerging companies, and established brands to
          launch and scale innovative payment processing and digital banking
          programs.
        </p>
      </div>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="my-1 px-1 w-full md:w-1/2 lg:my-4 achivement-custom-box  lg:px-4 lg:w-1/3"
            >
              <article className="overflow-hidden rounded-lg shadow-lg p-5 transform transition-transform duration-300 hover:scale-105 cursor-pointer hover:shadow-xl hover:bg-gradient-to-tr hover:from-[#2563EB] hover:to-[#93C5FD]">
                <a href="#">
                  <div className="flex justify-start items-start py-4 pb-0 px-4">
                    <div className="p-3 achievement-icon-custom rounded-lg text-white">
                      {item.icon}
                    </div>
                  </div>
                </a>

                <header className="flex items-center justify-between achievement-custom-card leading-tight p-2 md:p-4 md:pb-1 ">
                  <h1 className="text-lg">
                    <a className="text-black" href="#">
                      {item.title}
                    </a>
                  </h1>
                </header>

                <div className="p-2 md:p-4 md:pt-2">
                  {item.description && (
                    <p className="text-sm text-gray-700">{item.description}</p>
                  )}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Achievement;
