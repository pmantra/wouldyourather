import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'semantic-ui-css/semantic.min.css'
import App from './components/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import middleware from './middleware'
import 'react-toastify/dist/ReactToastify.css'

const store = createStore(rootReducer, middleware)

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'))
