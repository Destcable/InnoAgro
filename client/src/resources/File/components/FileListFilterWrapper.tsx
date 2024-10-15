import { Card, CardContent } from '@mui/material';
import { FC, ReactNode } from 'react';

interface FileListFilterWrapperProps {
    children?: ReactNode
}

export const FileListFilterWrapper: FC<FileListFilterWrapperProps> = ({
    children
}) => (
    <Card sx={{ order: -1, mr: 2, mt: 6, width: 300 }}>
        <CardContent>
            {children}
        </CardContent>
    </Card>
);