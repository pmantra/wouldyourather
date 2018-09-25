import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Header, Input, Divider, Button } from 'semantic-ui-react'
import { handleCreateNewQuestion } from '../actions/questions'

class NewQuestion extends Component {

    state = {
        optionOne: '',
        errorOptionOne: false,
        optionTwo: '',
        errorOptionTwo: false
    }

    handleInput = (e, { name, value }) => {
        this.setState(() => ({
            [name]: value
        }))
    }

    handleClick = () => {
        const { optionOne, optionTwo } = this.state
        const { authedUser } = this.props
        this.setState(() => ({
            errorOptionOne: optionOne==='',
            errorOptionTwo: optionTwo==='',
        }),
        () => {
            if(optionOne !== '' && optionTwo !== '') {
                const question = { optionOneText: optionOne, optionTwoText: optionTwo, author: authedUser}
                this.props.onClick(question)
            }
        })
    }

    render () {
        const { optionOne, optionTwo, errorOptionOne, errorOptionTwo } = this.state
        return (
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
                        error={errorOptionOne}
                        onChange={this.handleInput}/>
                        <Divider horizontal>Or</Divider>
                        <Input placeholder='Enter Option Two Text Here' fluid
                        name='optionTwo'
                        value={optionTwo}
                        error={errorOptionTwo}
                        onChange={this.handleInput}/>
                        <br/>
                        <Button content='Submit' fluid color='blue'
                        onClick={this.handleClick}/>
                    </Card.Content>
                </Card>
            </div>
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
        onClick: (question) => dispatch(handleCreateNewQuestion(question))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewQuestion)
