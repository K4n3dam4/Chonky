import { Nullable } from 'tsdef';

import { FileData } from './file.types';
import {FixedSizeListProps} from "react-window";

export interface DndEntryState {
    dndIsDragging?: boolean;
    dndIsOver?: boolean;
    dndCanDrop?: boolean;
}

export interface FileEntryProps {
    file: Nullable<FileData>;
    selected: boolean;
    focused: boolean;
    dndState: DndEntryState;
}

export interface FileListProps extends Partial<FixedSizeListProps> {
    space: number
}