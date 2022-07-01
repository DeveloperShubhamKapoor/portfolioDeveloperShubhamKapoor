import React, { Component } from 'react';
import classes from './Education.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
    render() {
        return (
            <div className={classes.box} id="education">
                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2} animateOnce={true} initiallyVisible={true}>
                    <span className={classes.head}>MY JOURNEY</span>
                    <section className={classes.container}>
                        <div className={classes.container_content}>
                            <div className={classes.row}>
                                <div className={classes.row_md_12}>
                                    <div className={classes.timeline_centered}>
                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`} >
                                                    <MdWork />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Experience  <span>Feb(2020)-Aug(2020)</span></h2>
                                                    <p>I have worked as an <b>Associate Sales Consultant</b> at <a target="_blank" href="https://www.policybazaar.com/"><b>Policybazaar.com</b></a> <i>(is a web aggregator company which deals in sale of various insurance products.)</i>Working at policybazaar.com has helped me at developing my InterPersonal Skills.</p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={classes.timeline_icon} >
                                                    <MdSchool />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Undergraduation at Kurukshetra University <span>2014-2017</span></h2>
                                                    <p>I completed my undergraduation in B.Com (Bachelor Of Commerce) from <a href='https://kuk.ac.in/'>KUK</a> with A+ grade.</p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`} >
                                                    <FaSchool />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Higher Education  <span>2012-2014</span></h2>
                                                    <p>I have completed my higher education from IBLPS with major subjects as Maths & Hindi with 76% merit in CBSE board. </p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>

                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`} >
                                                    <MdWork />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Internship</h2>
                                                    <p>Completed one month Internship in React Js with Internity Foundation</p>
                                                </div>
                                                <div className={classes.timeline_entry_inner}><div className={classes.timeline_icon_3 || classes.color_none}></div></div>
                                            </article>
                                        </ScrollAnimation>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollAnimation>
            </div>

        )
    }
}

export default Education;
