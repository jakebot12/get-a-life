import React from "react";
var Remarkable = require('remarkable');



function Home() {
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
                                <img src="image/gt.jpeg" className="nav-link" alt="GAL logo" />
                                <clr-icon shape="vm-bug"></clr-icon>
                                <span className="title"></span>
                            </a>
                        </div>
                        {/*Dashboard and Browse links */}
                        <div class="header-nav">
                            <a href="/dashboard" class="active nav-link"><span class="nav-text">Dashboard</span></a>
                            <a href="/browse" class="nav-link"><span class="nav-text">Browse</span></a>
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
            {/*body of page */}
            {/*clients information card */}
            <div className="clr-row ">
                <div className="clr-col-lg-2 clr-col-md-4">
                    <a href="..." className="card clickable">
                        <div className="card-img">
                            <img src="image/andrew_young.jpeg" alt="..." />
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

                {/* second half of page */}
            <div className="clr-col-lg-10 clr-col-md-8" >
                <div className="card-columns" >
                        <div className="card">
                            <div className="card-img">
                                <img src="/image/marathon/NYC-Marathon-experience_1.jpg" />
                            </div>
                            <div className="card-block">
                                <p className="card-text" id="newText">
                                
                                </p>
                            </div>
                        </div>
                        <div className="card card-block">
                                <h3 className="card-title">NYC MARATHON EXPERIENCE</h3>
                                <p className="card-text">

                                    Today after my first NYC Marathon experience I know that training and running a marathon change you. It brings you closer to yourself, your weaknesses, you learn how to overcome them and most importantly you realize who you really are.
                                </p>
                        </div>
                        <div className="card">
                            <div className="card-block">
                                <p className="card-text">
                                    I took my training very serious. I haven’t missed a day, I followed a strict diet based on my training and I totally sticked to the plan. Standing on the bridge in Staten Island last Sunday made me feel incredible proud. However my eyes were wide open from how scared I was. I had so much respect for what I was about to do, but I knew 100% that I can do it.
                        
                                    With a very decent 20 mile training run 3 weeks before the race I felt more than confident to run the 5 bridges, inhale all the energy from the crowds and I kept thinking about my family and friends who have been the biggest support on my journey to the start in Staten Island of my first marathon.
                                    
                                    The elite started a bit earlier than my wave did but then at 1015 AM the race director said: “Wave 2 – on your marks” Boom.
                                    
                                    And then it started raining.
                                </p>
                            </div>
                        <div className="card-img">
                            <img src="/image/marathon/NYC-Marathon-experience_2.jpg" />
                        </div>
                            <div className="card-block">
                                <p className="card-text">
                                    I’ve heard from several people who have ran the race before that it was their most painful experience and that this specific marathon is one of the hardest you can do in the US. While I was running the first mile on the Verrazano Bridge, which is by the way the highest incline of the entire race, I felt everything from joy to pure anxiety.
                        
                                    I remember crying when I saw a woman having her dad’s photo on her shirt: “For you Dad”. The first mile was intense, because I realized that I was actually doing this. Along so many inspiring runners who all have their very personal story that will make this day as special for them as it was for me at that moment
                                </p>
                            </div>
                        </div>
                        <div className="card card-block">
                                <h3 className="card-title">WELCOME TO BROOKLYN /  THE BIGGEST BLOCK PARTY EVER</h3>
                                <p className="card-text">
                                    Entering Brooklyn after the bridge was like running through one of the biggest open air parties you can possibly imagine. I saw everything from DJ’s to church choirs and people dancing and singing for the runners. I turned my music off. It was so loud that I couldn’t hear it anyways.
                        
                        
                                </p>
                        </div>
                        <div href="..." className="card">
                            <div className="card-block">
                                <p className="card-text">
                                    I kept my pace steady and easy and told myself to save the energy for the final 6 miles. I was flying. Cruising to the finish. I missed my friends in Long Island City – it was just too crowded so I couldn’t see them. And then there she was: Queensboro Bridge.
                        
                        
                                </p>
                            </div>
                            <div className="card-img">
                                <img src="/image/marathon/NYC-Marathon-experience_5.jpg" />
                            </div>
                        </div>
                        <div className="card card-block">
                            <h3 className="card-title">26.2 SMILING MILES</h3>
                            <p className="card-text">
                                The TCS NYC Marathon was literally 26.2 smiling miles for me: I had so much fun running from one big block party to the next. First Avenue after entering Manhattan gave me chills that lasted for miles. It really was a big wall of noise like everyone described before. I kept thinking about how the running community is such a different crowd. People were yelling my name (I had it printed on my shirt) and kept pushing me through. My pace was still very steady and within my pace range. So is this “marathon wall” coming at some point?
                    
                                At Mile 19 was were I met my friend. I was still feeling pretty good when she handed over a banana, a big hug and the feeling that she was extremely proud of me. My NYC Marathon experience also has been such a blessing because of my very supportive friends and family. Training for a race like that means a lot of dedication and commitment. If your people don’t understand your lifestyle you will have a problem. Or maybe they do? Who knows.
                    
                    
                            </p>
                        </div>
                        <div className="card">
                            <div className="card-block">
                                <h3 className="card-title">NYC MARATHON EXPERIENCE: THE FINAL 6 MILES</h3>
                                <p className="card-text">
                                    The last 6 miles from the Bronx to the finish line was my final push. I never told anyone about my predicted finish time and how I wanted to be able to run faster in the end. I wanted to make it to the finish smiling with my hands up in the air. I’m not sure which crowd was more intense, Brooklyn or Central Park, but the excitement was rising. The wall didn’t hit me, or I didn’t hit the wall. I was so hyped from what  was experiencing right now there was no way something could ruin this for me. My fueling strategy was on point and my energy level was perfectly fine.
                        
                                    At Mile 25 I told myself that I was almost there and focussed on that I still felt amazing. No pain. No cramps. Nothing. Hard work always pays off. Columbus Circle: I turned my headphones off again, soaking everything in, my NYC Marathon experience was almost over. In my head I was sad – I really wanted to keep going – this was so much fun. Mile 26: I could see the finish. Smell it. Feel it. Wow. I was about to finish the TCS NYC Marathon.
                                </p>
                            </div>
                            <div className="card-footer">
                                <a href="..." className="btn btn-primary">Comment</a>
                            </div>
                        </div>
                            <a href="..." className="card clickable">
                                <div className="card-block">
                                    <p className="card-text">
                                        Crossing the finish was the most intense feeling ever. I remember thinking “I just ran the NYC Marathon – that wasn’t too bad.” I didn’t cry. I totally expected me to become super emotional, but I wasn’t.  So, does running a marathon change your life? I’m not sure, but it definitively change you as a person. Almost a week after the NYC Marathon the runners high is still there and my NYC Marathon experience leaves me proud, empowered and inspired. I feel so much stronger mentally today after running the marathon.
                    
                                        And for you I hope it’s the inward lesson of courage, resilience and true grit that leave an impression. Thanks for being a part of my journey. So much love to my family in Germany who has watched the entire race on TV and even watched me crossing the finish line. I felt the energy from every single one of you!
                                    </p>
                                </div>
                                <div className="card-img">
                                    <img src="/image/marathon/NYC-Marathon-experience_7.jpg" />
                                </div>
                            </a>
                </div>
            </div>

            </div>


        </div>



    );
}

export default Home;
