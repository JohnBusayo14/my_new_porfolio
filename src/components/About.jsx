import React from "react";
import location from "../images/location.svg";
import office from "../images/office.svg";
import calendar from "../images/calendar.svg";

const About = () => {
  const experience = [
    {
      role: "Junior Developer",
      company: "Nestar Global",
      location: "Lagos, Nigeria",
      type: "Full time",
      date: "Sep 2021 - Dec 2021",
    },
    {
      role: "Junior Developer",
      company: "Nestar Global",
      location: "Lagos, Nigeria",
      type: "Full time",
      date: "Sep 2021 - Dec 2021",
    },
    {
      role: "Junior Developer",
      company: "Nestar Global",
      location: "Lagos, Nigeria",
      type: "Full time",
      date: "Sep 2021 - Dec 2021",
    },
  ];

  const education = [
    {
      course: "B.sc Mechanical Engineering",
      school: " Obafemi Awolowo University",
      location: "Osun, Nigeria",
      type: "Full time",
      
    },
    {
      course: "High School",
      school: " Samwagba Comprehensive College",
      location: "Ondo, Nigeria",
      type: "Full time",
     
    },
  
  ];

  return (
    <div
      className="lg:w-[60%] mt-44"
      id="about"
      data-aos="fade-up"
      data-aos-anchor="#about"
    >
      <div>
        <h1 className="text-[#42446E] text-[2.6rem] font-bold font-[poppins-extrabold]">
          About me
        </h1>
        <p className="text-justify leading-loose text-[#666666]">
        Hello, I'm John Busayo, a passionate and highly skilled React Native and React developer with a strong drive to create intuitive and innovative user experiences. My journey in software development has led me to specialize in crafting dynamic web applications and mobile apps that combine functionality with stunning design.
        </p>
      </div>
      <div className="mt-10">
        <h1 className="text-[#42446E] text-[2.6rem] font-bold mb-7 font-[poppins-extrabold]">
          Work Exprience
        </h1>
        <div className="grid gap-5">
          {experience.map((item, index) => (
            <div
              key={index}
              className="text-[#666666] pb-5 flex justify-between items-center border-b-[1px] border-b-[#ebeaed]"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className="flex flex-col items-start gap-3">
                <h1 className="text-[1.2rem] tracking-widest">{item.role}</h1>
                <section className="flex items-center justify-between gap-5 text-[0.8rem]">
                  <span className="flex items-center gap-1">
                    <img src={office} alt="" />
                    <p className="font-[poppins-light] tracking-widest">
                      {item.company}
                    </p>
                  </span>
                  <span className="hidden md:flex items-center gap-1">
                    <img src={location} alt="" />
                    <p className="font-[poppins-light] tracking-widest">
                      {item.location}
                    </p>
                  </span>
                </section>
              </div>
              <div className="flex flex-col items-end gap-3">
                <p className="rounded-3xl bg-[#D7FFE0] text-[#018C0F] px-5 text-[0.8rem] py-1 w-fit ">
                  {item.type}
                </p>
                <p className="flex items-center text-[0.8rem] tracking-widest">
                  <img src={calendar} alt="" /> {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-[#42446E] text-[2.6rem] font-bold mb-7 font-[poppins-extrabold]">
          Education
        </h1>
        <div className="grid gap-5">
          {education.map((item, index) => (
            <div
              key={index}
              className="text-[#666666] pb-5 flex justify-between items-center border-b-[1px] border-b-[#ebeaed]"
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              <div className="flex flex-col items-start gap-3">
                <h1 className="text-[1.2rem] tracking-widest">{item.course}</h1>
                <section className="flex items-center justify-between gap-5 text-[0.8rem]">
                  <span className="flex items-center gap-1">
                    <img src={office} alt="" />
                    <p className="font-[poppins-light] tracking-widest">
                      {item.school}
                    </p>
                  </span>
                  <span className="md:flex items-center gap-1 hidden">
                    <img src={location} alt="" />
                    <p className="font-[poppins-light] tracking-widest">
                      {item.location}
                    </p>
                  </span>
                </section>
              </div>
              <div className="flex flex-col items-end gap-3">
                <p className="rounded-3xl bg-[#D7FFE0] text-[#018C0F] px-5 text-[0.8rem] py-1 w-fit ">
                  {item.type}
                </p>
                <p className="flex items-center text-[0.8rem] tracking-widest">
                  <img src={calendar} alt="" /> {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
