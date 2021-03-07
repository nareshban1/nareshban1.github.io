import { Component } from "react";

class Form extends Component{
    inititalState ={
        name:'',
        job:'',
    }
    state = this.inititalState

    handleChange = (event) => {
        const {name, value} = event.target

        this.setState ({
            [name]: value,
        })
    }

    submitForm = () =>{
        this.props.handleSubmit(this.state)
        this.setState(this.inititalState)
    }

    render(){
        const {name, job } = this.state;
        return(
            <form >
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={name} onChange={this.handleChange} />
                <label htmlFor="name">Job</label>
                <input type="text" name="job" id="job" value={job} onChange={this.handleChange} />
                <input type="button"  value="submit" onClick= {this.submitForm} />
            </form>

        );
    }
}

export default Form;