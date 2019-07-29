import React from "react"

class BrowseCard extends React.Component  {
 render(){   
    return (
        <div  >
            {/* image */}
            
            <a  href="..." className="card clickable">
                <div className="card-img ">
                    <img  src={this.props.image}  alt="..." />
                </div>
                {/* Profile Card */}
                <div className="card-block">
                    <p className="card-text">
                        Name: {this.props.name}
                                    <br></br>
                        Career: {this.props.career}
                                    <br></br>
                        Age: {this.props.age}
                                    <br></br>
                        BucketList:{this.props.bucketlist}
                                    <br></br>
                       
                            </p>
                </div>
            </a>
        </div>

    );

 }
}
export default BrowseCard;