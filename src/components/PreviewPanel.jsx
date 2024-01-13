import Markdown from 'marked-react';
import Lowlight from 'react-lowlight';
import javascript from 'highlight.js/lib/languages/javascript';

import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Panel } from './Panel';

import '../styles/styles.scss';
import '../styles/markdown.scss';
import 'highlight.js/styles/github.css';

Lowlight.registerLanguage('js', javascript);

const renderer = {
  code(snippet, lang) {
    return <Lowlight key={this.elementId} language={lang} value={snippet} />;
  }
};

export function PreviewPanel(props) {
  const title = (
    <span>
      <FontAwesomeIcon icon="fa-brands fa-markdown" /> Preview
    </span>
  );

  return (
    <>
      <Panel title={title} onToggleSize={props.onToggleSize} panelExpanded={props.panelExpanded}>
        <div id="preview">
          <Markdown
            openLinksInNewTab={true}
            breaks={true}
            gfm={true}
            value={props.textInput}
            renderer={renderer}
          />
        </div>
      </Panel>
    </>
  );
}

PreviewPanel.propTypes = {
  onToggleSize: PropTypes.func.isRequired,
  panelExpanded: PropTypes.bool.isRequired,
  textInput: PropTypes.string.isRequired
};
