import { getFullYear, getFooterCopy } from '../utils'
import './Footer.css'
const Footer = () => {
  return (
    <footer className='App-footer'>
          <p> Copyright {getFullYear()} - {getFooterCopy()} </p>
    </footer>
  )
}

export default Footer