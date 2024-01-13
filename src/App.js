import React from 'react';

import { ThemeContext } from './contexts/ThemeContext';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { Header } from './components/Header';
import Panels from './components/Panels';

import './styles/styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    let initialTheme = 'light';
    const browserDefaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (browserDefaultDark) {
      initialTheme = 'dark';
    }
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      initialTheme = savedTheme;
    }

    this.state = {
      theme: initialTheme
    };

    library.add(fas);
    library.add(fab);
  }

  toggleTheme = () => {
    let newTheme = '';
    if (this.state.theme === 'dark') {
      newTheme = 'light';
    } else {
      newTheme = 'dark';
    }
    localStorage.setItem('theme', newTheme);
    this.setState({ theme: newTheme });
  };

  render() {
    return (
      <>
        <ThemeContext.Provider value={this.state.theme}>
          <div className={`theme-${this.state.theme}`}>
            <div className="main-div">
              <Header
                title="Markdown Previewer"
                toggleTheme={this.toggleTheme}
                theme={this.state.theme}
              />
              <Panels />
            </div>
          </div>
        </ThemeContext.Provider>
      </>
    );
  }
}

export default App;
