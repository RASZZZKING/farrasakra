"use client";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Header from "@/components/Header";
import { ArrowUpRight } from "@phosphor-icons/react";
import { ArrowRight, DotsNine, List } from "@phosphor-icons/react/dist/ssr";
import React, { useState } from "react";

const Page = () => {
  const [activeCard, setActiveCard] = useState(1);

  return (
    <div className="flex flex-col gap-4">
      <div className="mt-4">
        <Header title={"PROJECT NAME"}>
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
            <div className="w-5/12 bg-white">
              <Card
                setActiveCard={setActiveCard}
                activeCard={activeCard}
                number={1}
              />
            </div>
            <div className="w-7/12 ">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus labore molestiae ad similique. Dignissimos fugit
                veniam a eaque voluptatem iste officiis sed enim illo ad neque
                dolor autem corrupti, eum praesentium voluptatibus. Cum fugit
                facere accusantium, quas ex exercitationem numquam.
                <br />
                <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Architecto dicta commodi veniam quis! Nulla nostrum facere
                magni, ab error accusantium temporibus reiciendis? Nulla
                sapiente cum nobis similique vitae omnis reiciendis!
                <br />
                <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Architecto dicta commodi veniam quis! Nulla nostrum facere
                magni, ab error accusantium temporibus reiciendis? Nulla
                sapiente cum nobis similique vitae omnis reiciendis!
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-3 gap-4">
        <div className=" grid gap-3 grid-cols-5 flex-1">
          <Card
            setActiveCard={setActiveCard}
            activeCard={activeCard}
            number={1}
          />
          <Card
            setActiveCard={setActiveCard}
            activeCard={activeCard}
            number={1}
          />
          <Card
            setActiveCard={setActiveCard}
            activeCard={activeCard}
            number={1}
          />
          <Card
            setActiveCard={setActiveCard}
            activeCard={activeCard}
            number={2}
          />
          <Card
            setActiveCard={setActiveCard}
            activeCard={activeCard}
            number={3}
          />
        </div>
        {/* <div className="w-32" >
          <Card
            setActiveCard={setActiveCard}
            activeCard={activeCard}
            number={1}
          />
        </div> */}
      </div>
      <p className="text-center text-xs mt-4">
        Click the section image above this text if you want see the details of
        another image!
      </p>
    </div>
  );
};

export default Page;
