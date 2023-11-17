import Image from "next/image";

import Link from "next/link";
import Tab from "./components/Tab";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <section className="relative">
        <nav className="fixed z-50 min-w-full h-16 bg-slate-700  text-center text-white flex flex-col justify-center ">
          <div className="flex justify-around">
            <div className="flex">
              <Image
                className="w-4 h-5 text-lg mt-[0.15rem] mr-[3px]"
                src={"/img/fav_mini.png"}
                alt="fav_mini"
                width={1000}
                height={1000}
                quality={100}
                // sizes="(max-width: 768px) 100vw, 33vw"
              />{" "}
              <h2 className="font-medium">WeDesign</h2>
            </div>
            <div className="flex gap-5 font-normal text-xs mt-1">
              <Link href={"#about"}>About</Link>
              <Link href={"#services"}>Services</Link>
              <Link href={"#contact"}>Contact</Link>
            </div>
          </div>
        </nav>
      </section>

      <section id="home">
        <div className="relative w-full h-[80vh]">
          <div className="absolute inset-0">
            <Image src="/img/webdesign1.jpg" alt="background image" fill />
            <div className="backdrop-brightness-50 w-full h-[80vh]" />
          </div>
          <div className="relative z-40 flex flex-col items-center justify-center h-full">
            <h1 className="text-3xl font-semibold text-white">
              We are WeDesign!{" "}
            </h1>
            <p className="mt-2 text-sm text-white">
              You dream, we design and build.{" "}
            </p>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="relative w-full h-[40vh]">
          <div className="w-full h-24 mt-20 flex flex-col place-items-center">
            <h2 className="font-semibold text-xl">ABOUT US</h2>

            <Image
              className="w-4 h-12 rotate-90 -mt-6"
              src={"/img/fav_mini.png"}
              alt="fav_mini"
              width={500}
              height={500}
              quality={100}
              // sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          <div className="max-w-4xl m-auto">
            <Tab />
          </div>
        </div>
      </section>

      <section id="services">
        <div className="relative w-full h-[40vh]">
          <div className="w-full h-24 mt-20 flex flex-col place-items-center">
            <h2 className="font-semibold text-xl">SERVICES</h2>

            <Image
              className="w-4 h-12 rotate-90 -mt-6"
              src={"/img/fav_mini.png"}
              alt="fav_mini"
              width={500}
              height={500}
              quality={100}
              // sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          <div className="w-full h-40 flex flex-col justify-center text-white bg-zinc-800 m-auto">
            <div className="">
              <p className="max-w-4xl m-auto text-sm font-extralight tracking-wide">
                <span className="font-semibold text-base text-amber-300">
                  Web design.
                </span>{" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                veritatis nulla rem, ipsam obcaecati optio exercitationem itaque
                nihil unde quae id molestias minima. Doloremque, repellendus.
                Perspiciatis fugiat nostrum qui magnam error quae, rem vitae,
                quos impedit provident esse! Adipisci
              </p>

              <button
                className="absolute bottom-0 left-0 top-20 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                data-te-target="#carouselExampleCrossfade"
                data-te-slide="prev"
              >
                <span className="inline-block h-8 w-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </span>
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Previous
                </span>
              </button>

              <button
                className="absolute bottom-0 right-0 top-20 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                data-te-target="#carouselExampleCrossfade"
                data-te-slide="next"
              >
                <span className="inline-block h-8 w-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Next
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="relative w-full h-[80vh]">
          <div className="w-full h-24 mt-20 flex flex-col place-items-center">
            <h2 className="font-semibold text-xl">PROJECTS</h2>

            <Image
              className="w-4 h-12 rotate-90 -mt-6"
              src={"/img/fav_mini.png"}
              alt="fav_mini"
              width={500}
              height={500}
              quality={100}
              // sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          <div className="relative full h-[] m-auto flex gap-6 justify-center">
            <div>
              <div className="relative w-[20rem] h-[25rem] ">
                <Image
                  className="w-[20rem] h-[25rem] relative"
                  src="/img/project1.jpg"
                  alt="background"
                  fill
                />
                <div className="absolute h-64 flex flex-col justify-end pl-3 py-3 bg-gradient-to-b from-transparent to-zinc-900 bottom-0 w-[20rem] text-white text-sm ">
                  {" "}
                  Bird logo
                </div>
              </div>
            </div>
            <div>
              <div className="relative w-[20rem] h-[25rem] ">
                <Image
                  className="w-[20rem] h-[25rem] relative"
                  src="/img/project2.jpg"
                  alt="background"
                  fill
                />
                <div className="absolute h-64 flex flex-col justify-end pl-3 py-3  bg-gradient-to-b from-transparent to-black bottom-0 w-[20rem] text-white text-sm ">
                  {" "}
                  Emirates App
                </div>
              </div>
            </div>
            <div>
              <div className="relative w-[20rem] h-[25rem] ">
                <Image
                  className="w-[20rem] h-[25rem] relative"
                  src="/img/project3.jpg"
                  alt="background"
                  fill
                />
                <div className="absolute h-64 flex flex-col justify-end pl-3 py-3  bg-gradient-to-b from-transparent to-zinc-900 bottom-0 w-[20rem] text-white text-sm ">
                  {" "}
                  Weather App
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="relative w-full h-[64vh]">
          <div className="w-full h-24 flex flex-col place-items-center">
            <h2 className="font-semibold text-xl">CONTACT</h2>

            <Image
              className="w-4 h-12 rotate-90 -mt-6"
              src={"/img/fav_mini.png"}
              alt="fav_mini"
              width={500}
              height={500}
              quality={100}
              // sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          <div className="max-w-xl m-auto -mt-4">
            <form className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Subject"
                className="border-2 px-3 py-3 text-sm font-light"
              />
              <input
                type="text"
                placeholder="Full Name"
                className="border-2 px-3 py-3 text-sm font-light"
              />
              <input
                type="text"
                placeholder="E-mail Address"
                className="border-2 px-3 py-3 text-sm font-light"
              />
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={4}
                placeholder="Message"
                className="border-2 px-3 py-3 text-sm font-light"
              ></textarea>
              <input
                type="submit"
                value={"SEND"}
                className=" bg-zinc-400 py-3 text-white"
              />
            </form>
          </div>
        </div>
      </section>

      <footer className="relative bg-zinc-800">
        <div className="max-w-3xl m-auto flex justify-between border-b-2 text-sm font-light pt-8 text-white">
          <div className="">
            <h4 className="text-base font-semibold">Follow us</h4>
            <div className="flex gap-1">
              <Image
                src={"/img/social-icons/facebook.svg"}
                alt="facebook"
                width={20}
                height={20}
              />
              <Image
                src={"/img/social-icons/instagram.svg"}
                alt="facebook"
                width={20}
                height={20}
              />
              <Image
                src={"/img/social-icons/twitter.svg"}
                alt="facebook"
                width={20}
                height={20}
              />
            </div>
          </div>
          <div>
            <h4 className="text-base font-semibold">Location</h4>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Loremipsum.Lorem.</p>
          </div>
          <div>
            <h4 className="text-base font-semibold">Opening times</h4>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
          </div>
        </div>

        <div className="p-6 text-center ">
          <span className="text-white"> 2023 © </span>
          <a
            className="font-semibold text-neutral-600 dark:text-neutral-400"
            href="/"
          >
            All rights reserved
          </a>
        </div>
      </footer>
    </main>
  );
}
