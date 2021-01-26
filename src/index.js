import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import basket from './stores/BasketStore'
import { Provider } from 'mobx-react'
import './styles.css'

ReactDOM.render(
  <Provider basket={basket}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
