import React from "react"



class ClientCard extends React.Component  {
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
                                Name: {this.props.name}
                                <br></br>
                                Career: {this.props.career}
                                <br></br>
                                Age: {this.props.age}
                                <br></br>
                                BucketList:
                                                   
                                {this.props.bucketlist}

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