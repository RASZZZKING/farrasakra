"use client";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Header from "@/components/Header";
import ImageSlider from "@/components/ImageSlider";
import { project, service } from "@/model/data";
import { ArrowUpRight } from "@phosphor-icons/react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  DotsNine,
  List,
} from "@phosphor-icons/react/dist/ssr";
import React, { useState } from "react";

const Page = () => {
  const [activeCard, setActiveCard] = useState(1);
  const handleLeft = () => {
    const val = activeCard - 1 === 0 ? project.data.length : activeCard - 1;
    setActiveCard(val);
    console.log(val);
  };
  const handleRight = () => {
    const val = activeCard === project.data.length ? 1 : activeCard + 1;
    // console.log("🚀 ~ handleRight ~ val:", val)
    setActiveCard(val);
  };

  console.log(activeCard);

  return (
    <div className="flex flex-col max-lg:px-8">
      <div className="mt-4">
        <Header title={project.data[activeCard - 1].name}>
          <div className="flex ms-2  gap-1 lg:gap-4">
            {/* <div className="aspect-square text-white flex w-12 items-center justify-center bg-dark border-2 border-slate-900 hover:border-white ">
              <DotsNine size={22} weight="bold" />
            </div> */}
            <div
              onClick={handleLeft}
              className="btn max-lg:btn-xs  hover:text-white hover:border-4 border-4 border-white hover:border-white hover:bg-dark  bg-white text-black  font-semibold "
            >
              <ArrowLeft size={10} className="lg:hidden" />
              <ArrowLeft size={20} className="max-lg:hidden" />
            </div>
            <div
              onClick={handleRight}
              className="btn max-lg:btn-xs hover:text-white hover:border-4 border-4 border-white hover:border-white hover:bg-dark  bg-white text-black  font-semibold "
            >
              <ArrowRight size={10} className="lg:hidden" />
              <ArrowRight size={20} className="max-lg:hidden" />
            </div>
          </div>
        </Header>
      </div>
      <div className="flex flex-col pt-6">
        <div className="flex-1">
          <div className="flex justify-between max-lg:flex-col gap-6 lg:gap-12 items-center">
            <div className="lg:w-5/12 w-full flex justify-center py-4 px-3 bg-white ">
              {project.data.map((cb, i) => (
                <video
                  key={i}
                  autoPlay
                  muted
                  loop
                  className={` ${
                    i + 1 !== activeCard && "hidden"
                  } object-scale-down max-h-[21rem] min-h-[21rem]`}
                >
                  <source type="video/mp4" src={cb.video} />
                </video>
              ))}
            </div>
            <div className="lg:w-7/12  lg:min-h-[21rem] lg:max-h-[21rem] lg:flex lg:items-center lg:h-[21rem]">
              <p className=" whitespace-pre-line">
                {project.data[activeCard - 1].copywriting}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-3 gap-4">
        <div className="flex gap-3 whitespace-nowrap overflow-x-auto flex-1 relative hidden-bar">
          {project.data.map((cb, i) => (
            <ImageSlider
              key={i}
              setActiveCard={setActiveCard}
              activeCard={activeCard}
              number={i + 1}
              imageUrl={cb.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
