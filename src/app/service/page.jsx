"use client";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Header from "@/components/Header";
import { service } from "@/model/data";
import { ArrowUpRight } from "@phosphor-icons/react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  const [activeCard, setActiveCard] = useState(1);
  return (
    <div className="flex flex-col max-lg:px-8">
      <div className="mt-4">
        <Header title={service.data[activeCard - 1].name}>
          <Link
            target="_blank"
            href={"https://wa.me/+628382501287"}
            className=" max-lg:hidden btn  hover:text-white hover:border-4 border-4 border-white hover:border-white hover:bg-dark  bg-white text-black  font-semibold "
          >
            Contact Me <ArrowUpRight size={20} />
          </Link>
          <div className="flex lg:hidden flex-col justify-evenly gap-1">
            <div onClick={()=> setActiveCard(1)} className={`btn btn-xs cursor-pointer ${ activeCard === 1 ? "bg-white text-black" : "border border-slate-900 text-white" }`}>
              1
            </div>
            <div onClick={()=> setActiveCard(2)} className={`btn btn-xs cursor-pointer ${ activeCard === 2 ? "bg-white text-black" : "border border-slate-900 text-white" }`}>
              2
            </div>
            <div onClick={()=> setActiveCard(3)} className={`btn btn-xs cursor-pointer ${ activeCard === 3 ? "bg-white text-black" : "border border-slate-900 text-white" }`}>
              3
            </div>
          </div>
        </Header>
      </div>
      <div className="flex flex-col mt-4 pt-6">
        <div className="flex-1">
          <div className="flex max-lg:flex-col justify-between gap-6">
            <div className="lg:w-4/12 flex justify-center flex-1 cursor-default">
              <figure className="max-lg:w-3/4">
                <Image width={1000} height={1000} className=" w-full" src={service.data[activeCard - 1].image} alt="service photo" />
              </figure>
              {/* <Card
                header={service.data[activeCard - 1].name}
                content={service.data[activeCard - 1].description}
                setActiveCard={setActiveCard}
                activeCard={activeCard}
                number={activeCard}
              /> */}
            </div>
            <div className="lg:w-8/12 ">
              <p className="whitespace-pre-line">
                {service.data[activeCard - 1].copywriting}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="tabs max-lg:hidden grid-cols-3 tabs-bordered mt-4 font-semibold">
        {service.data.map((cb, i) => (
          <div
            onClick={() => setActiveCard(i + 1)}
            key={i}
            role="tab"
            className={`tab ${activeCard === i + 1 && "tab-active"}`}
          >
            {cb.name}
          </div>
        ))}
      </div>
      <div className="flex max-lg:hidden mt-3 gap-4">
        <div className=" grid gap-3 grid-cols-3 flex-1">
          {service.data.map((cb, i) => (
            <Card
              setActiveCard={setActiveCard}
              activeCard={activeCard}
              number={i + 1}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
