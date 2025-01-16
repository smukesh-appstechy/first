import React from "react";
import { Link } from "react-router-dom";
import allData from "../../../alldata.json";
import InputForm from "../formBlock/InputForm";
import HowItWork from "./HowItWork";
import SectionHeading from "./SectionHeading";
import ApiData from "./ApiData";

const Home = () => {
  return (
    <>
      <section className="py-5">
        <div className="container m-auto">
          <div className="hero-wrapper grid grid-cols-2 gap-16">
            <div className="hero-txt flex justify-center items-start flex-col">
              <h1 className="text-purple hero-heading text-6xl font-bold leading-normal">
                {allData.page.homepage.section.herosection.heading1.value}{" "}
                <span className="text-black block text-6xl font-bold">
                  {allData.page.homepage.section.herosection.span1.value}
                </span>
              </h1>
              <p className="pt-5 text-lg">{allData.page.homepage.section.herosection.heroPera.value}</p>
              <button className="text-xl rounded-md bg-purple py-5 px-10 mt-10 text-white">
                {allData.page.homepage.section.herosection.butttonTxt.value}
              </button>
            </div>
            <div className="hero-image">
              <img
                src={allData.page.homepage.section.herosection.heroImage.value}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <InputForm />
      <SectionHeading />
      <section className="pb-10">
        <div className="container m-auto">
          <div className="how-card-wrapper grid grid-cols-3 gap-16">
            {allData.page.homepage.section.howItWork.howCardData.map((data) => (
              <HowItWork
                number={data.cardContent.number.value}
                heading={data.cardContent.cardHeading.value}
                paraTxt={data.cardContent.CardPara.value}
              />
            ))}
          </div>
          <div className="how-button-wrapper pt-10 text-center ">
                    <Link className="border-purple border rounded-md py-4 px-5 text-base inline-block mr-5 text-purple">Learn More</Link>
                    <Link className="border-purple border rounded-md py-4 px-5 text-base inline-block mr-5 text-white bg-purple">Get Started</Link>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Home;
