import NotificationBanner from '../sections/NotificationBanner';
import HeroSection from '../sections/HeroSection';
import { type BlockProps } from '@/types/statamic';
// import Partners from '../sections/Partners';

const LandingPage = ({ block, ...props }: BlockProps) => {
    return (
        <>
            <NotificationBanner {...props} />
            <HeroSection {...props} />
        </>
    );
};

export default LandingPage;
