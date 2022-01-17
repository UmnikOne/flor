import React from 'react'
import { Box, Grid, Typography, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
import Zoom from 'react-reveal/Zoom';
const ServiceSection = () => {
    const { t, i18n } = useTranslation();
    return (
        <Box id="home" sx={{ background: '#1f2623', color: '#fff', padding: { xs: '50px', md: '80px' }, pt: { xs: '50px', md: '150px' } }}>
            {/* <Typography className="app" sx={{ fontSize: { xs: '40px', md: '80px' }, fontWeight: '700', mb: '50px' }}>{t('services')}</Typography> */}
            <Zoom>
                <Typography className="app" sx={{
                    fontSize: '20px',
                    fontStyle: 'italic',
                    color: '#a6296e',
                    textAlign: 'center',
                    maxWidth: { xs: '100%', md: '70%' },
                    margin: { xs: '100px auto 50px', md: '0 auto 50px' }
                }}>{t('h1homeection')}</Typography>
                <Grid container spacing={8}>
                    <Grid item xs={12} md={4} sx={{ cursor: 'pointer' }}>
                        <Link href="/#whyKaymite" sx={{ color: '#fff', textDecoration: 'none' }}>
                            <img width="100%" src={img1} />
                            <Typography className="app" sx={{ fontWeight: '700', fontSize: '18px', mt: '10px' }}>{t('PourquoiKaymite')}</Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ cursor: 'pointer' }}>
                        <Link href="/#services" sx={{ color: '#fff', textDecoration: 'none' }}>
                            <img width="100%" src={img2} />
                            <Typography className="app" sx={{ fontWeight: '700', fontSize: '18px', mt: '10px' }}>{t('ServicesSecteurs')}</Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ cursor: 'pointer' }}>
                        <Link href="/#ourSectors" sx={{ color: '#fff', textDecoration: 'none' }}>
                            <img width="100%" src={img3} />
                            <Typography className="app" sx={{ fontWeight: '700', fontSize: '18px', mt: '10px' }}>{t('Notrevaleur')}</Typography>
                        </Link>
                    </Grid>
                </Grid>
                <Typography className="app" sx={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: '#fff',
                    textAlign: 'left',
                    margin: '50px auto 0px'
                }}>{t('descriptionHomeSection3')}</Typography>
                <Typography className="app" sx={{
                    fontSize: '18px',
                    fontStyle: 'italic',
                    color: '#a6296e',
                    textAlign: 'left',
                    margin: '0 auto 50px'
                }}>{t('descriptionHomeSection4')}</Typography>
            </Zoom>
        </Box>
    )
}

export default ServiceSection