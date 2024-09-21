import { useNavigate } from 'react-router';
import Button from '@mui/material/Button';
import ArrowBack from '@mui/icons-material/ArrowBack';

export const BackButton = () => {
    const navigate = useNavigate();

    const handleClick = () => navigate(-1);

    return <Button
        startIcon={<ArrowBack />}
        color="primary"
        onClick={handleClick}
    >
        Назад
    </Button>
};