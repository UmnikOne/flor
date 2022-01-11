import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import img5 from '../assets/images/img5.jpg'
import img6 from '../assets/images/img6.jpg'
import img7 from '../assets/images/img7.jpg'

const ContactSection = () => {
    const { t, i18n } = useTranslation();
    return (
        <Box id="contact" sx={{ background: '#1f2623', color: '#fff', padding: { xs: '50px', md: '80px' } }}>
            <Typography sx={{ fontSize: { xs: '40px', md: '80px' }, fontWeight: '700', mb: '50px', ml: { xs: '0px', md: '300px' } }}>{t('sector')}</Typography>
            <Grid container spacing={10}>
                <Grid item xs={12} md={4}>
                    <img width="100%" height="80%" src={img5} />
                    <Typography sx={{ fontWeight: '700', mt: '10px' }}>{t('Food')}</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <img width="100%" height="80%" src={img6} />
                    <Typography sx={{ fontWeight: '700', mt: '10px' }}>{t('Insurance')}</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <img width="100%" height="80%" src={img7} />
                    <Typography sx={{ fontWeight: '700', mt: '10px' }}>{t('Energy')}</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <img width="100%" height="80%" src={img5} />
                    <Typography sx={{ fontWeight: '700', mt: '10px' }}>{t('Industry')}</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <img width="100%" height="80%" src={img6} />
                    <Typography sx={{ fontWeight: '700', mt: '10px' }}>{t('Media')}</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <img width="100%" height="80%" src={img7} />
                    <Typography sx={{ fontWeight: '700', mt: '10px' }}>{t('Public')}</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ContactSection