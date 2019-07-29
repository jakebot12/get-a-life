import React from "react"

class CardPic extends React.Component  {
    
render(){ 


    return (


        <div className="card" id="size">

            <div className="card-block">
                <h3 className="card-title">{this.props.title}</h3>
                <div className="card-img">
                    <img id="" src={this.props.image} />
                </div>
                <div>
                    <p className="card-text">
                        {this.props.text}
                    </p>
                </div>

                <div className="card-footer">
                    <a href="..." className="btn btn-primary">Add A Comment</a>
                </div>
            </div>
        </div>


    );
}
}
export default CardPic;