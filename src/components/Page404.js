import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from 'semantic-ui-react'

const Page404 = (props) => {
    return (
        <div>
            <span>404 Page not found!</span>
            <br/>
            <Link className='' to='/'/>
        </div>
    )
}

export default Page404