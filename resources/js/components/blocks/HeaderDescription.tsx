import { type BlockProps } from '@/types/statamic';
import React from 'react';
import NotificationBanner from '../sections/NotificationBanner';
import Certification from '../layout/Certification';
import HeroSection from '../sections/HeroSection';
import MainContentSection from '../sections/MainContentSection';
import WhyChooseUs from '../sections/WhyChooseUs';
import OurFeatures from '../sections/OurFeatures';
import IntegrationsSection from '../sections/IntegrationsSection';
import Overview from '../sections/Overview';
import FAQSection from '../sections/FAQSection';
import TransformBrowser from '../sections/TransformBrowser';
// import Partners from '../sections/Partners';

const HeaderDescription = ({
    block,
    header,
    description,
    ...props
}: BlockProps) => {
    // Debug logging to console
    React.useEffect(() => {
        if (import.meta.env.DEV) {
            console.log('🧩 HeaderDescription Block:', {
                block,
                header,
                description,
                ...props,
            });
        }
    }, [block, header, description, props]);

    return (
        <>
            <NotificationBanner />
            <HeroSection />
            <MainContentSection />
            {/* <Partners /> */}
            <Certification />
            <WhyChooseUs />
            <OurFeatures />
            <IntegrationsSection />
            <Overview />
            <FAQSection />
            <TransformBrowser />
        </>
    );
};

export default HeaderDescription;
