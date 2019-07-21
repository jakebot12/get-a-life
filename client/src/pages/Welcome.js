import React from "react";
import "./style.css";


function Welcome() {
    return (
        <div >
            <div className="clr-row">
            {/*head */}
            <div class="clr-col-sm-12 clr-col-md-12  clr-col-lg-12">
            <header className="header-4">
                  <div className="branding">
                      <a>
                      
                        {/*logo image/slogan*/}
                          <img src="image/gt.jpeg" className="nav-link" alt="GAL logo"/>
                          <clr-icon shape="vm-bug"></clr-icon>
                          <span className="title">A Life of Adventure Awaits !</span>
                      </a>
                  </div>
                  {/*Dashboard and Browse links */}
                 
                  {/*nav bar logout */}
                  <div className="header-actions">
                      <a href="/login" className="nav-link nav-text">
                         
                      </a>
                  </div>
            </header>
            </div>

            {/*body */}
            <div className="main-container">
           <div className="content-container">
        <nav className="sidenav">
            <section className="sidenav-content">
                <a href="/login" className="nav-link active">
                   Login
                </a>
                <a href="/signup" className="nav-link">
                    Sign Up
                </a>
                <section className="nav-group collapsible">
                    <input id="tabexample1" type="checkbox"/>
                   
                   
                </section>
                <section className="nav-group">
                    <input id="tabexample2" type="checkbox"/>
                    <label for="tabexample2"></label>
                    <ul className="nav-list">
                        <li><a className="nav-link"></a></li>
                        <li><a className="nav-link"></a></li>
                        <li><a className="nav-link active"></a></li>
                        <li><a className="nav-link"></a></li>
                        <li><a className="nav-link"></a></li>
                        <li><a className="nav-link"></a></li>
                    </ul>
                </section>
            </section>
        </nav>
        <div className="content-area">
        <div className ="move">
        <div>
        <img src="image/marathon/bucket.jpeg" alt="..." />
        
        <img src="image/app.png" alt="..." />
        <img src="image/bike.jpeg" alt="..." />
       
        </div>
        <div>
        <img src="image/bucketlist.jpeg" alt="..." />
        </div>
        </div>
        </div>
    </div>
           </div>
           </div>
        </div>
    );
}

export default Welcome;