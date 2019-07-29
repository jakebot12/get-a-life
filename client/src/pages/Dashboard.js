import React from "react";
import CardPic from "./CardPic";
import Form from "./Form"
import ClientCard from "./ClientCard"
import ClientCardForm from "./ClientCardForm";

class Dashboard extends React.Component  {
  constructor(props){
    super(props)
    this.state={
      
    }
  }
   
  render(){ 

  return (
<div>
  
  {/*Profile Card*/}
      <div className="clr-row ">
            <div className="clr-col-lg-3 clr-col-md-3 clr-col-sm-3">
              <ClientCardForm 
              name={this.state.name}
              career={this.state.career}
              age={this.state.age}
              bucklist={this.state.bucklist}
              
              />
            </div>
  
  {/* Example of Profile Card */}
            <div className="clr-col-lg-3 clr-col-md-3 clr-col-sm-3">
              <ClientCard
                name={this.state.name}
                career={this.state.career}
                age={this.state.age}
                bucklist={this.state.bucklist}
              />
            </div> 
  
  {/* Card Form */}
          <div className="clr-col-lg-3 clr-col-md-3 clr-col-sm-3">
              <Form />
            </div> 
  
  {/* Example Card */}
          <div className="clr-col-lg-3 clr-col-md-3 clr-col-sm-3">
          
              <CardPic
              title="Hello"
              image="/image/marathon/NYC-Marathon-experience_1.jpg"
              text="The last 6 miles from the Bronx to the finish line was my final push. I never told anyone about my predicted finish time and how I wanted to be able to run faster in the end. I wanted to make it to the finish smiling with my hands up in the air. I’m not sure which crowd was more intense, Brooklyn or Central Park, but the excitement was rising. The wall didn’t hit me, or I didn’t hit the wall. I was so hyped from what  was experiencing right now there was no way something could ruin this for me. My fueling strategy was on point and my energy level was perfectly fine.

              At Mile 25 I told myself that I was almost there and focussed on that I still felt amazing. No pain. No cramps. Nothing. Hard work always pays off. Columbus Circle: I turned my headphones off again, soaking everything in, my NYC Marathon experience was almost over. In my head I was sad – I really wanted to keep going – this was so much fun. Mile 26: I could see the finish. Smell it. Feel it. Wow. I was about to finish the TCS NYC Marathon."
              />
          </div>
            
      </div>

    </div>

  );
  }
}


export default Dashboard;
