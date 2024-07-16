"use client";
import Card from "@/components/Card";
import Header from "@/components/Header";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import React, { useEffect, useRef, useState } from "react";
import Button from "@/components/Button";
import { experience, hobbies, myskill } from "@/model/data";
import MarqueCard from "@/components/MarqueCard";
import Image from "next/image";

const Page = () => {
  const [activeCard, setActiveCard] = useState(1);
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
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-12 mt-4 pt-6">
        <div className="flex justify-between font-medium w-full">
          <p>PROFESSIONAL WEB DEVELOPER</p>
          <p>1+ YEARS EXPERIENCE</p>
        </div>
        <div className="flex-1">
          <div className="flex justify-between">
            <div className="text-7xl font-bold relative flex-1">
              <div className="absolute  flex items-end justify-center w-full h-full">
                <div className="bg-white bg-opacity-10 h-2/3 aspect-square absolute"></div>
                <Image
                  width={10000}
                  height={10000}
                  className=" max-h-[30vh] grayscale aspect-square object-scale-down  "
                  src={"/assets/lastras.png"}
                />
              </div>
              <p className=" z-[2]">
              ABOUT <br />
              ME
              </p>
            </div>
            <div className="w-7/12">
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
          <p>
            Right now i am a gapyear student, but i still learning because for
            me lesson is priority and it is important, Right now i am learning
            about web developer, SNBT for 2025, self-improvement, these all i
            learn from youtube and some books. In the future time, maybe 1
            months ago i will open colabolator for some projects, i wanna know
            and why if i work with a team. Thanks for reading
          </p>
        </div>
      </div>

      <div>
        <Header title={"MY HOBBIES"}></Header>
        <div className="grid gap-3 grid-cols-3 mt-10">
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
        <Header title={"MY EXPERIENCE"}></Header>
        <div className="scroller cards" ref={bapakCard}>
          <ul className="scroller__inner mt-12 animate-view" ref={barisanCard}>
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
    </div>
  );
};

export default Page;
