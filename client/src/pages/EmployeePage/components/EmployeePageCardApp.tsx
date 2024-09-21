import { FC, ReactNode } from 'react';
import { Typography, Card, CardContent } from '@mui/material';

interface EmployeePageCardAppProps {
    title?: string
    icon?: ReactNode
    onClick?: () => void
}

export const EmployeePageCardApp: FC<EmployeePageCardAppProps> = ({
    title,
    icon,
    onClick,
}) => (
    <Card 
        onClick={onClick} 
        sx={{ width: 200, textAlign: 'center', padding: 2, boxShadow: 'none', border: '1px solid #e0e0e0', borderRadius: '10px', cursor: 'pointer' }}
    >
        <CardContent>
            {icon}
            <Typography variant="body1" sx={{ marginTop: 2, color: '#666' }}>
                {title}
            </Typography>
        </CardContent>
    </Card>
);