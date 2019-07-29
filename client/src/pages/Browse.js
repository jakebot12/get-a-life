import React from "react";
import BrowseCard from "./BrowseCard"
import ClientCard from "./ClientCard";


class Browse extends React.Component {

    state = {
        cardData: []
    }


    componentDidMount() {
        // call API
        // setState({cardData: apiResult })
    }

    nameData = [
        {
            id: '1',
            name: "Tom Ford",
            image: "/image/andrew_young.jpeg",
            career: "Lawyer",
            age: "40",
            bucketlist:" Run Marathon, Read 1000 books, Have a Great Day"
        },
        {
            id: '2',
            name: "Tom Ford",
            image: "/image/andrew_young.jpeg",
            career: "Lawyer",
            age: "40",
            bucketlist:" Run Marathon, Read 1000 books, Have a Great Day"
        },
        {
            id: '3',
            name: "Tom Ford",
            image: "/image/andrew_young.jpeg",
            career: "Lawyer",
            age: "40",
            bucketlist:" Run Marathon, Read 1000 books, Have a Great Day"
        },
        {
            id: '4',
            name: "Tom Ford",
            image: "/image/andrew_young.jpeg",
            career: "Lawyer",
            age: "40",
            bucketlist:" Run Marathon, Read 1000 books, Have a Great Day"
        },
        {
            id: '5',
            name: "Tom Ford",
            image: "/image/andrew_young.jpeg",
            career: "Lawyer",
            age: "40",
            bucketlist:" Run Marathon, Read 1000 books, Have a Great Day"
        },
        {
            id: '6',
            name: "Tom Ford",
            image: "/image/andrew_young.jpeg",
            career: "Lawyer",
            age: "40",
            bucketlist:" Run Marathon, Read 1000 books, Have a Great Day"
        },
    ]

render() {
    return (
        <div>
            {/* clients profile card */}
            <div className="clr-row ">

                <div className="clr-col-lg-2 clr-col-md-3 clr-col-sm-3">
                    <ClientCard
                        name="Tom Ford"
                        career="Lawyer"
                        age="32"
                        bucketlist= "Run Marathon, Read a million books,Have a Great Day"
                    />
                </div>
                {/* Browse Cards Colum 1 */}
                <div className="clr-col-lg-10 clr-col-md-9 clr-col-sm-9">
                <div className="clr-row">
                {
                                // switch from mockData to state.cardData
                                this.nameData.length > 0 && this.nameData.map(item => (
                                    <div key={item.id} className="clr-col-lg-3 clr-col-md-3 clr-col-sm-3">
                                        <BrowseCard
                                            image={item.image}
                                            name={item.name}
                                            career={item.career}
                                            age={item.age}
                                            bucketlist={item.bucketlist}
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

export default Browse;

