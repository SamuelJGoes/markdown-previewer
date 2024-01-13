import PropTypes from 'prop-types';

import { ToggleTheme } from './ToggleTheme';

import '../styles/styles.scss';

export function Header(props) {
  return (
    <>
      <h1>
        <center id="main-title">{props.title}</center>
      </h1>
      <ToggleTheme theme={props.theme} onClick={props.toggleTheme} />
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.string.isRequired
};
