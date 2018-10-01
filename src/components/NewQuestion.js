import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Header, Input, Divider, Button } from 'semantic-ui-react'
import { handleCreateNewQuestion } from '../actions/shared'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

class NewQuestion extends Component {

    getInitState = () => {
        return {
            optionOne: '',
            optionTwo: '',
            validateOptionOne: false,
            validateOptionTwo: false
        }
    }

    state = this.getInitState()

    clearForm = () => {
        this.setState(() => this.getInitState())
    }

    handleInput = (e, { name, value }) => {
        this.setState((prevState) => ({
            [name]: value,
            validateOptionOne: name === 'optionOne' ? true : prevState.validateOptionOne,
            validateOptionTwo: name === 'optionTwo' ? true : prevState.validateOptionTwo
        }))
    }

    handleClick = () => {
        const { optionOne, optionTwo } = this.state
        const { authedUser } = this.props
        console.log('authedUser-newQuesiton',authedUser)
        this.setState(() => ({
            validateOptionOne: true,
            validateOptionTwo: true
        }))
        if(optionOne !== '' && optionTwo !== '') {
            const question = { optionOneText: optionOne, optionTwoText: optionTwo, author: authedUser}
            this.props.onSubmit(question, authedUser)
            toast.success("New question has been posted!")
            this.clearForm()
        }
    }

    render () {
        const { optionOne, optionTwo, validateOptionOne, validateOptionTwo} = this.state
        return (
            <Link to='/add'>
                <div className='new-question'>
                    <Card fluid>
                        <Card.Content>
                        <Card.Header>Create New Question</Card.Header>
                        </Card.Content>
                        <Card.Content>
                            <Header as='h5'>Complete the question:</Header>
                            <Header as='h4'>Would you rather?...</Header>
                            <Input placeholder='Enter Option One Text Here' fluid
                            name='optionOne'
                            value={optionOne}
                            error={optionOne==='' && validateOptionOne}
                            onChange={this.handleInput}/>
                            <Divider horizontal>Or</Divider>
                            <Input placeholder='Enter Option Two Text Here' fluid
                            name='optionTwo'
                            value={optionTwo}
                            error={optionTwo==='' && validateOptionTwo}
                            onChange={this.handleInput}/>
                            <br/>
                            <Button content='Submit' fluid color='blue'
                            onClick={this.handleClick}/>
                        </Card.Content>
                    </Card>
                    <ToastContainer position="bottom-right"/>
                </div>
            </Link>
        )
    }
}

const mapStateToProps = ({ authedUser }) => {
    return {
        authedUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (question, authedUser) => dispatch(handleCreateNewQuestion(question, authedUser))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewQuestion)
