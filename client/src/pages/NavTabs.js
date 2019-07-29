import React from "react";


function NavTabs() {
  return (
    <div>
      <div className="clr-row ">
        {/*Navbar Row*/}
        <div className="clr-col-sm-12 clr-col-md-12 clr-col-lg-12">


          {/*navbar color */}
          <header className="header-4">
            <div className="branding">
              {/*logo image/slogan*/}
              <a>
                <img src="image/gt.jpeg" className="nav-link" alt="Get a life logo" />
                <clr-icon shape="vm-bug"></clr-icon>
                <span className="title"></span>
              </a>
            </div>
            {/*Dashboard and Browse links */}
            <div className="header-nav">


              <a href="/home" className="nav-link"><span className="nav-text">Home</span></a>
              <a href="/browse" className="nav-link"><span className="nav-text">Browse</span></a>
              <a href="/dashboard" className="nav-link"><span className="nav-text">Dashboard</span></a>
              <a href="/contact" className="nav-link"><span className="nav-text">Contact</span></a>
            </div>
            {/*nav bar logout */}
            <div className="header-actions">
              <a href="/welcome" className="nav-link nav-text">
                Log Out
                        </a>
            </div>
          </header>
        </div>
      </div>


    </div>
  );
}

export default NavTabs;
