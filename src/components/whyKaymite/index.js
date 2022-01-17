import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import logo2 from '../assets/images/logo2.svg'
import Zoom from 'react-reveal/Zoom';
const WhyKaymite = () => {
    const { t, i18n } = useTranslation();
    return (
        <Box  sx={{ background: '#1f2623', color: '#fff', padding: { xs: '50px', md: '80px' } }}>
            <Box id="whyKaymite" sx={{ height: '200px', mt: '-200px' }}></Box>
            <Zoom>
                <Typography className="app" sx={{
                    fontSize: '20px',
                    fontStyle: 'italic',
                    color: '#fff',
                    textAlign: 'center',
                    margin: '0 auto 50px'
                }}>{t('PourquoiKaymite')}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img width="100px" src={logo2} />
                    <Typography className="app" sx={{
                        fontSize: '18px',
                        fontWeight: '700',
                        color: '#fff',
                        textAlign: 'left',
                        ml: '-50px'
                    }}>{t('businessIssues')}</Typography>
                </Box>
                <Box mt={3} sx={{ display: 'flex', alignItems: 'center' }}>
                    <img width="100px" src={logo2} />
                    <Typography className="app" sx={{
                        fontSize: '18px',
                        fontWeight: '700',
                        color: '#fff',
                        textAlign: 'left',
                        ml: '-50px'
                    }}>{t('practicesAllowing')}</Typography>
                </Box>
                <Box mt={3} sx={{ display: 'flex', alignItems: 'center' }}>
                    <img width="100px" src={logo2} />
                    <Typography className="app" sx={{
                        fontSize: '18px',
                        fontWeight: '700',
                        color: '#fff',
                        textAlign: 'left',
                        ml: '-50px'
                    }}>{t('OurAbility')}</Typography>
                </Box>
                <Typography className="app" sx={{
                    fontSize: '18px',
                    color: '#a6296e',
                    textAlign: 'center',
                    margin: '50px auto 50px'
                }}>{t('WithKaymite')}</Typography>
            </Zoom>
        </Box>
    )
}

export default WhyKaymite