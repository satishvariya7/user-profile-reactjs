import React from 'react';
import { Link } from 'react-router-dom';
function Welcome() {
    return (        
            <main className="site-wrapper">
                <div className="pt-table">
                    <div className="pt-tablecell page-welcome relative">
                        <Link to="/" className="page-close"><i className="tf-ion-close"></i></Link>
                        <div className="author-image-large">
                            {/* <img src="img/author.png" alt="" /> */}
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-md-6 col-lg-7">
                                    <div className="page-title">
                                        <h2>Satish <span className="primary">Variya</span>
                                        <span className="title-bg">About</span></h2>
                                        <p>A product designer from England, who focuses on interactive design & A freelance designer focusing on typography & clean interfaces. Also works in Google..</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores repellendus corporis, tenetur inventore perferendis reprehenderit autem dignissimos non quos unde eveniet sapiente necessitatibus consequuntur ea ab dolore, minus nam eaque.</p>
                                    </div>
                                </div>
                            </div>
                        </div>                    
                    </div>
                </div>
            </main>        
    );
}

export default Welcome