import React from 'react'
import { Link } from 'react-router-dom'
import { Message } from 'semantic-ui-react'

const Page404 = (props) => {
    return (
        <div className='page-not-found'>
        <Message
        color='blue'
        icon='meh outline'
        header='Would you rather go home or stare at this page?'
        content='404 Page Not Found'
        size='massive'/>
        </div>
    )
}

export default Page404