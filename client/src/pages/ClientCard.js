import React from "react"
import ClientCardForm from "./ClientCardForm"


class ClientCard extends React.Component  {
    constructor(props){
        super()
        console.log("hllo")
        this.state ={
            firstname:props.firstname,
            lastname: props.lastname,
            career:props.career,
            age:props.age,
            bucketlist:props.bucketlist
        }
        
    }
    render(){ 

 return (
        <div>
            <div className="">
                {/*image*/}
                <a href="/andrewyoung" className="card clickable">
                    <div className="card-img">
                        <img src="image/andrew_young.jpeg" alt="..." />
                    </div>
                    <div className="card-block">
                        {/*text/Profile*/}
                            <div className="card-text">
                            <div className="ClientInfo">
                                Name: {this.state.firstname }
                                        {this.state.lastname} 
                                <br></br>
                                Career: {this.state.career}
                                <br></br>
                                Age: {this.state.age}
                                <br></br>
                                BucketList:
                                                   
                                {this.state.bucketlist} 
                            
                            </div>
                        </div>
                    </div>
                </a>

            </div>
        </div>
    );
 }
}
export default ClientCard;