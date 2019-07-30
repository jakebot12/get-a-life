import React from "react"
import API from "../utils/API"


class ClientCardForm extends React.Component {
        constructor(){
                super()
                this.state = {
                        image: "",
                        firstname: "",
                        lastname: "",
                        career: "",
                        bucklist: "",
                };
                this.handleFormSubmit = this.handleFormSubmit.bind(this)
                this.handleInputChange = this.handleInputChange.bind(this)
        }

        
        
        handleInputChange = event => {

                const { name, value } = event.target;

                this.setState({
                        [name]: value
                });
        };

        handleFormSubmit = event => {

                event.preventDefault();
                API.saveBucket({  
                        firstname:this.state.firstname,
                        lastname:this.state.lastname,
                        career:this.state.career,
                        age:this.state.age,
                        bucklist:this.state.bucklist
                })
                
                {/*internal api call needed*/ }

                this.setState(() =>{
                       return{
                        image:"", 
                        firstname:"",
                        lastname:"" ,
                        career:"",
                        age:"",
                        bucklist:"",
                       } 


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
                                                src={this.state.image}
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