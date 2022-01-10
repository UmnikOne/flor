import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import imgHomeSection from '../assets/images/imgHomeSection.jpg'

const HomeSection = () => {
    const { t, i18n } = useTranslation();
    return (
        <Grid container sx={{ background: '#1f2623', color: '#fff', padding: '50px' }}>
            <Grid item xs={12} md={7} sx={{ mr: { xs: '0px', md: '50px' }, mt: { xs: '20px', md: '50px' } }}>
                <Typography id="home" sx={{ fontSize: { xs: '40px', md: '80px' }, fontWeight: '700', mb: '50px' }}>{t('headerHomeSection')}</Typography>
                <Typography sx={{ fontWeight: '700', mb: '20px' }}>{t('descriptionHomeSection')}</Typography>
                <Typography sx={{ fontWeight: '700' }}>{t('descriptionHomeSection2')}</Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{mt:{xs: '20px', md: '0px'}}}>
                <img width="100%" src={imgHomeSection} />
            </Grid>
        </Grid>
    )
}

export default HomeSection