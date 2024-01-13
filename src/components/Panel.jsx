import PropTypes from 'prop-types';

import { PanelTitle } from './PanelTitle';

import '../styles/styles.scss';

export function Panel(props) {
  return (
    <>
      <PanelTitle
        title={props.title}
        onToggleSize={props.onToggleSize}
        panelExpanded={props.panelExpanded}
      />
      {props.children}
    </>
  );
}

Panel.propTypes = {
  title: PropTypes.string.isRequired,
  onToggleSize: PropTypes.func.isRequired,
  panelExpanded: PropTypes.bool.isRequired,
  children: PropTypes.object
};
