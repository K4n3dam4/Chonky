import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FileArray, FullFileBrowser } from '../.';

const App = () => {
    const testFiles: FileArray = [
        {id: 'wedewomdoiedmed', name: 'Datei1', isDir: true, descr: 'Hier steht eine Beschreibung'},
        {id: 'wedewomdoiedeedeweddmed', name: 'Datei2', isDir: false, type: 'MEDIA', ext: 'jpg'},
        {id: 'tesxhbcdovjewfefrgewfgfe', name: 'Datei4', isDir: false, type: 'MEDIA', ext: 'jpg'},
        {id: 'tesxhbcewfewfewfdovjwfefefe', name: 'Datei5', isDir: false, type: 'MEDIA', ext: 'jpg'},
        {id: 'tesxhbcdovjfewfewfefwefefewffew', name: 'Datei6', isDir: false, type: 'MEDIA', ext: 'jpg'},
        {id: 'tesxhbcdovjefwefefwefefefefefwfewx', name: 'Datei7', isDir: false, type: 'MEDIA', ext: 'jpg'},
        {id: 'tesxhbcdovjiomocmoicmdsiomcidmdismi', name: 'Datei8', isDir: false, type: 'MEDIA', ext: 'jpg'},
        {id: 'tesxhbcdovjcdsodsm,ocmdocmdomcodmcoc', name: 'Datei9', isDir: false, type: 'MEDIA', ext: 'jpg'},
        {id: 'tesxhbcdovjdlc,ocd,oc,odc,docodmcodmc', name: 'Datei10', isDir: false, type: 'MEDIA', ext: 'jpg'},
        {id: 'tesxhbcdovjdps,odcodmcomddsoosddocmckk', name: 'Datei11', isDir: false, type: 'MEDIA', ext: 'jpg'},
        {id: 'tesxhbcdovjdps,odcodmcomddsoosdddwqdocmckk', name: 'Datei12', isDir: false, type: 'MEDIA', ext: 'jpg'},
        {id: 'tesxhbcdovjdps,odcodmcomddsoosdwdqdwdocmckk', name: 'Datei13', isDir: false, type: 'MEDIA', ext: 'jpg'},
        {id: 'tesxhbcdovjdps,odcodmcomddsoosddddddocmckk', name: 'Datei14', isDir: false, type: 'MEDIA', ext: 'jpg'},
    ]
  return (
    <div style={{ height: 400 }}>
      <FullFileBrowser listViewProps={{overscanCount: 4, itemSize: 70, space: 10}} disableSelection files={testFiles} displayCustomFileData={['descr', 'type']} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
