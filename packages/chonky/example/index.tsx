import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FileArray, FullFileBrowser } from '../.';

const App = () => {
    const testFiles: FileArray = [
        {id: 'wedewomdoiedmed', name: 'Datei1', isDir: false, descr: 'Hier steht eine Beschreibung', ext: 'jpg'},
        {id: 'wedewomdoiedeedeweddmed', name: 'Datei2', isDir: false, type: 'MEDIA', ext: 'jpg'},
        {id: 'tesxhbcdovj', name: 'Datei3', isDir: false, type: 'MEDIA', ext: 'jpg'}
    ]
  return (
    <div style={{ height: 400 }}>
      <FullFileBrowser entryHeightOverride={50} disableSelection files={testFiles} displayCustomFileData={['descr', 'type']} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
