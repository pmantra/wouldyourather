import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Header, Input, Divider, Button } from 'semantic-ui-react'
import { handleCreateNewQuestion } from '../actions/shared'
import { Link } from 'react-router-dom'

class NewQuestion extends Component {

    state = {
        optionOne: '',
        optionTwo: '',
        validateOptionOne: false,
        validateOptionTwo: false
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
        this.setState(() => ({
            validateOptionOne: true,
            validateOptionTwo: true
        }))
        if(optionOne !== '' && optionTwo !== '') {
            const question = { optionOneText: optionOne, optionTwoText: optionTwo, author: authedUser}
            this.props.onSubmit(question, authedUser)
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
