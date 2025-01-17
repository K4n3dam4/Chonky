/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */

import React, {CSSProperties, ReactElement, useContext} from 'react';
import { useIntl } from 'react-intl';

import { ChonkyIconName } from '../../types/icons.types';
import { getI18nId, I18nNamespace } from '../../util/i18n';
import { ChonkyIconContext } from '../../util/icon-helper';
import { makeGlobalChonkyStyles } from '../../util/styles';
import {Nullable} from "tsdef";

export interface FileListEmptyProps {
    width: number;
    height: number;
    emptyState?: Nullable<ReactElement | JSX.Element>
}

export const FileListEmpty: React.FC<FileListEmptyProps> = props => {
    const { width, height, emptyState } = props;
    const classes = useStyles();
    const ChonkyIcon = useContext(ChonkyIconContext);
    const style: CSSProperties = {
        width,
        height,
    };

    const intl = useIntl();
    const emptyString = intl.formatMessage({
        id: getI18nId(I18nNamespace.FileList, 'nothingToShow'),
        defaultMessage: 'Nothing to show',
    });

    return (
        <div id='chonky-fileListEmpty' className={classes.fileListEmpty} style={style}>
            {emptyState ||
                <div id='chonky-fileListEmptyContent' className={classes.fileListEmptyContent}>
                    <ChonkyIcon icon={ChonkyIconName.folderOpen}/>
                    &nbsp; {emptyString}
                </div>
            }
        </div>
    );
};

const useStyles = makeGlobalChonkyStyles(theme => ({
    fileListEmpty: {
        color: theme.palette.text.disabled,
        position: 'relative',
        textAlign: 'center',
        fontSize: '1.2em',
    },
    fileListEmptyContent: {
        transform: 'translateX(-50%) translateY(-50%)',
        position: 'absolute',
        left: '50%',
        top: '50%',
    },
}));
