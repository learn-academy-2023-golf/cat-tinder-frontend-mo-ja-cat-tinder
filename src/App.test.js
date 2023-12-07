import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import App from './App'

test('renders Home.', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
})
