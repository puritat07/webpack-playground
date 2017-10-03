import React, { Component } from 'react'

export default class TodoForm extends Component {
    constructor() {
        super()
        this.state = {
            text: ''
        }
    }

    onFormSubmit = (eventForm) => {
        eventForm.preventDefault()
        this.props.onSubmit(this.state.text)
        this.setState({text:''})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input 
                        type="text" 
                        placeholder="I want to..." 
                        value={this.state.text} 
                        onChange={
                            (eventText) => this.setState({text: eventText.target.value})
                        } 
                        autoFocus
                    />
                    <button type="submit">
                        Add
                    </button>
                </form>
            </div>    
        )
    }
}