import logo from '../holberton-logo.jpg';
import {StyleSheet, css} from 'aphrodite'

const Header = () => {
  return (
    <header className={css(styles.appHeader)}>
        <img src={logo} className={css(styles.AppLogo)} alt="logo" />
        <h1>School dashboard</h1>
    </header>
  )
}

const styles = StyleSheet.create({
  appHeader: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: '#e0354b',
    borderBottom: '2px solid #e0354b'
  },
  AppLogo: {
    width: '200px',
    height: 'auto'

}
}) 

export default Header