import React from 'react';
import { Link } from 'react-router-dom';
function About() {
    return (    
            <main className="site-wrapper">
                <div className="pt-table">
                    <div className="pt-tablecell page-about relative">
                       <Link to="/" className="page-close"><i className="tf-ion-close"></i></Link>
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
                                    <div className="page-title text-center">
                                        <h2>About <span className="primary">me</span> <span className="title-bg">Name</span></h2>
                                        <p>I am working as a professional UI/UX Designer since 2007. Worked in more than 200 live projects and also with more than 120 different clients!</p>
                                    </div>
                                </div>

                                <div className="col-xs-12 col-md-6">
                                    <div className="about-author">
                                        <figure className="author-thumb">
                                            <img src="img/author.jpg" alt="" />
                                        </figure>
                                        <div className="author-desc">
                                            <p><b>Date of birth:</b> 29th july, 1984</p>
                                            <p><b>Language:</b> English, Spanish</p>
                                            <p><b>Expert in:</b> UI/UX, Web development</p>
                                            <p><b>Freelance:</b> Available</p>
                                        </div>
                                    </div>
                                    <p>I'm a multi-award winning designer that has been specialising in web design for the past three years although I have experience in branding and print.Projects.</p>
                                </div>

                                <div className="col-xs-12 col-md-6">
                                    <div className="section-title clear">
                                        <h3>Skills</h3>
                                    </div>
                                    <div className="skill-wrapper">
                                        <div className="progress clear">
                                            <div className="skill-name">Photoshop</div>
                                            <div className="skill-bar">
                                                <div className="bar" style={{width:"90%"}}></div>
                                            </div>
                                            <div className="skill-lavel" data-skill-value="90%">90%</div>
                                        </div>
                                        <div className="progress clear">
                                            <div className="skill-name">Photoshop</div>
                                            <div className="skill-bar">
                                                <div className="bar" style={{width:"90%"}}></div>
                                            </div>
                                            <div className="skill-lavel" data-skill-value="90%">90%</div>
                                        </div>
                                        <div className="progress clear">
                                            <div className="skill-name">Photoshop</div>
                                            <div className="skill-bar">
                                                <div className="bar" style={{width:"90%"}}></div>
                                            </div>
                                            <div className="skill-lavel" data-skill-value="90%">90%</div>
                                        </div>
                                        <div className="progress clear">
                                            <div className="skill-name">Photoshop</div>
                                            <div className="skill-bar">
                                                <div className="bar" style={{width:"90%"}}></div>
                                            </div>
                                            <div className="skill-lavel" data-skill-value="90%">90%</div>
                                        </div>
                                        <div className="progress clear">
                                            <div className="skill-name">Photoshop</div>
                                            <div className="skill-bar">
                                                <div className="bar" style={{width:"90%"}}></div>
                                            </div>
                                            <div className="skill-lavel" data-skill-value="90%">90%</div>
                                        </div>
                                        <div className="progress clear">
                                            <div className="skill-name">Photoshop</div>
                                            <div className="skill-bar">
                                                <div className="bar" style={{width:"90%"}}></div>
                                            </div>
                                            <div className="skill-lavel" data-skill-value="90%">90%</div>
                                        </div>
                                        <div className="progress clear">
                                            <div className="skill-name">Photoshop</div>
                                            <div className="skill-bar">
                                                <div className="bar" style={{width:"90%"}}></div>
                                            </div>
                                            <div className="skill-lavel" data-skill-value="90%">90%</div>
                                        </div>
                                        <div className="progress clear">
                                            <div className="skill-name">Photoshop</div>
                                            <div className="skill-bar">
                                                <div className="bar" style={{width:"90%"}}></div>
                                            </div>
                                            <div className="skill-lavel" data-skill-value="90%">90%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                      
                    </div>
                </div>
            </main>        
    );
}

export default About