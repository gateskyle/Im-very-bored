import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'
import ProfilePicture from '../img/profilepicture.jpg'

function AboutMe() {
  return (
    <>
        <section className="container">

            <section className="row">
                <section className="col-sm">
                    <h1 className="font-weight-bold">About Me</h1>
                    <hr/>
                </section>
            </section>

            <section className="row no-gutters">
                <article className="col-sm-5">
                    <img src={ProfilePicture} alt="Kyle Gates" className="img-fluid aboutMePhoto"></img>
                </article>

                <article className="col-sm">
                    <p>Web developer focusing on teamwork and inclusivity. Recently earned a full-stack developer certificate from the University of Oregon, which developed skills in HTML, CSS, JavaScript, JQuery, Node, MySQL, Sequelize, MongoDB, Mongoose, and React. Previous schooling included Python, Ruby, and C++. As well as prior work experience to communicate clearly and smoothly as a group.
                    <br></br>
                    <br></br>
                    Technical Skills
                    <br></br>
                    Programming languages: Intermediate knowledge of HTML, CSS, JavaScript, JQuery, Node, MySQL, Sequelize, MongoDB, Mongoose, and React. Basic knowledge of Python, Ruby, and C++.
                    <br></br>
                    IDE: Visual Studio Code
                    <br></br>
                    OS Environment: Windows 7/10
                    <br></br>
                    Software Packages: Working knowledge of Microsoft Office (Word, PowerPoint, Outlook)
                    <br></br>
                    Computer Hardware: Built PC desktop computer system from components for programming and general use.</p>
                    
                </article>
            </section>

            {/* <section className="row no-gutters">
                <article className="col-md">
                    <p>Some of my hobbies are video games and skeet shooting. I have been playing videos games since I was young, and was also a reason I am so interested in coding. My hobby of Skeet Shooting developed when
                    I was in high school, were I joined a small league in order to get some electives, and continued to do some more skeet shooting afterwards.<br></br>                    
                    Some interests of mine are History, specifcally World War II, and military equipment. My interest of history, especially WW2, develop from highschool, were my history teachers were very talented and explained history
                    very well, which made listening about it very intriguing. My interest in military equipment was due to the fact that in times of war, military technology advanced rapidly, which greatly benefitted civllian life after wars.</p>
                </article>

            </section>                 */}
        </section>
    </>
  );
}

export default AboutMe;
