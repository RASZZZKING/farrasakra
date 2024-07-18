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
import Link from "next/link";
import { X } from "@phosphor-icons/react";

export default function Home() {
  const [activeCard, setActiveCard] = useState(1);
  const [scroll, setScroll] = useState(2);
  const [showSkills, setShowSkills] = useState(false);
  const [showBook, setShowBook] = useState(false);
  const [pickService, setPickService] = useState(0);
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
    <div className="flex flex-col gap-6 lg:gap-12 max-lg:px-8">
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
              <Link
                href={"/service"}
                className="btn btn-md hover:text-white hover:border-4 border-4 border-white hover:border-white hover:bg-dark  bg-white text-black  font-semibold lg:btn-lg mt-4"
              >
                My Service <ArrowUpRight size={32} />
              </Link>
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
            <LinkPlatform name={"Gmailf"} url={"instagram.com/farrasakra"}>
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
            <Link
              href={"/service"}
              className="btn btn-wide hover:text-white hover:border-4 border-4 border-white hover:border-white hover:bg-dark  bg-white text-black  font-semibold lg:btn-lg mt-4"
            >
              My Service
            </Link>
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
                <Button url={"/about"} name={"Read more"} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-lg:border-slate-700 max-lg:border-b-2 pb-8">
        <Header title={"SERVICE"}>
          <div
            onClick={() => setShowBook(!showBook)}
            className="btn max-lg:hidden max-lg:btn-sm  hover:text-white hover:border-4 border-4 border-white hover:border-white hover:bg-dark  bg-white text-black  font-semibold "
          >
            BOOK SERVICE <ArrowUpRight size={20} />
          </div>
          <div
            onClick={() => setShowBook(!showBook)}
            className="btn lg:hidden max-lg:btn-sm  hover:text-white hover:border-4 border-4 border-white hover:border-white hover:bg-dark  bg-white text-black  font-semibold "
          >
            <BookOpenText size={20} />
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
            <Button url={"/project"} name={"See More"} />
          </div>
          <Link href={"/project"} className="btn lg:hidden max-lg:btn-sm  hover:text-white hover:border-4 border-4 border-white hover:border-white hover:bg-dark  bg-white text-black  font-semibold ">
            <Laptop size="20" />
          </Link>
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
          <div
            className="max-lg:hidden cursor-pointer"
            onClick={() => setShowSkills(!showSkills)}
          >
            <div className="btn max-lg:btn-md hover:text-white hover:border-4 border-4 border-slate-900 hover:border-white hover:bg-dark  bg-black text-white  font-semibold ">
              See more <ArrowUpRight size={20} />
            </div>
          </div>
          <div
            onClick={() => setShowSkills(!showSkills)}
            className="btn lg:hidden max-lg:btn-sm  hover:text-white hover:border-4 border-4 border-white hover:border-white hover:bg-dark  bg-white text-black  font-semibold "
          >
            <Book size="20" />
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

      {/* skills sheets */}
      <div
        className={`${
          !showSkills && "hidden"
        } fixed z-[100] top-0 left-0 h-svh w-svw max-w-[100svw]  backdrop-filter backdrop-blur-lg bg-opacity-20 p-10`}
      >
        <div className="bg-zinc-900 max-w-full min-h-full max-h-full p-4 overflow-auto hidden-bar">
          <div className="flex items-center justify-between mb-4">
            <p className="text-4xl font-semibold">MY SKILLSHET</p>
            <div
              onClick={() => setShowSkills(!showSkills)}
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
            {myskill.data.map((cb, i) => (
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
      {/* skills sheets pop up ends */}
      <div
        className={`${
          !showSkills && "hidden"
        } fixed z-[100] top-0 left-0 h-svh w-svw max-w-[100svw]  backdrop-filter backdrop-blur-lg bg-opacity-20 p-10`}
      >
        <div className="bg-zinc-900 max-w-full min-h-full max-h-full p-4 overflow-auto hidden-bar">
          <div className="flex items-center justify-between mb-4">
            <p className="text-4xl font-semibold">MY SKILLSHET</p>
            <div
              onClick={() => setShowSkills(!showSkills)}
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
            {myskill.data.map((cb, i) => (
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
      {/* service book pop up */}
      <div
        className={`${
          !showBook && "hidden"
        } fixed z-[100] top-0 left-0 h-svh w-svw max-w-[100svw]  backdrop-filter backdrop-blur-lg bg-opacity-20 flex justify-center items-center`}
      >
        <div className="bg-zinc-900 w-96  py-6 px-8 hidden-bar">
          <div className="flex items-center justify-between mb-4">
            <p className="text-4xl font-semibold">ORDER MY SERVICE</p>
            <div
              onClick={() => setShowBook(!showBook)}
              className="btn btn-xs   text-white"
            >
              <X
                weight="bold"
                size={15}
                className="cursor-pointer font-semibold"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <label className="" htmlFor="name">
              Name <br />
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Type here"
                className="input mt-1 input-bordered w-full max-w-xs p-2"
              />
            </label>
            <label className="" htmlFor="name">
              Name Project
              <br />
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Type here"
                className="input mt-1 input-bordered w-full max-w-xs p-2"
              />
            </label>
            <label className="" htmlFor="name">
              Number Phone
              <br />
              <input
                id="name"
                type="number"
                name="name"
                placeholder="Type here"
                className="input mt-1 input-bordered w-full max-w-xs p-2"
              />
            </label>
            <label className="" htmlFor="name">
              Date Time Interview
              <br />
              <input
                id="name"
                type="datetime-local"
                name="name"
                placeholder="Type here"
                className="input mt-1 input-bordered w-full max-w-xs p-2"
              />
            </label>
            <div className=" col-span-2">
              Type Service
              <div className="w-full grid gap-2 mt-2" htmlFor="name">
                <label
                  htmlFor=""
                  onClick={() => setPickService(0)}
                  className={`flex cursor-pointer ${
                    pickService === 0
                      ? "text-black bg-white font-semibold"
                      : "text-white bg-white bg-opacity-10 font-light"
                  }  text-sm items-center justify-center w-full relative min-h-12`}
                >
                  TURN DESIGN TO CODE
                  <input
                    type="radio"
                    name="typeService"
                    placeholder="Type here"
                    className="opacity-0"
                  />
                </label>
                <label
                  htmlFor=""
                  onClick={() => setPickService(1)}
                  className={`flex cursor-pointer ${
                    pickService === 1
                      ? "text-black bg-white font-semibold"
                      : "text-white bg-white bg-opacity-10 font-light"
                  }  text-sm items-center justify-center w-full relative min-h-12`}
                >
                  FULLSTACK WEB APP
                  <input
                    type="radio"
                    name="typeService"
                    placeholder="Type here"
                    className="opacity-0"
                  />
                </label>
                <label
                  htmlFor=""
                  onClick={() => setPickService(2)}
                  className={`flex cursor-pointer ${
                    pickService === 2
                      ? "text-black bg-white font-semibold"
                      : "text-white bg-white bg-opacity-10 font-light"
                  }  text-sm items-center justify-center w-full relative min-h-12`}
                >
                  ADMIN DASHBOARD WEB APP
                  <input
                    type="radio"
                    name="typeService"
                    placeholder="Type here"
                    className="opacity-0"
                  />
                </label>
              </div>
            </div>
            <div className="w-full flex justify-end col-span-2">
            <button className="btn btn-sm bg-white text-black font-bold hover:text-white">SEND</button>
            </div>
          </div>
        </div>
      </div>
      {/* service book pop up ends */}
    </div>
  );
}
