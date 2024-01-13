import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../styles/styles.scss';

export function ToggleTheme(props) {
  const themesIconsMap = {
    light: 'fa-solid fa-moon',
    dark: 'fa-solid fa-sun'
  };

  return (
    <button className="btn theme-button" onClick={props.onClick}>
      <FontAwesomeIcon icon={themesIconsMap[props.theme]} />
    </button>
  );
}

ToggleTheme.propTypes = {
  theme: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
