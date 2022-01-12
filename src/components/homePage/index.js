import React from 'react'
import { Box } from '@mui/material';
import { useTranslation, changeLanguage } from 'react-i18next';
import Header from '../header';
import HomeSection from '../homeSection';
import ServiceSection from '../serviceSection';
import ContactSection from '../contactSection';
import Footer from '../footer';
const HomePage = () => {
    const { t, i18n } = useTranslation();
    const changeLang = (e) => {
        i18n.changeLanguage(e.target.value)
    }
    return (
        <Box>
            <Header />
            <HomeSection />
            <ServiceSection />
            <ContactSection />
            <Footer />
        </Box>
    )
}

export default HomePage