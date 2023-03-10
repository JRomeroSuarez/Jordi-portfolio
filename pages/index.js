import Head from "next/head";
import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import jordidev from "../public/jordi-image.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import OppositeContentTimeline from "./components/TimelineBar";
import WorkCard from "./components/Workcard";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const { t } = useTranslation("common");

  const newTab = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Jordi Romero Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-gray-50">
              TheJorko
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl text-gray-600 dark:text-gray-100"
                />
              </li>
              {/*  <li className="ml-10">
                <ToggleButtonGroup
                  value={language}
                  exclusive
                  onChange={handleLanguage}
                  aria-label="text alignment"
                >
                  <ToggleButton value="es" aria-label="en">
                    ES
                  </ToggleButton>
                  <ToggleButton value="en" aria-label="en">
                    EN
                  </ToggleButton>

                </ToggleButtonGroup>
              </li> */}
            </ul>
          </nav>
          <div className="relative mx-auto w-50 h-50 overflow-hidden md:h-80 md:w-80">
            <Image src={jordidev} alt="jordidev" className="rounded-full" />
          </div>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Jordi Romero
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl text-gray-600 dark:text-gray-100">
              Frontend Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-400 md:text-xl max-w-lg mx-auto">
              {t("firstDescription")}
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillGithub
              className="cursor-pointer dark:text-gray-100"
              onClick={() => newTab("https://github.com/JRomeroSuarez")}
            />
            <AiFillLinkedin
              className="cursor-pointer dark:text-gray-100"
              onClick={() =>
                newTab("https://www.linkedin.com/in/jordi-romero-295976180/")
              }
            />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-100">
              {t("aboutMe")}
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              {t("aboutMe1")}
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              {t("aboutMe2")}
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              {t("aboutMe3")}
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              {t("aboutMe4")}
            </p>
          </div>

          <div>
            <h3 className="text-3xl py-1 mt-10 dark:text-gray-100">
              {t("companiesWorked")}
            </h3>
          </div>
          <div className="lg:flex gap-10 mt-10">
            <OppositeContentTimeline></OppositeContentTimeline>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 mt-10 dark:text-gray-100">
              {t("AdditionalInfo")}

            </h3>
            <ul>
              <li>
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400 ">
                  {t("AdditionalInfo1")}

                </p>
              </li>
              <li>
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400 ">
                  {t("AdditionalInfo2")}

                </p>
              </li>
              <li>
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400 ">
                  {t("AdditionalInfo3")}
                </p>
              </li>
              <li>
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400 ">
                  {t("AdditionalInfo4")}
                </p>
              </li>
            </ul>
          </div>
          <h3 className="text-3xl py-1 mt-10 dark:text-gray-100">
            {t("MyProjects")}

          </h3>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                alt="web1"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                alt="web2"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                alt="web3"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                alt="web4"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                alt="web5"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                alt="web6"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
