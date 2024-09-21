import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FC, ReactNode } from 'react';

interface EmployeeCreateAccordionFieldProps { 
    title: string
    children?: ReactNode
    defaultExpanded?: boolean
}

export const EmployeeCreateAccordionField: FC<EmployeeCreateAccordionFieldProps> = ({ 
    title,
    children,
    defaultExpanded = false,
}) => (
    <Accordion defaultExpanded={defaultExpanded} sx={{ width: '100%'}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            {title}
        </AccordionSummary>
        <AccordionDetails>
            {children}
        </AccordionDetails>
    </Accordion>
);