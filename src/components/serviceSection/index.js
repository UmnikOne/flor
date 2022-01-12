import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'

const ServiceSection = () => {
    const { t, i18n } = useTranslation();
    return (
        <Box id="service" sx={{ background: '#1f2623', color: '#fff', padding: { xs: '50px', md: '80px' }, pt:{xs: '50px', md: '150px'} }}>
            <Typography className="app" sx={{ fontSize: { xs: '40px', md: '80px' }, fontWeight: '700', mb: '50px' }}>{t('services')}</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <img width="100%" src={img1} />
                    <Typography className="app" sx={{ fontWeight: '700', mt: '10px' }}>{t('strategy')}</Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    <img width="100%" src={img2} />
                    <Typography className="app" sx={{ fontWeight: '700', mt: '10px' }}>{t('Training')}</Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    <img width="100%" src={img2} />
                    <Typography className="app" sx={{ fontWeight: '700', mt: '10px' }}>{t('Compensation')}</Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    <img width="100%" src={img1} />
                    <Typography className="app" sx={{ fontWeight: '700', mt: '10px' }}>{t('Process')}</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ServiceSection