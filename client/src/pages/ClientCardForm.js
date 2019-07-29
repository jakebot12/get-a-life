import React from "react"

class ClientCardForm extends React.Component {

        state = {
                image: "",
                firstname: "",
                lastname: "",
                career: "",
                bucklist: "",
        };

        handleInputChange = event => {

                const { name, value } = event.target;

                this.setState({
                        [name]: value
                });
        };

        handleFormSubmit = event => {

                event.preventDefault();
                console.log(this.state.image);
                console.log(this.state.firstname);
                console.log(this.state.lastname);
                console.log(this.state.age);
                console.log(this.state.bucklist);
                {/*internal api call needed*/ }

                this.setState({
                        image: "",
                        firstname: "",
                        lastname: "",
                        career: "",
                        age: "",
                        bucklist: "",

                });

        };

        render() {

                return (
                        <div>
                                <p>
                                        Make A Profile !
                                </p>
                                <form >

                                        {/*image entry*/}
                                        <input
                                                value={this.state.image}
                                                name="image"
                                                onChange={this.handleInputChange}
                                                type="image"
                                                type="text"
                                                src="{this.state.image}"
                                                placeholder="Image URL"
                                        />
                                        {/*firstname entry*/}
                                        <input
                                                value={this.state.firstname}
                                                name="firstname"
                                                onChange={this.handleInputChange}
                                                type="text"
                                                placeholder="Firstname"
                                        />
                                        {/*lastname entry*/}
                                        <input
                                                value={this.state.lastname}
                                                name="lastname"
                                                onChange={this.handleInputChange}
                                                type="text"
                                                placeholder="Lastname"

                                        />
                                        {/*career entry*/}
                                        <input
                                                value={this.state.career}
                                                name="career"
                                                onChange={this.handleInputChange}
                                                type="text"
                                                placeholder="Career"

                                        />
                                        {/*age entry*/}
                                        <input
                                                value={this.state.age}
                                                name="age"
                                                onChange={this.handleInputChange}
                                                type="text"
                                                placeholder="Age"
                                        />
                                        {/*textbox entry*/}
                                        <textarea className="textzone"

                                                value={this.state.bucklist}
                                                name="bucklist"
                                                onChange={this.handleInputChange}
                                                type="text"
                                                placeholder="Bucklist Items"
                                                rows={3}

                                        />
                                        {/*button entry*/}
                                        <div className="bfix">
                                                <button className="btn btn-outline " onClick={this.handleFormSubmit}>Submit</button>
                                        </div>
                                </form>
                        </div>
                );
        }
}

export default ClientCardForm;