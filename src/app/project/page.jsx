"use client";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Header from "@/components/Header";
import ImageSlider from "@/components/ImageSlider";
import { project, service } from "@/model/data";
import { ArrowUpRight } from "@phosphor-icons/react";
import { ArrowRight, DotsNine, List } from "@phosphor-icons/react/dist/ssr";
import React, { useState } from "react";

const Page = () => {
  const [activeCard, setActiveCard] = useState(1);

  return (
    <div className="flex flex-col gap-4">
      <div className="mt-4">
        <Header title={project.data[activeCard - 1].name}>
          <div className="flex gap-4">
            <div className="aspect-square text-white flex w-12 items-center justify-center bg-dark border-2 border-slate-900 hover:border-white ">
              <DotsNine size={22} weight="bold" />
            </div>
            <div className="btn  hover:text-white hover:border-4 border-4 border-white hover:border-white hover:bg-dark  bg-white text-black  font-semibold ">
              Next Project
              <ArrowRight size={20} />
            </div>
          </div>
        </Header>
      </div>
      <div className="flex flex-col pt-6">
        <div className="flex-1">
          <div className="flex justify-between gap-12">
            <div className="w-5/12 flex justify-center py-4 bg-white">
              {
                project.data.map((cb,i)=>(
                  <video
                  key={i}
                autoPlay
                muted
                loop
                className={` ${i+1 !== activeCard && "hidden"} object-scale-down max-h-80`}
              >
                <source
                  type="video/mp4"
                  src={cb.video}
                />
              </video>
                ))
              }
            </div>
            <div className="w-7/12 ">
              <p>{project.data[activeCard - 1].description}</p>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-3 gap-4">
        <div className=" grid gap-3 grid-cols-5 flex-1 relative">
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
      <p className="text-center text-xs mt-4">
        Click the section image above this text if you want see the details of
        another image!
      </p>
    </div>
  );
};

export default Page;
