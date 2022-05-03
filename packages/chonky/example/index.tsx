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
        {id: 'wedewomdoiedmed', name: 'Datei1.jpg', isDir: true, descr: 'Hier steht eine Beschreibung', childrenCount: 10},
        {id: 'wedewomdoiedeedeweddmed', name: 'Datei2.jpg', isDir: false, type: 'MEDIA', ext: '.jpg', color: '#473E7D'},
        {id: 'tesxhbcdovjewfefrgewfgfe', name: 'Datei4.jpg', isDir: false, type: 'MEDIA', ext: '.jpg'},
        {id: 'tesxhbcewfewfewfdovjwfefefe', name: 'Datei5.jpg', isDir: false, type: 'MEDIA', ext: '.jpg'},
        {id: 'tesxhbcdovjfewfewfefwefefewffew', name: 'Datei6.jpg', isDir: false, type: 'MEDIA', ext: '.jpg'},
        {id: 'tesxhbcdovjefwefefwefefefefefwfewx', name: 'Datei7.jpg', isDir: false, type: 'MEDIA', ext: '.jpg'},
        {id: 'tesxhbcdovjiomocmoicmdsiomcidmdismi', name: 'Datei8.to.send.wmv', isDir: false, type: 'MEDIA', ext: '.wmv', hideExt: true},
        {id: 'tesxhbcdovjcdsodsm,ocmdocmdomcodmcoc', name: 'Datei9.jpg.png', isDir: false, type: 'MEDIA'},
        {id: 'tesxhbcdovjdlc,ocd,oc,odc,docodmcodmc', name: 'Datei10.jpg', isDir: false, type: 'MEDIA', ext: '.jpg'},
        {id: 'tesxhbcdovjdps,odcodmcomddsoosddocmckk', name: 'Datei11.jpg', isDir: false, type: 'MEDIA', ext: '.jpg'},
        {id: 'tesxhbcdovjdps,odcodmcomddsoosdddwqdocmckk', name: 'Datei12.jpg', isDir: false, type: 'MEDIA', ext: '.jpg'},
        {id: 'tesxhbcdovjdps,odcodmcomddsoosdwdqdwdocmckk', name: 'Datei13.jpg', isDir: false, type: 'MEDIA', ext: '.jpg'},
        {id: 'tesxhbcdovjdps,odcodmcomddsoosddddddocmckk', name: 'Datei14.jpg', isDir: false, type: 'MEDIA', ext: '.jpg'},
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

    const disableActions = [
        // ChonkyActions.SelectAllFiles.id,
        // ChonkyActions.OpenSelection.id,
    ]

    return (
    <div style={{ height: 400 }}>
      <FullFileBrowser openFilesOnSingleClick onFileAction={handleAction} fileActions={fileActionsLibrary} listViewProps={{itemSize: 70, space: 10}} disableDefaultFileActions={disableActions} defaultFileViewActionId={ChonkyActions.EnableListView.id} files={testFiles} displayCustomFileData={['descr', 'type']} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
