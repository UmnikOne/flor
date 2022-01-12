import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t, i18n } = useTranslation();
    return (
        <Box sx={{ background: '#1f2623', color: '#fff', padding: { xs: '50px', md: '80px' }, textAlign: 'center' }}>
            <Typography className="app" sx={{ fontWeight: '700', mt: '10px' }}>Сompany description</Typography>
        </Box>
    )
}

export default Footer