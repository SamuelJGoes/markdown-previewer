import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../styles/styles.scss';

export function PanelTitle(props) {
  const icon = props.panelExpanded
    ? 'fa-solid fa-down-left-and-up-right-to-center'
    : 'fa-solid fa-up-right-and-down-left-from-center';

  return (
    <div className="panel-title">
      <span>{props.title}</span>
      <button className="btn expand-button" onClick={props.onToggleSize}>
        <FontAwesomeIcon icon={icon} />
      </button>
    </div>
  );
}

PanelTitle.propTypes = {
  title: PropTypes.object.isRequired,
  onToggleSize: PropTypes.func.isRequired,
  panelExpanded: PropTypes.bool.isRequired
};
