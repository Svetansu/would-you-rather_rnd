import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { handleAddQuestion } from '../actions/questions';

class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false
    }

    handleChange = (option,e) => {
        const input = e.target.value

        this.setState(() => ({ 
            [option]: input
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { optionOne, optionTwo } = this.state
        const { dispatch } = this.props

        dispatch(handleAddQuestion(optionOne, optionTwo))

        this.setState(() => ({
            toHome: true
        }))
        
    }

    render() {
        const { optionOne, optionTwo, toHome } = this.state
        if(toHome)
            return <Redirect to='/' />

        return (
            <div className="component-container">
                <h2 className="wyr">
                    Please add the options for your question:
                </h2>
                <form onSubmit={this.handleSubmit} className="form-container">
                    <TextField
                        id="outlined-basic"
                        color="secondary"
                        variant="outlined"
                        type="text"
                        label="Option One"
                        defaultValue={optionOne}
                        onChange={(e) => this.handleChange('optionOne',e)}
                        margin="normal"
                        fullWidth
                        autoFocus
                    />
                    <TextField
                        id="wyr2"
                        variant="outlined"
                        type="text"
                        label="Option Two"
                        defaultValue={optionTwo}
                        onChange={(e) => this.handleChange('optionTwo',e)}
                        margin="normal"
                        fullWidth
                    />
                    <Button variant="contained" color="primary" 
                        type="submit"
                        disabled={!optionOne || !optionTwo}
                    >
                        Add Question
                    </Button>
                </form>
            </div>
        )
    }
}

export default connect()(NewQuestion)