import React from 'react'
import { Box, Grid, Typography, TextField, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import img5 from '../assets/images/img5.jpg'
import img6 from '../assets/images/img6.jpg'
import img7 from '../assets/images/img7.jpg'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/bootstrap.css'
import Zoom from 'react-reveal/Zoom';
const ContactSection = () => {
    const { t, i18n } = useTranslation();
    const [email, setEmail] = React.useState('')
    const [title, setTitle] = React.useState('')
    const [name, setName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [phoneNumber, setPhoneNumber] = React.useState('')
    const [company, setCompany] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [err, setErr] = React.useState(false)
    const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    const handleSubmit = () => {
        if (!re.test(String(email).toLowerCase())) {
            setErr(true)
        } else {
            setErr(false)
        }
    }
    return (

        <Box id="contact" sx={{ background: '#1f2623', color: '#fff', padding: { xs: '50px', md: '80px' } }}>
            <Zoom>
                <Typography className="app" sx={{ fontSize: { xs: '40px', md: '80px' }, fontWeight: '700', mb: '50px' }}>{t('contact')}</Typography>
                {/* <Grid container spacing={10}>
                <Grid item xs={12} md={4}>
                    <img width="100%" height="80%" src={img5} />
                    <Typography className="app" sx={{ fontWeight: '700', mt: '10px' }}>{t('Food')}</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <img width="100%" height="80%" src={img6} />
                    <Typography className="app" sx={{ fontWeight: '700', mt: '10px' }}>{t('Insurance')}</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <img width="100%" height="80%" src={img7} />
                    <Typography className="app" sx={{ fontWeight: '700', mt: '10px' }}>{t('Energy')}</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <img width="100%" height="80%" src={img5} />
                    <Typography className="app" sx={{ fontWeight: '700', mt: '10px' }}>{t('Industry')}</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <img width="100%" height="80%" src={img6} />
                    <Typography className="app" sx={{ fontWeight: '700', mt: '10px' }}>{t('Media')}</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <img width="100%" height="80%" src={img7} />
                    <Typography className="app" sx={{ fontWeight: '700', mt: '10px' }}>{t('Public')}</Typography>
                </Grid>
            </Grid> */}
                <Grid container alignItems="center">
                    <Grid item container xs={12} md={6} spacing={1}>
                        <Grid item xs={12} md={5} sx={{ padding: { xs: '0px', md: '20px' } }}>
                            <Box sx={{ width: { xs: '93%', md: '100%' } }}>
                                <input value={lastName} onChange={e => setLastName(e.target.value)} className="inputForm fontPlaceholder" type="text" name="lastName" placeholder={t('LastName')} />
                            </Box>
                        </Grid>
                        <Grid sx={{ padding: { xs: '0px', md: '20px' } }} item xs={12} md={5}>
                            <Box sx={{ width: { xs: '93%', md: '100%' } }}>
                                <input value={name} onChange={e => setName(e.target.value)} className="inputForm fontPlaceholder" type="text" name="name" placeholder={t('Name')} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={5} sx={{ padding: { xs: '0px', md: '20px' }, mt: { xs: '0px', md: '-15px' } }}>
                            <Box sx={{ width: { xs: '93%', md: '100%' } }}>
                                <input value={company} onChange={e => setCompany(e.target.value)} className="inputForm fontPlaceholder" type="text" name="country" placeholder={t('Company')} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={5} sx={{ padding: { xs: '0px', md: '0px' }, mt: { xs: '0px', md: '-15px' } }}>
                            <Box sx={{ width: { xs: '93%', md: '100%' } }}>
                                <PhoneInput
                                    country={'fr'}
                                    value={phoneNumber}
                                    onChange={e => setPhoneNumber(e)}
                                    name="phoneNumber"
                                    inputClass='containerInput'
                                    dropdownClass="btnDropdown"
                                />
                            </Box>
                        </Grid>
                        <Grid sx={{ padding: { xs: '0px', md: '20px' }, mt: { xs: '0px', md: '-15px' } }} item xs={12} md={5}>
                            <Box sx={{ width: { xs: '93%', md: '100%' } }}>
                                <input value={email} onChange={e => setEmail(e.target.value)} className="inputForm fontPlaceholder" type="text" name="email" placeholder={t('email')} />
                            </Box>
                            {err &&
                                <Typography className="app" sx={{ fontWeight: '700', mt: '10px', color: '#a6296e' }}>{t('email')}</Typography>
                            }
                        </Grid>
                        <Grid sx={{ padding: { xs: '0px', md: '20px' }, mt: { xs: '0px', md: '-15px' } }} item xs={12} md={5}>
                            <Box sx={{ width: { xs: '93%', md: '100%' } }}>
                                <input value={title} onChange={e => setTitle(e.target.value)} className="inputForm fontPlaceholder" type="text" name="email" placeholder={t('title')} />
                            </Box>
                        </Grid>
                        <Grid sx={{ padding: { xs: '0px', md: '20px' }, mt: { xs: '0px', md: '-15px' } }} item xs={12} md={10}>
                            <Box>
                                <textarea value={description} onChange={e => setDescription(e.target.value)} rows='5' className="inputForm fontPlaceholder widthTextArea" type="text" name="description" placeholder={t('description')}></textarea>
                            </Box>
                            <Button className="app" sx={{ background: '#a6296e', color: '#fff', width: { xs: '100%', md: '20%' }, mt: '20px' }} onClick={handleSubmit}>{t('Send')}</Button>
                        </Grid>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ color: '#fff', padding: { xs: '50px', md: '80px' }, textAlign: 'center' }}>
                            <Typography className="app" sx={{ fontWeight: '700' }}>Сompany description</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Zoom>
        </Box >

    )
}

export default ContactSection