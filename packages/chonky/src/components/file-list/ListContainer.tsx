/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */

import React, { CSSProperties, useCallback, useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';
import { FixedSizeList } from 'react-window';

import { selectFileListProps, selectFileViewConfig, selectors } from '../../redux/selectors';
import { FileViewMode } from '../../types/file-view.types';
import { useInstanceVariable } from '../../util/hooks-helpers';
import {c, makeLocalChonkyStyles} from '../../util/styles';
import { SmartFileEntry } from './FileEntry';

export interface FileListListProps {
    width: number;
    height: number;
}

export const ListContainer: React.FC<FileListListProps> = React.memo(props => {
    const { width, height } = props;

    const viewConfig = useSelector(selectFileViewConfig);
    const fileListProps = useSelector(selectFileListProps)

    const listRef = useRef<FixedSizeList>();

    const displayFileIds = useSelector(selectors.getDisplayFileIds);
    const displayFileIdsRef = useInstanceVariable(displayFileIds);
    const getItemKey = useCallback(
        (index: number) => displayFileIdsRef.current[index] ?? `loading-file-${index}`,
        [displayFileIdsRef]
    );
    const getFileListProps = () => {
        if (!fileListProps?.space) return fileListProps
        return {
            ...fileListProps,
            itemSize: (fileListProps.itemSize || viewConfig.entryHeight) + fileListProps.space
        }
    }

    const classes = useStyles();
    const listComponent = useMemo(() => {
        // When entry size is null, we use List view
        const rowRenderer = (data: { index: number; style: CSSProperties }) => {
            return (
                <div style={{
                    ...data.style,
                    ...(fileListProps?.space && { height: data.style.height as number - fileListProps.space} ),
                }}>
                    <SmartFileEntry
                        fileId={displayFileIds[data.index] ?? null}
                        displayIndex={data.index}
                        fileViewMode={FileViewMode.List}
                    />
                </div>
            );
        };

        return (
            <FixedSizeList
                ref={listRef as any}
                className={c([classes.listContainer, 'chonky-listContainer'])}
                itemSize={viewConfig.entryHeight}
                height={height}
                itemCount={displayFileIds.length}
                width={width}
                itemKey={getItemKey}
                {...getFileListProps()}
            >
                {rowRenderer}
            </FixedSizeList>
        );
    }, [
        classes.listContainer,
        viewConfig.entryHeight,
        height,
        displayFileIds,
        width,
        getItemKey,
    ]);

    return listComponent;
});

const useStyles = makeLocalChonkyStyles(theme => ({
    listContainer: {
        borderTop: `solid 1px ${theme.palette.divider}`,
    },
}));
