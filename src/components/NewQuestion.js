import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Header, Input, Divider, Button } from 'semantic-ui-react'

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
        this.setState(() => ({
            errorOptionOne: optionOne==='',
            errorOptionTwo: optionTwo==='',
        }),
        () => {
            console.log('after all that', this.state)
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

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        //todo
        onClick: dispatch()
    }
}

export default connect()(NewQuestion)
