import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import logo2 from '../assets/images/logo2.svg'
import Zoom from 'react-reveal/Zoom';
const Services = () => {
    const { t, i18n } = useTranslation();
    return (
        <Box sx={{ background: '#1f2623', color: '#fff', padding: { xs: '50px', md: '80px' } }}>
            <Box id="services" sx={{ height: '200px', mt: '-200px' }}></Box>
            <Zoom duration={1000}>
                <Typography className="app" sx={{
                    fontSize: '20px',
                    fontStyle: 'italic',
                    color: '#fff',
                    textAlign: 'center',
                    margin: '0 auto 50px',

                }}>{t('OurServices')}
                </Typography>
                <Typography className="app" sx={{
                    fontSize: '18px',
                    fontWeight: '700',
                    textAlign: 'left',
                }}>{t('KaymiteAccompanies')}
                </Typography>
                <Grid spacing={4} container sx={{ width: { xs: '100%', md: '95%' }, margin: 'auto  0px' }}>
                    <Grid item xs={12} md={6}>
                        <Typography className="app" sx={{
                            fontSize: '22px',
                            textTransform: 'uppercase',
                            fontWeight: '700',
                            color: '#a6296e',
                            textAlign: 'left',
                            mb: '10px'
                        }}>{t('strategy')}
                        </Typography>
                        <Typography className="app" sx={{
                            fontSize: '18px',
                            fontWeight: '700',
                            textAlign: 'left',
                        }}>-{t('strategic')}
                        </Typography>
                        <Typography className="app" sx={{
                            fontSize: '18px',
                            fontWeight: '700',
                            textAlign: 'left',
                        }}>-{t('Corporate')}
                        </Typography>
                        <Typography className="app" sx={{
                            fontSize: '18px',
                            fontWeight: '700',
                            textAlign: 'left',
                        }}>-{t('Policies​')}
                        </Typography>
                        <Typography className="app" sx={{
                            fontSize: '22px',
                            textTransform: 'uppercase',
                            fontWeight: '700',
                            color: '#a6296e',
                            textAlign: 'left',
                            mb: '10px',
                            mt: '20px'
                        }}>{t('TRAINING')}
                        </Typography>
                        <Typography className="app" sx={{
                            fontSize: '18px',
                            fontWeight: '700',
                            textAlign: 'left',
                        }}>-{t('Provisional')}
                        </Typography>
                        <Typography className="app" sx={{
                            fontSize: '18px',
                            fontWeight: '700',
                            textAlign: 'left',
                        }}>-{t('management')}
                        </Typography>
                        <Typography className="app" sx={{
                            fontSize: '18px',
                            fontWeight: '700',
                            textAlign: 'left',
                        }}>-{t('Assessment')}
                        </Typography>
                        <Typography className="app" sx={{
                            fontSize: '18px',
                            fontWeight: '700',
                            textAlign: 'left',
                        }}>-{t('Succession')}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography className="app" sx={{
                            fontSize: '22px',
                            textTransform: 'uppercase',
                            fontWeight: '700',
                            color: '#a6296e',
                            textAlign: 'left',
                            mb: '10px'
                        }}>{t('COMPENSATIONS')}
                        </Typography>
                        <Typography className="app" sx={{
                            fontSize: '18px',
                            fontWeight: '700',
                            textAlign: 'left',
                        }}>-{t('Benefits')}
                        </Typography>
                        <Typography className="app" sx={{
                            fontSize: '22px',
                            textTransform: 'uppercase',
                            fontWeight: '700',
                            color: '#a6296e',
                            textAlign: 'left',
                            mb: '10px',
                            mt: '20px'
                        }}>{t('AUDIT')}
                        </Typography>
                        <Typography className="app" sx={{
                            fontSize: '18px',
                            fontWeight: '700',
                            textAlign: 'left',
                        }}>-{t('mapping')}
                        </Typography>
                        <Typography className="app" sx={{
                            fontSize: '18px',
                            fontWeight: '700',
                            textAlign: 'left',
                        }}>-{t('Procedures')}
                        </Typography>
                    </Grid>
                </Grid>
            </Zoom>
        </Box>
    )
}

export default Services