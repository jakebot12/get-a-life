import React from "react";
import CardPic from "./CardPic";
import ClientCard from "./ClientCard";
import API from "../utils/API";

class Home extends React.Component {

    state = {
        cardData: []
    }


    componentDidMount() {
        this.loadBuckets();
      }

      loadBuckets = () => {
        API.getBuckets()
          .then(res =>
            this.setState({ cardData: res.data, firstname: "", lastname: "", bucketListOne: "" })
          )
          .catch(err => console.log(err));
      };





    mockData = [
        {
            id: '1',
            title: "Hello",
            image: "/image/marathon/NYC-Marathon-experience_1.jpg",
            text: "The last 6 miles from the Bronx to the finish line was my final"
        },
        {
            id: '2',
            title: "Hello",
            image: "/image/marathon/NYC-Marathon-experience_1.jpg",
            text: "The last 6 miles from the Bronx to the finish line was my final"
        },
        {
            id: '3',
            title: "Hello",
            image: "/image/marathon/NYC-Marathon-experience_1.jpg",
            text: "The last 6 miles from the Bronx to the finish line was my final"
        },
        {
            id: '4',
            title: "Hello",
            image: "/image/marathon/NYC-Marathon-experience_1.jpg",
            text: "The last 6 miles from the Bronx to the finish line was my final"
        },
        {
            id: '5',
            title: "Hello",
            image: "/image/marathon/NYC-Marathon-experience_1.jpg",
            text: "The last 6 miles from the Bronx to the finish line was my final"
        },
        {
            id: '6',
            title: "Hello",
            image: "/image/marathon/NYC-Marathon-experience_1.jpg",
            text: "The last 6 miles from the Bronx to the finish line was my final"
        },
    ]


    render() {

        return (
            <div>


                {/*clients information card */}
                <div className="clr-row">
                    <div className="clr-col-lg-2 clr-col-md-3 clr-col-sm-3">
                        <ClientCard
                            name="Tom Ford"
                            career="Lawyer"
                            age="32"
                            bucketlist="Run Marathon,
                            Read 1000 books,
                            Have a Great Day"
                        />
                    </div>
                    {/* second half of page */}
                    {/* colum 1 */}
                    <div className="clr-col-lg-10 clr-col-md-9 clr-col-sm-9">

                        <div className="clr-row">
                            {
                                // switch from mockData to state.cardData
                                this.state.cardData.length > 0 && this.state.cardData.map(item => (
                                    <div key={item.id} className="clr-col-lg-3 clr-col-md-3 clr-col-sm-3">
                                        <CardPic
                                            title={item.firstname} 
                                            image={item.image}
                                            text={item.bucketListOne}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Home;
