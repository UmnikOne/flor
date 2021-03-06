import React from 'react'
import { Grid, Box, Link, Popover, FormControlLabel, Radio, Typography, RadioGroup } from '@mui/material';
import { useTranslation, changeLanguage } from 'react-i18next';
import logo from '../assets/images/logo.svg'
import logo2 from '../assets/images/logo2.svg'
import MenuIcon from '@mui/icons-material/Menu';
import CheckIcon from '@mui/icons-material/Check';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Header = () => {
    const { t, i18n } = useTranslation();
    const [lang, setLang] = React.useState('en');
    const changeLang = (e) => {
        console.log(e)
        setLang(e.target.value)
        i18n.changeLanguage(e.target.value)
    }
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const [anchorElLang, setAnchorElLang] = React.useState(null);

    const handleClickLang = (event) => {
        setAnchorElLang(event.currentTarget);
    };

    const handleCloseLang = () => {
        setAnchorElLang(null);
    };

    const openLang = Boolean(anchorElLang);
    const idLang = openLang ? 'simple-popover' : undefined;
    return (
        <Box sx={{fontFamily: "Karla', sans-serif"}}>
            <Grid container sx={{
                background: '#1f2623',
                color: '#fff',
                padding: '15px',
                borderBottom: '0.5px solid #fff',
                position: 'fixed',
                top: '0px',
                zIndex: 100
            }} justifyContent="space-between" alignItems='center' >
                <Grid item xs={3}>
                    <Box><img width="50px" src={logo} /></Box>
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', fontSize: '20px' }}>
                        <Link href="/#home" sx={{ padding: '0px 20px', color: '#fff', textDecoration: 'none' }}>
                            {t('home')}
                        </Link>
                        <Link href="/#services" sx={{ padding: '0px 20px', color: '#fff', textDecoration: 'none' }}>
                            {t('services')}
                        </Link>
                        <Link href="/#contact" sx={{ padding: '0px 20px', color: '#fff', textDecoration: 'none' }}>
                            {t('contact')}
                        </Link>
                    </Box>
                    <Box sx={{ display: { xs: 'block', md: 'none' } }} >
                        <Box aria-describedby={id} onClick={handleClick} sx={{ width: '30px', cursor: 'pointer', margin: '0 auto' }}>
                            <MenuIcon sx={{ fontSize: '30px' }} />
                        </Box>
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                        >
                            <Box sx={{ padding: '10px' }}>
                                <Link onClick={handleClose} href="/#home" sx={{ padding: '0px 20px', color: '#000', textDecoration: 'none' }}>
                                    {t('home')}
                                </Link><br />
                                <Link onClick={handleClose} href="/#service" sx={{ padding: '0px 20px', color: '#000', textDecoration: 'none' }}>
                                    {t('services')}
                                </Link><br />
                                <Link onClick={handleClose} href="/#contact" sx={{ padding: '0px 20px', color: '#000', textDecoration: 'none' }}>
                                    {t('contact')}
                                </Link>
                            </Box>
                        </Popover>
                    </Box>
                </Grid>
                <Grid item xs={3} sx={{ display: 'flex', justifyContent: "flex-end" }}>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                        aria-describedby={idLang}
                        onClick={handleClickLang}>
                        <Typography className="app" sx={{ fontSize: '15px', lineHeight: '30px', color: '#fff', mr: '2px', textTransform: 'uppercase', fontSize: '20px' }}>
                            {lang}
                        </Typography>
                        <KeyboardArrowDownIcon sx={{ fontSize: '30px' }} />
                    </Box>
                    <Popover
                        sx={{ zIndex: '2222222', '.MuiPopover-paper': { boxShadow: '0px 10px 100px rgba(80, 88, 100, 0.07)', borderRadius: '20px', } }}
                        id={idLang}
                        open={openLang}
                        anchorEl={anchorElLang}
                        onClose={handleCloseLang}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                    >
                        <Box sx={{ padding: '15px', }}>
                            <RadioGroup value={lang} onChange={(e) => {
                                changeLang(e)
                                setAnchorElLang(null)
                            }}
                                aria-label="position" name="position" defaultValue="top" sx={{ display: 'flex', alignItems: 'start' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px 0px' }}>
                                    <FormControlLabel
                                        className='app'
                                        sx={{ '.MuiFormControlLabel-label': { color: lang === 'fr' ? '#a6296e' : '' } }}
                                        value="top"
                                        control={<Radio value="fr" sx={{ display: 'none' }} />}
                                        label="Fran??ais"
                                        labelPlacement="start"
                                    />
                                    {lang === 'fr' && <CheckIcon sx={{ fill: '#a6296e', ml: '30px' }} />}
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px 0px' }}>
                                    <FormControlLabel
                                        className='app'
                                        sx={{ '.MuiFormControlLabel-label': { color: lang === 'en' ? '#a6296e' : '' } }}
                                        value="start"
                                        control={<Radio value="en" sx={{ display: 'none' }} />}
                                        label="English"
                                        labelPlacement="start"
                                    />
                                    {lang === 'en' && <CheckIcon sx={{ fill: '#a6296e', ml: '30px' }} />}
                                </Box>
                            </RadioGroup>
                        </Box>
                    </Popover>
                </Grid>
            </Grid>
        </Box >
    )
}

export default Header