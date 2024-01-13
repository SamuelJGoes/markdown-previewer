import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Panel } from './Panel';
import { PreviewPanel } from './PreviewPanel';

import '../styles/styles.scss';

class Panels extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textInput: localStorage.getItem('textInput') || '',
      blankCols: 1,
      editorCols: 5,
      previewCols: 5,
      editorExpanded: false,
      previewExpanded: false
    };
  }

  componentDidMount() {
    if (this.state.textInput === '') {
      fetch('defaultText.md')
        .then((r) => r.text())
        .then((text) => {
          this.setState({ textInput: text });
        });
    }
  }

  onTextInput = (event) => {
    this.setState({
      textInput: event.target.value
    });
    localStorage.setItem('textInput', event.target.value);
  };

  toggleEditorSize = () => {
    this.setState((state) => ({
      editorExpanded: !state.editorExpanded,
      previewExpanded: false,
      blankCols: !state.editorExpanded ? -1 : 1,
      editorCols: state.editorExpanded ? 5 : 9,
      previewCols: state.editorExpanded ? 5 : 3
    }));
  };

  togglePreviewSize = () => {
    this.setState((state) => ({
      editorExpanded: false,
      previewExpanded: !state.previewExpanded,
      blankCols: !state.previewExpanded ? -1 : 1,
      editorCols: state.previewExpanded ? 5 : 3,
      previewCols: state.previewExpanded ? 5 : 9
    }));
  };

  render() {
    const editorTitle = (
      <span>
        <FontAwesomeIcon icon="fa-solid fa-pencil" /> Editor
      </span>
    );

    return (
      <Container fluid>
        <Row>
          <Col sm={this.state.blankCols} />
          <Col sm={this.state.editorCols}>
            <Panel
              title={editorTitle}
              onToggleSize={this.toggleEditorSize}
              panelExpanded={this.state.editorExpanded}>
              <textarea id="editor" onChange={this.onTextInput} value={this.state.textInput} />
            </Panel>
          </Col>
          <Col sm={this.state.previewCols}>
            <PreviewPanel
              onToggleSize={this.togglePreviewSize}
              panelExpanded={this.state.previewExpanded}
              textInput={this.state.textInput}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Panels;
