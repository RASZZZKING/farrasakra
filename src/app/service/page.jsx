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
    <div className="flex flex-col">
      <div className="mt-4">
        <Header title={service.data[activeCard - 1].name}>
          <Link
            target="_blank"
            href={"https://wa.me/+628382501287"}
            className="btn  hover:text-white hover:border-4 border-4 border-white hover:border-white hover:bg-dark  bg-white text-black  font-semibold "
          >
            Contact Me <ArrowUpRight size={20} />
          </Link>
        </Header>
      </div>
      <div className="flex flex-col mt-4 pt-6">
        <div className="flex-1">
          <div className="flex justify-between gap-12">
            <div className="w-4/12 flex-1 cursor-default">
              <figure>
                <Image width={1000} height={1000} className="w-full" src={service.data[activeCard - 1].image} alt="service photo" />
              </figure>
              {/* <Card
                header={service.data[activeCard - 1].name}
                content={service.data[activeCard - 1].description}
                setActiveCard={setActiveCard}
                activeCard={activeCard}
                number={activeCard}
              /> */}
            </div>
            <div className="w-8/12 ">
              <p className="whitespace-pre-line">
                {service.data[activeCard - 1].copywriting}
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>

      <div className="tabs grid-cols-3 tabs-bordered mt-4 font-semibold">
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
      <div className="flex mt-3 gap-4">
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
