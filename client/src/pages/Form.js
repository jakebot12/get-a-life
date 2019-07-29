import React from "react"

class Form extends React.Component {
  // Setting the component's initial state
  state = {
    title: "",
    text: "",
    image: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    
    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    this.setState({
      title: "",
      image: "",
      text: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Make A Drop In The Bucket !
          </p>
        <form >
          <input
            value={this.state.title}
            name="title"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Title"
          />
          <input
            value={this.state.image}
            name="image"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Image URL"
          />
          <textarea className="textzone"

            value={this.state.text}
            name="text"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Text"
            rows={10}

          />
          <div className="bfix">
            <button className="btn btn-outline " onClick={this.handleFormSubmit}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;


