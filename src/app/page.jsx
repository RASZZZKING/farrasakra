"use client";
import {
  ArrowRight,
  ArrowUpRight,
  Book,
  BookBookmark,
  BookOpenText,
  Envelope,
  InstagramLogo,
  Laptop,
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
  const [scroll, setScroll] = useState(2);
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
    <div className="flex flex-col gap-6 lg:gap-12 px-8">
      <div className="  lg:min-h-[90svh] lg:max-h-[90svh] border-b-2 max-lg:pb-4 max-lg:mt-4 max-lg:flex-col   border-slate-700 flex lg:justify-between items-start lg:items-center">
        <div className="flex items-end lg:w-1/2 justify-between">
          <div className="flex-col flex gap-4">
            <p className="text-lg max-lg:hidden font-medium">HELLO, I'M</p>
            <p className="font-bold text-4xl lg:text-8xl leading-tight">
              FARRAS AKHIRIO RAMADHAN
            </p>
            {/* {MOBILE HIDDEN} */}
            <div className="flex flex-wrap max-lg:hidden lg:gap-6">
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
            <div className="max-lg:hidden">
              <div className="btn btn-md hover:text-white hover:border-4 border-4 border-white hover:border-white hover:bg-dark  bg-white text-black  font-semibold lg:btn-lg mt-4">
                My Service <ArrowUpRight size={32} />
              </div>
            </div>
            {/* MOBILE HIDDEN END */}
          </div>
        </div>
        <div className=" flex items-end justify-center relative">
          <div className="bg-white  h-3/4 aspect-square absolute"></div>
          <Image
            width={10000}
            height={10000}
            className=" max-h-[70vh] grayscale aspect-square object-scale-down  "
            src={"/assets/otots.png"}
          />
        </div>
        <div className="w-full lg:hidden mt-6">
          <div className="flex flex-wrap justify-center gap-3 lg:gap-6">
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
          <div className="flex justify-center">
            <div className="btn btn-wide hover:text-white hover:border-4 border-4 border-white hover:border-white hover:bg-dark  bg-white text-black  font-semibold lg:btn-lg mt-4">
              My Service <ArrowUpRight size={32} className="hidden" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 lg:gap-36 lg:my-4 lg:py-6 max-lg:border-slate-700 max-lg:border-b-2 pb-4">
        <div className="lg:flex justify-between font-medium w-full hidden">
          <p>PROFFESIONAL WEB DEVELOPER</p>
          <p className="text-end">1+ YEARS EXPERIENCE</p>
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
            <div className="w-full lg:w-7/12  ">
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
              <div className="w-full flex max-lg:justify-end">
                <Button name={"Read more"} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-lg:border-slate-700 max-lg:border-b-2 pb-8">
        <Header title={"SERVICE"}>
          <div className="btn max-lg:btn-sm  hover:text-white hover:border-4 border-4 border-white hover:border-white hover:bg-dark  bg-white text-black  font-semibold ">
            <span className="max-lg:hidden">
              BOOK SERVICE <ArrowUpRight size={20} />
            </span>
            <span className="lg:hidden">
              <BookOpenText size={20} />
            </span>
          </div>
        </Header>
        <div className="grid gap-3 lg:grid-cols-3 mt-6 lg:mt-10">
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

      <div className="lg:max-h-svh max-lg:border-slate-700 max-lg:border-b-2 pb-8">
        <Header title={"MY PROJECT"}>
          <div className="max-lg:hidden">
            <Button name={"See More"} />
          </div>
          <div className="btn lg:hidden max-lg:btn-sm  hover:text-white hover:border-4 border-4 border-white hover:border-white hover:bg-dark  bg-white text-black  font-semibold ">
              <Laptop size="20"  />
          </div>
        </Header>
        <div className="max-lg:hidden grid lg:grid-cols-5 mt-8 lg:mt-12 gap-3 flex-1 items-center justify-center">
          {project.data.slice(0, 5).map((cb, i) => (
            <ImageSlider
              key={i}
              setActiveCard={setScroll}
              activeCard={scroll}
              number={i + 1}
              imageUrl={cb.image}
            />
          ))}
        </div>
        <div className="lg:hidden grid lg:grid-cols-5 mt-8 lg:mt-12 gap-3 flex-1 items-center justify-center">
          {project.data.slice(0, 3).map((cb, i) => (
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
          <div className="max-lg:hidden">
          <Button name={"See more"} />

          </div>
          <div className="btn lg:hidden max-lg:btn-sm  hover:text-white hover:border-4 border-4 border-white hover:border-white hover:bg-dark  bg-white text-black  font-semibold ">
              <Book size="20"  />
          </div>
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
