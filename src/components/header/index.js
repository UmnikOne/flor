import React from 'react'
import { Grid, Box, Link, Popover } from '@mui/material';
import { useTranslation, changeLanguage } from 'react-i18next';
import logo from '../assets/images/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
const Header = () => {
    const { t, i18n } = useTranslation();
    const changeLang = (e) => {
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
    return (
        <Box>
            <Grid container sx={{
                background: '#1f2623',
                color: '#fff',
                padding: '15px',
                borderBottom: '0.5px solid #fff',
            }} justifyContent="space-between" >
                <Grid item xs={3}>
                    <img width="50px" src={logo} />
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        <Link href="/#home" sx={{ padding: '0px 20px', color: '#fff', textDecoration: 'none' }}>
                            {t('home')}
                        </Link>
                        <Link href="/#service" sx={{ padding: '0px 20px', color: '#fff', textDecoration: 'none' }}>
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
                    <select onChange={changeLang}>
                        <option value="en">en</option>
                        <option value="fr">fr</option>
                    </select>
                </Grid>
            </Grid>
        </Box >
    )
}

export default Header