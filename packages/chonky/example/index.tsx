import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    ChonkyActions,
    ChonkyActionUnion, ChonkyIconName,
    defineFileAction, FileAction,
    FileArray,
    FullFileBrowser,
    GenericFileActionHandler
} from '../.';
import {useCallback} from "react";

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

    const CustomActions = {
        TrashFiles: defineFileAction({
            id: 'trashFiles',
            hotkeys: ['ctrl+d'],
            button: {
                name: 'Delete',
                toolbar: false,
                contextMenu: true,
                icon: ChonkyIconName.trash,
            },
        }),
    }

    const customActionTrash = defineFileAction({
        id: 'trashFiles',
        __payloadType: {} as { three: string },
    })

    // Define custom types
    type CustomActionUnion = typeof customActionTrash
    type CustomHandler = GenericFileActionHandler<ChonkyActionUnion | CustomActionUnion>

    // available context actions in library
    const fileActionsLibrary: FileAction[] = [
        CustomActions.TrashFiles,
    ]

    // handles file browser actions
    const handleAction = useCallback<CustomHandler>(
        data => {
            const { selectedFilesForAction } = data.state

            console.log(data)

            // handle action type
            switch (data.id) {
                case CustomActions.TrashFiles.id:
                    break
                default:
            }
        },
        [],
    )

    return (
    <div style={{ height: 400 }}>
      <FullFileBrowser onFileAction={handleAction} fileActions={fileActionsLibrary} listViewProps={{itemSize: 70, space: 10}} disableSelection defaultFileViewActionId={ChonkyActions.EnableListView.id} files={testFiles} displayCustomFileData={['descr', 'type']} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
