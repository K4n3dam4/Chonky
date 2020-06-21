import React, { useContext, useRef } from 'react';
import { AutoSizer, Grid } from 'react-virtualized';

import { ChonkyFileEntrySizeContext, ChonkyFilesContext } from '../../util/context';
import { Logger } from '../../util/logger';
import { ErrorMessage } from '../internal/ErrorMessage';
import { useEntryRenderer, useGridRenderer } from './FileList-virtualization';

export interface FileListProps {}

export const FileList: React.FC<FileListProps> = React.memo(() => {
    const files = useContext(ChonkyFilesContext);
    const entrySize = useContext(ChonkyFileEntrySizeContext);

    const entryRenderer = useEntryRenderer(files);

    // Thumbs grid ref is not used at the moment but will be necessary later. It is
    // used to recompute the height of rows in the `List` from `react-virtualized`.
    // Consult Chonky v0.x implementation for details.
    const thumbsGridRef = useRef<Grid>();

    // TODO: Read this value from somewhere.
    const fillParentContainer = true;

    const gridRenderer = useGridRenderer(
        files,
        entrySize,
        entryRenderer,
        thumbsGridRef,
        fillParentContainer
    );

    if (!files) {
        const errorMessage =
            `${FileList.name} cannot find the "files" array via React context. This ` +
            `happens when ${FileList.name} is placed outside of "FileBrowser"` +
            `component.`;
        Logger.error(errorMessage);
        return <ErrorMessage message={errorMessage} />;
    }

    return (
        <div className="chonky-file-list" style={{ minHeight: entrySize.height }}>
            <AutoSizer disableHeight={!fillParentContainer}>{gridRenderer}</AutoSizer>
        </div>
    );
});
