import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import allData from "../../../alldata.json";
import InputForm from "../formBlock/InputForm";
import HowItWork from "./HowItWork";
import SectionHeading from "./SectionHeading";
import ApiData from "./ApiData";
import Faqsection from "./Faqsection";
import Testimonial from "./Testimonial";

const Home = ({
  openIndex,
  setOpenindex
}) => {


  // useEffect(() => {
  //   allData.page.homepage.section.howItWork.howCardData.map((data) => {
  //     console.log(data);
  //   });
  // }, []);


  useEffect(() => {
    console.log("openIndexdgf",openIndex);
    
  }, [openIndex])
  

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
              <p className="pt-5 text-lg">
                {allData.page.homepage.section.herosection.heroPera.value}
              </p>
              <button className="text-xl rounded-md bg-purple py-5 px-10 mt-10 text-white">
                {allData.page.homepage.section.herosection.buttonTxt.value}
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
      {allData.page.homepage.section.howItWork.howItWorkHead.map(
        (headingData, idx) => (
          <SectionHeading
            key={idx}
            heading={headingData.heading.value}
            para={headingData.headingPara.value}
          />
        )
      )}
      <section className="pb-10">
        <div className="container m-auto">
          <div className="how-card-wrapper grid grid-cols-3 gap-16">
            {allData.page.homepage.section.howItWork.howCardData.map(
              (data, idx) => (
                <HowItWork
                  key={idx}
                  number={data.cardContent.number.value}
                  heading={data.cardContent.cardHeading.value}
                  paraTxt={data.cardContent.CardPara.value}
                />
              )
            )}
          </div>
          <div className="how-button-wrapper pt-10 text-center ">
            <Link className="border-purple border rounded-md py-4 px-5 text-base inline-block mr-5 text-purple">
              Learn More
            </Link>
            <Link className="border-purple border rounded-md py-4 px-5 text-base inline-block mr-5 text-white bg-purple">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* testimonial section */}
      <section className="mb-10">
        <div className="container m-auto">
          {allData.page.homepage.section.testimonialHeading.map((data, idx) => (
            <SectionHeading key={idx} heading={data.heading.value} />
          ))}
          <div className="testi-card-wrapper flex flex-wrap">
            <Testimonial />
          </div>
        </div>
      </section>

      {/* faq section */}
      <section className="pb-10">
        <div className="container m-auto">
          {allData.page.homepage.section.faqHeading.map((data, idx) => (
            <SectionHeading
              key={idx}
              heading={data.heading.value}
              para={data.headingPara.value}
            />
          ))}

          {allData.page.homepage.section.faqsection.map((faqData, index) => (
            <Faqsection
              key={index}
              heading={faqData.faqs.faqheading.value}
              answer={faqData.faqs.faqanswer.value}
              isOpen={openIndex === index}
              index={index}
              openIndex={openIndex}
              setOpenindex={setOpenindex}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
