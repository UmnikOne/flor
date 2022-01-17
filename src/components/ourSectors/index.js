import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import img3 from '../assets/images/img3.jpg'
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import Zoom from 'react-reveal/Zoom';
const OurSectors = () => {
    const { t, i18n } = useTranslation();
    return (
        <Box  sx={{ background: '#1f2623', color: '#fff', padding: { xs: '50px', md: '80px' } }}>
            <Zoom>
            <Box id="ourSectors" sx={{height: '200px', mt: '-200px'}}></Box>
                <Typography className="app" sx={{
                    fontSize: '20px',
                    fontStyle: 'italic',
                    color: '#fff',
                    textAlign: 'center',
                    margin: '0 auto 50px'
                }}>{t('intervention')}
                </Typography>
                {/* <Grid container alignItems="center" spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography className="app" sx={{
                        fontSize: '18px',
                        fontWeight: '700',
                        textAlign: 'left',
                    }}>-&nbsp;&nbsp;{t('Food')}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img width="50%" src={img3} />
                </Grid>
            </Grid>
            <Grid mt={2} container alignItems="center" spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography className="app" sx={{
                        fontSize: '18px',
                        fontWeight: '700',
                        textAlign: 'left',
                    }}>-&nbsp;&nbsp;{t('Food')}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img width="50%" src={img3} />
                </Grid>
            </Grid>
            <Grid mt={2} container alignItems="center" spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography className="app" sx={{
                        fontSize: '18px',
                        fontWeight: '700',
                        textAlign: 'left',
                    }}>-&nbsp;&nbsp;{t('Food')}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img width="50%" src={img3} />
                </Grid>
            </Grid> */}
                <Grid container spacing={8}>
                    <Grid item xs={12} md={4} sx={{ cursor: 'pointer' }}>
                        <img width="100%" src={img1} />
                        <Typography className="app" sx={{ fontWeight: '700', fontSize: '18px', mt: '10px' }}>{t('Food')}</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ cursor: 'pointer' }}>
                        <img width="100%" src={img2} />
                        <Typography className="app" sx={{ fontWeight: '700', fontSize: '18px', mt: '10px' }}>{t('Insurance')}</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ cursor: 'pointer' }}>
                        <img width="100%" src={img3} />
                        <Typography className="app" sx={{ fontWeight: '700', fontSize: '18px', mt: '10px' }}>{t('Energy')}</Typography>
                    </Grid>
                </Grid>
                <Grid mt={1} container spacing={8}>
                    <Grid item xs={12} md={4} sx={{ cursor: 'pointer' }}>
                        <img width="100%" src={img1} />
                        <Typography className="app" sx={{ fontWeight: '700', fontSize: '18px', mt: '10px' }}>{t('Industry')}</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ cursor: 'pointer' }}>
                        <img width="100%" src={img2} />
                        <Typography className="app" sx={{ fontWeight: '700', fontSize: '18px', mt: '10px' }}>{t('Media')}</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ cursor: 'pointer' }}>
                        <img width="100%" src={img3} />
                        <Typography className="app" sx={{ fontWeight: '700', fontSize: '18px', mt: '10px' }}>{t('Public')}</Typography>
                    </Grid>
                </Grid>
            </Zoom>
        </Box>
    )
}

export default OurSectors