import React from "react";

function Browse() {
  return (
<div>
          {/*row with settings */}
    <div className="clr-row ">
        <div className="clr-col-sm-12 clr-col-md-12 clr-col-lg-12">

            {/*This is the navigation bar setup */}
            {/*navbar color */}
            <header className="header-4">
                <div className="branding">
                    <a>
                        {/*logo image/slogan*/}
                            <img src="image/gt.jpeg" className="nav-link" alt="Get a life logo" />
                            <clr-icon shape="vm-bug"></clr-icon>
                            <span className="title"></span>
                    </a>
                </div>
            {/*Dashboard and Browse links */}
                <div class="header-nav">
                    <a href="/dashboard" class="active nav-link"><span class="nav-text">Dashboard</span></a>
                    
                    <a href="/home" class="nav-link"><span class="nav-text">Home</span></a>
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
      {/*END OF NAV */}
    <div className="clr-row">
      {/*COLUM 1 */}
        <div className="clr-col-lg-4">
       
        {/*card beginning */}
            <div className="clr-col-lg-4 clr-col-lg-12">
                <a href="..." className="card clickable">
                    <div className="card-img">
                        <img src={"image/bruno_badi.jpeg"} alt="..." />
                        {/* <img src={require('/image/bruno badi.jpeg')} /> */}
                    </div>
                    <div className="card-block">
                        <p className="card-text">
                                Name: Andrew Young the 3rd
                                <br></br>
                                Career: Engineer
                                <br></br>
                                Age: 34
                                <br></br>
                                BucketList:
                                <br></br>
                                Run a marathon
                                <br></br>
                                Climb Everest
                                <br></br>
                                Marry Rhianna
                        </p>
                    </div>
                </a>
            </div>
        {/*card end */}
        {/*card beginning */}
    <div className="clr-col-lg-4 clr-col-lg-12">
        <a href="/Home" className="card clickable">
            <div className="card-img">
                <img src="/image/andrew_young.jpeg" alt="..." />
            </div>
            <div className="card-block">
                <p className="card-text">
                        Name: Andrew Young
                        <br></br>
                        Career: Engineer
                        <br></br>
                        Age: 34
                        <br></br>
                        BucketList:
                        <br></br>
                        Run a marathon
                        <br></br>
                        Climb Everest
                        <br></br>
                        Marry Rhianna
                </p>
            </div>
        </a>
    </div>
        {/*card end */}
       {/*card beginning */}
    <div className="clr-col-lg-4 clr-col-lg-12">
        <a href="..." className="card clickable">
            <div className="card-img">
                <img src="/image/bella_brundi.jpeg" alt="..." />
            </div>
            <div className="card-block">
                <p className="card-text">
                    Name: Andrew Young
                    <br></br>
                        Career: Engineer
                    <br></br>
                        Age: 34
                    <br></br>
                        BucketList:
                    <br></br>
                        Run a marathon
                    <br></br>
                        Climb Everest
                    <br></br>
                        Marry Rhianna
                </p>
            </div>
        </a>
    </div>
        {/*card end */}
        {/*card beginning */}
    <div className="clr-col-lg-4 clr-col-lg-12">
        <a href="..." className="card clickable">
            <div className="card-img">
                <img src="/image/ben_stien.jpeg" alt="..." />
            </div>
            <div className="card-block">
                <p className="card-text">
                    Name: Andrew Young
                    <br></br>
                    Career: Engineer
                    <br></br>
                    Age: 34
                    <br></br>
                    BucketList:
                    <br></br>
                    Run a marathon
                    <br></br>
                    Climb Everest
                    <br></br>
                    Marry Rhianna
                </p>
            </div>
        </a>
    </div>
        {/*card end */}
        </div>
    {/*COLUM 2 */}
    <div className="clr-col-lg-4">
        
        <div className="clr-col-lg-4 clr-col-lg-12">
        <a href="..." className="card clickable">
            <div className="card-img">
                <img src="/image/cameron_jones.jpeg" alt="..." />
            </div>
            <div className="card-block">
                <p className="card-text">
                Name: Andrew Young
                        <br></br>
                        Career: Engineer
                        <br></br>
                        Age: 34
                        <br></br>
                        BucketList:
                        <br></br>
                        Run a marathon
                        <br></br>
                        Climb Everest
                        <br></br>
                        Marry Rhianna
                </p>
            </div>
        </a>
    </div>
        {/*card end */}
        {/*card beginning */}
    <div className="clr-col-lg-4 clr-col-lg-12">
        <a href="..." className="card clickable">
            <div className="card-img">
                <img src="/image/derrick_james.jpeg" alt="..." />
            </div>
                <div className="card-block">
                    <p className="card-text">
                            Name: Andrew Young
                            <br></br>
                            Career: Engineer
                            <br></br>
                            Age: 34
                            <br></br>
                            BucketList:
                            <br></br>
                            Run a marathon
                            <br></br>
                            Climb Everest
                            <br></br>
                            Marry Rhianna
                    </p>
                </div>
        </a>
    </div>
        {/*card end */}
        {/*card beginning */}
    <div className="clr-col-lg-4 clr-col-lg-12">
        <a href="..." className="card clickable">
            <div className="card-img">
                <img src="/image/larimi_jobes.jpeg" alt="..." />
            </div>
                <div className="card-block">
                    <p className="card-text">
                            Name: Andrew Young
                            <br></br>
                            Career: Engineer
                            <br></br>
                            Age: 34
                            <br></br>
                            BucketList:
                            <br></br>
                            Run a marathon
                            <br></br>
                            Climb Everest
                            <br></br>
                            Marry Rhianna
                    </p>
                </div>
        </a>
    </div>
        {/*card end */}
        
    </div> 
    {/*COLUM 3 */}
    <div className="clr-col-lg-4">
        
        <div className="clr-col-lg-4 clr-col-lg-12">
        <a href="..." className="card clickable">
            <div className="card-img">
                <img src="/image/melody_johnson.jpeg" alt="..." />
            </div>
            <div className="card-block">
                <p className="card-text">
                Name: Andrew Young
                        <br></br>
                        Career: Engineer
                        <br></br>
                        Age: 34
                        <br></br>
                        BucketList:
                        <br></br>
                        Run a marathon
                        <br></br>
                        Climb Everest
                        <br></br>
                        Marry Rhianna
                </p>
            </div>
        </a>
    </div>
        {/*card end */}
        {/*card beginning */}
        <div className="clr-col-lg-4 clr-col-lg-12">
        <a href="..." className="card clickable">
            <div className="card-img">
                <img src="/image/nadia_samper.jpeg" alt="..." />
            </div>
            <div className="card-block">
                <p className="card-text">
                Name: Andrew Young
                        <br></br>
                        Career: Engineer
                        <br></br>
                        Age: 34
                        <br></br>
                        BucketList:
                        <br></br>
                        Run a marathon
                        <br></br>
                        Climb Everest
                        <br></br>
                        Marry Rhianna
                </p>
            </div>
        </a>
    </div>
        {/*card end */}
        {/*card beginning */}
        <div className="clr-col-lg-4 clr-col-lg-12">
        <a href="..." className="card clickable">
            <div className="card-img">
                <img src="/image/nina_sepio.jpeg" alt="..." />
            </div>
            <div className="card-block">
                <p className="card-text">
                Name: Andrew Young
                        <br></br>
                        Career: Engineer
                        <br></br>
                        Age: 34
                        <br></br>
                        BucketList:
                        <br></br>
                        Run a marathon
                        <br></br>
                        Climb Everest
                        <br></br>
                        Marry Rhianna
                </p>
            </div>
        </a>
    </div>
        {/*card end */}
        {/*card beginning */}
        <div className="clr-col-lg-4 clr-col-lg-12">
        <a href="..." className="card clickable">
            <div className="card-img">
                <img src="/image/tarik_jameson.jpeg" alt="..." />
            </div>
            <div className="card-block">
                <p className="card-text">
                Name: Andrew Young
                        <br></br>
                        Career: Engineer
                        <br></br>
                        Age: 34
                        <br></br>
                        BucketList:
                        <br></br>
                        Run a marathon
                        <br></br>
                        Climb Everest
                        <br></br>
                        Marry Rhianna
                </p>
            </div>
        </a>
    </div>
        {/*card end */}
        
        </div>
    </div>

</div>


   
  );
}

export default Browse;

