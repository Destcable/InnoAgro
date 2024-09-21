import { AppBar, Tabs, Tab, Typography, Box, Toolbar } from '@mui/material';
import { Dispatch, FC, SetStateAction } from 'react';
import { Translate } from 'react-admin';

interface EmployeePageListAppBarProps { 
    tab: number,
    setTab: Dispatch<SetStateAction<number>>,
    translate: Translate
}

export const EmployeePageListAppBar: FC<EmployeePageListAppBarProps> = ({ 
    tab,
    setTab,
    translate
}) => (
    <AppBar position="static" color="default" sx={{ backgroundColor: '#eff4f9', boxShadow: 'none', paddingTop: 2 }}>
    <Toolbar>
        <Box display="flex" flexDirection="column" alignItems="flex-start" width="100%">
            <Typography variant="h5" component="div" sx={{ color: '#333', marginBottom: 0.7 }}>
                {translate('employee_page.title')}
            </Typography>
            <Typography variant="body2" sx={{ color: '#666' }}>
                {translate('employee_page.description')}
            </Typography>
        </Box>
    </Toolbar>
    <Tabs value={tab} indicatorColor="primary" textColor="primary" sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tab label={translate('employee_page.tab.all.title')} onClick={() => setTab(0)} />
        <Tab label={translate('employee_page.tab.dictionaries.title')} onClick={() => setTab(1)} />
    </Tabs>
</AppBar>
);