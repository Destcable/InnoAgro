import { FC, ReactNode } from 'react';
import { Box } from '@mui/material';

interface EmployeePageTabWrapperProps { 
    children?: ReactNode
}

export const EmployeePageTabWrapper: FC<EmployeePageTabWrapperProps> = ({ 
    children
}) => (
    <Box display="flex" justifyContent="center" gap={3} alignItems="center" sx={{ mt: 4 }}>
        {children}
    </Box>
);