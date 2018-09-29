import React from 'react'
import { Message } from 'semantic-ui-react'

const Page404 = (props) => {
    return (
        <div className='page-not-found'>
        <Message
        color='blue'
        icon='meh outline'
        header='404 error - page not found!'
        content='Would you rather sink into oblivion or go home?'
        size='massive'/>
        </div>
    )
}

export default Page404