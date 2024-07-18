"use client";
import Card from "@/components/Card";
import Header from "@/components/Header";
import { ArrowUpRight, Book, X } from "@phosphor-icons/react/dist/ssr";
import React, { useEffect, useRef, useState } from "react";
import Button from "@/components/Button";
import { experience, hobbies, myskill } from "@/model/data";
import MarqueCard from "@/components/MarqueCard";
import Image from "next/image";

const Page = () => {
  const [activeCard, setActiveCard] = useState(1);
  const [showExperience, setShowExperience] = useState(false)
  const bapakCard = useRef(null);
  const barisanCard = useRef(null);

  const addAnimation = () => {
    if (bapakCard.current) {
      const scrollers = [bapakCard.current];

      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);

          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  };

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    const scrollerInner = barisanCard.current;
    const handleMouseEnter = () => {
      scrollerInner.classList.add("paused");
    };
    const handleMouseLeave = () => {
      scrollerInner.classList.remove("paused");
    };

    scrollerInner.addEventListener("mouseenter", handleMouseEnter);
    scrollerInner.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      scrollerInner.removeEventListener("mouseenter", handleMouseEnter);
      scrollerInner.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="flex flex-col gap-6 max-lg:px-8 lg:gap-12">
      <div className="flex flex-col gap-10 mt-5 lg:gap-36 lg:my-4 lg:py-6 max-lg:border-slate-700 max-lg:border-b-2 pb-4">
        <div className="flex justify-between font-medium w-full max-lg:hidden">
          <p>PROFESSIONAL WEB DEVELOPER</p>
          <p>1+ YEARS EXPERIENCE</p>
        </div>
        <div className="flex-1">
          <div className="flex justify-between max-lg:flex-col">
            <div className="lg:text-7xl text-4xl relative flex-1 font-bold">
              <div className="absolute flex items-center justify-center lg:w-full lg:h-full">
                <div className="relative flex items-end lg:items-center justify-center">
                  <div className="bg-white bg-opacity-10 h-full max-lg:h-3/4 aspect-square absolute"></div>
                  <Image
                    width={10000}
                    height={10000}
                    className=" max-h-[30vh] grayscale aspect-square object-scale-down  "
                    src={"/assets/lastras.png"}
                  />
                </div>
              </div>
              <p className="z-[2] whitespace-pre">
                {`ABOUT
ME`}
              </p>
              <div className="w-full h-[22vh] lg:hidden"></div>
            </div>
            <div className="w-full lg:w-7/12">
              <p>
                Hi Everyone, big thanks for you have come to see my first
                website personal portofolio. Ya in this Website i will explains
                my experience, my skill, my hobby, and my project.
                <br />
                <br />
                My name is Farras Akhirio Ramadhan, I am from Bekasi, West Java,
                Indonesia. Right now i am live on Jombang, East Java, Indonesia.
                I'm 18th, I'm a professional Web Developer.
                <br />
                <br />
                Since i was little, i learn to be a placeholder. I sell some
                bread, Milo Gosok, and since i was 16th i learn to business
                helm, sparepart helm, airfreshner, perfume body, deodorant. From
                there i know to communication to others, because i learn by
                experience and some books.
              </p>
              <br />
            </div>
          </div>
          <p className="lg:mt-5">
            Right now i am a gapyear student, but i still learning because for
            me lesson is priority and it is important, Right now i am learning
            about web developer, SNBT for 2025, self-improvement, these all i
            learn from youtube and some books. In the future time, maybe 1
            months ago i will open colabolator for some projects, i wanna know
            and why if i work with a team. Thanks for reading
          </p>
        </div>
      </div>

      <div className="max-lg:border-slate-700 max-lg:border-b-2 max-lg:pb-6">
        <Header title={"MY HOBBIES"}></Header>
        <div className="grid gap-3 lg:grid-cols-3 mt-10">
          {hobbies.data.map((cb, i) => (
            <Card
              key={i}
              header={cb.name}
              content={cb.description}
              setActiveCard={setActiveCard}
              activeCard={activeCard}
              number={i + 1}
            />
          ))}
        </div>
      </div>
      <div className="">
        <Header title={"EXPERIENCE"}>
        <div
            className="max-lg:hidden cursor-pointer"
            onClick={() => setShowExperience(!showExperience)}
          >
            <div className="btn max-lg:btn-md hover:text-white hover:border-4 border-4 border-slate-900 hover:border-white hover:bg-dark  bg-black text-white  font-semibold ">
              See more <ArrowUpRight size={20} />
            </div>
          </div>
          <div onClick={()=>setShowExperience(!showExperience)} className="btn lg:hidden max-lg:btn-sm  hover:text-white hover:border-4 border-4 border-white hover:border-white hover:bg-dark  bg-white text-black  font-semibold ">
              <Book size="20"  />
          </div>
        </Header>
        <div className="scroller cards" ref={bapakCard}>
          <ul className="scroller__inner mt-4 lg:mt-12 animate-view" ref={barisanCard}>
            {experience.data.map((cb, i) => (
              <MarqueCard
                key={i}
                imageUrl={cb.imageUrl}
                altImage={cb.altImage}
                title={cb.title}
                isMain={cb.isMain}
                description={cb.description}
                badge={cb.badge}
              />
            ))}
          </ul>
        </div>
      </div>


      <div
        className={`${
          !showExperience && "hidden"
        } fixed z-[100] top-0 left-0 h-svh w-svw max-w-[100svw]  backdrop-filter backdrop-blur-lg bg-opacity-20 p-10`}
      >
        <div className="bg-zinc-900 max-w-full min-h-full max-h-full p-4 overflow-auto hidden-bar">
          <div className="flex items-center justify-between mb-4">
            <p className="text-4xl font-semibold">MY SKILLSHET</p>
            <div
              onClick={() => setShowExperience(!showExperience)}
              className="btn btn-xs bg-black border-2 border-white text-white"
            >
              <X
                weight="bold"
                size={15}
                className="cursor-pointer font-semibold"
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-4 gap-4 overflow-auto">
            {experience.data.map((cb, i) => (
              <MarqueCard
                key={i}
                imageUrl={cb.imageUrl}
                altImage={cb.altImage}
                title={cb.title}
                isMain={cb.isMain}
                description={cb.description}
                badge={cb.badge}
                dontShow={true}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
