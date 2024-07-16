"use client";
import {
  ArrowUpRight,
  Envelope,
  InstagramLogo,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import LinkPlatform from "@/components/LinkPlatform";
import Button from "@/components/Button";
import Header from "@/components/Header";
import { useEffect, useRef, useState } from "react";
import Card from "@/components/Card";
import MarqueCard from "@/components/MarqueCard";
import { myskill, project, service } from "@/model/data";
import Image from "next/image";
import ImageSlider from "@/components/ImageSlider";

export default function Home() {
  const [activeCard, setActiveCard] = useState(1);
  const [scroll, setScroll] = useState(1);
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
    <div className="flex flex-col gap-12 ">
      <div className="  min-h-[90svh] max-h-[90svh] border-b-2   border-slate-700 flex justify-between items-center">
        <div className="flex items-end w-1/2 justify-between">
          <div className="flex-col flex gap-4">
            <p className="text-lg font-medium">HELLO, I'M</p>
            <p className="font-bold text-8xl leading-tight">
              FARRAS <br />
              AKHIRIO <br />
              RAMADHAN
            </p>
            <div className="flex gap-6">
              <LinkPlatform
                name={"Instagram"}
                url={"https://www.instagram.com/farrasakra"}
              >
                <InstagramLogo size={20} />
              </LinkPlatform>
              <LinkPlatform name={"Gmail"} url={"instagram.com/farrasakra"}>
                <Envelope size={20} />
              </LinkPlatform>
              <LinkPlatform
                name={"Whatsapp"}
                url={"https://wa.me//+6283825102687"}
              >
                <WhatsappLogo size={20} />
              </LinkPlatform>
            </div>
            <div>
              <div className="btn hover:text-white hover:border-4 border-4 border-white hover:border-white hover:bg-dark  bg-white text-black  font-semibold btn-lg mt-4">
                My Service <ArrowUpRight size={32} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex items-end justify-center relative">
          <div className="bg-white  h-3/4 aspect-square absolute"></div>
          <Image
            width={10000}
            height={10000}
            className=" max-h-[70vh] grayscale aspect-square object-scale-down  "
            src={"/assets/otots.png"}
          />
        </div>
      </div>

      <div className="flex flex-col gap-36 my-4 py-6">
        <div className="flex justify-between font-medium w-full">
          <p>PROFFESIONAL WEB DEVELOPER</p>
          <p>1+ YEARS EXPERIENCE</p>
        </div>
        <div className="flex-1">
          <div className="flex justify-between">
            <div className="text-7xl relative flex-1 font-bold">
              <div className="absolute  flex items-end justify-center w-full h-full">
                <div className="bg-white bg-opacity-10 h-2/3 aspect-square absolute"></div>
                <Image
                  width={10000}
                  height={10000}
                  className=" max-h-[30vh] grayscale aspect-square object-scale-down  "
                  src={"/assets/lastras.png"}
                />
              </div>
              <p className="z-[2]">
                ABOUT <br />
                ME
              </p>
            </div>
            <div className="w-7/12 ">
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
              <Button name={"Read more"} />
            </div>
          </div>
        </div>
      </div>

      <div>
        <Header title={"SERVICE"}>
          <div className="btn  hover:text-white hover:border-4 border-4 border-white hover:border-white hover:bg-dark  bg-white text-black  font-semibold ">
            BOOK SERVICE <ArrowUpRight size={20} />
          </div>
        </Header>
        <div className="grid gap-3 grid-cols-3 mt-10">
          {service.data.map((cb, i) => (
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

      <div className="max-h-svh">
        <Header title={"MY PROJECT"}>
          <Button name={"See More"} />
        </Header>
        <div className="flex mt-12 gap-3 whitespace-nowrap overflow-x-auto flex-1 relative hidden-bar">
          {project.data.map((cb, i) => (
            <ImageSlider
              key={i}
              setActiveCard={setScroll}
              activeCard={scroll}
              number={i + 1}
              imageUrl={cb.image}
            />
          ))}
        </div>
        {/* <div className="h-3/4">
          <div className="flex gap-4 mt-12 h-1/4 bg-white">
            <img
              src={"/assets/project/casecool.png"}
              className="w-8/12 max-h-60 bg-red-500 h-1/2 object-scale-down"
            />
            <div className="w-4/12 gap-4 max-h-svh">
              <img
                src={
                  "/assets/project/iPhone-13-PRO-thrift48shop.vercel.app.png"
                }
                className="h-full max-h-60 bg-yellow-300 w-full object-scale-down"
              />
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <div className="w-2/4 aspect-video bg-white"></div>
            <div className="w-2/4 aspect-video bg-white"></div>
          </div>
        </div> */}
      </div>

      <div className="">
        <Header title={"MY SKILLS"}>
          <Button name={"See more"} />
        </Header>
        <div className="scroller cards" ref={bapakCard}>
          <ul className="scroller__inner mt-12 animate-view" ref={barisanCard}>
            {myskill.data.map((cb, i) => (
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
}
