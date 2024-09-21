import { useState } from "react";
import { EmployeePageListAppBar } from "./EmployeePageListAppBar";
// import CubeIcon from '@mui/icons-material/Category';
import PersonIcon from '@mui/icons-material/Person';
import VpnKeyOffIcon from '@mui/icons-material/VpnKeyOff';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import StorageIcon from '@mui/icons-material/Storage';
import { useRedirect, useTranslate } from "react-admin";
import { EmployeePageCardApp } from "./components/EmployeePageCardApp";
import { EmployeePageTabWrapper } from "./components/EmployeePageTabWrapper";

const EmployeePageList = () => {
    const [tab, setTab] = useState<number>(0);
    const redirect = useRedirect();
    const translate = useTranslate();


    return (
        <>
            <EmployeePageListAppBar
                tab={tab}
                setTab={setTab}
                translate={translate}
            />

            {tab === 0 && <EmployeePageTabWrapper>
                <EmployeePageCardApp
                    title={translate('resources.Employee.name')}
                    icon={<PersonIcon sx={{ fontSize: 50, color: '#b0b0b0' }} />}
                    onClick={() => redirect('/Employee')}
                />
                <EmployeePageCardApp
                    title={translate('resources.EmployeeRole.name')}
                    icon={<VpnKeyOffIcon sx={{ fontSize: 50, color: '#b0b0b0' }} />}
                    onClick={() => redirect('/EmployeeRole')}
                />
                <EmployeePageCardApp
                    title={translate('resources.EmployeePosition.name')}
                    icon={<TrendingUpIcon sx={{ fontSize: 50, color: '#b0b0b0' }} />}
                    onClick={() => redirect('/EmployeePosition')}
                />
                <EmployeePageCardApp
                    title={translate('resources.EmployeeSchedule.name')}
                    icon={<CalendarMonthIcon sx={{ fontSize: 50, color: '#b0b0b0' }} />}
                    onClick={() => redirect('/EmployeeSchedule')}
                />
            </EmployeePageTabWrapper>
            }

            {tab === 1 && <EmployeePageTabWrapper>
                <EmployeePageCardApp
                    title={translate('resources.EmployeeRole.name')}
                    icon={<VpnKeyOffIcon sx={{ fontSize: 50, color: '#b0b0b0' }} />}
                    onClick={() => redirect('/EmployeeRole')}
                />
                <EmployeePageCardApp
                    title={translate('resources.EmployeePosition.name')}
                    icon={<TrendingUpIcon sx={{ fontSize: 50, color: '#b0b0b0' }} />}
                    onClick={() => redirect('/EmployeePosition')}
                />
                <EmployeePageCardApp
                    title={translate('resources.EmployeeSchedule.name')}
                    icon={<CalendarMonthIcon sx={{ fontSize: 50, color: '#b0b0b0' }} />}
                    onClick={() => redirect('/EmployeeSchedule')}
                />
            </EmployeePageTabWrapper>
            }
        </>
    )
};

export default EmployeePageList;