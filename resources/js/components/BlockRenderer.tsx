import { type StatamicBlock, type BlockProps } from '@/types/statamic';

// Import all block components
import LandingPage from './blocks/LandingPage';
import TextBlock from './blocks/TextBlock';
import QuoteBlock from './blocks/QuoteBlock';
import ImageBlock from './blocks/ImageBlock';
import MainContentSection from './sections/MainContentSection';
import Certification from './layout/Certification';
import WhyChooseUs from './sections/WhyChooseUs';
import OurFeatures from './sections/OurFeatures';
import IntegrationsSection from './sections/IntegrationsSection';
import FeatureHomepageCard from './sections/FeatureHomepageCard';
import Overview from './sections/Overview';
import FAQSection from './sections/FAQSection';
import TransformBrowser from './sections/TransformBrowser';
import ExamLock from './blocks/products/ExamLock';
import ExamLockLite from './blocks/products/ExamLockLite';
import ExamLens from './blocks/products/ExamLens';
import Lms from './blocks/products/Lms';
import Integration from './blocks/Integration';
import AboutUs from './blocks/AboutUs';
import Resources from './blocks/Resources';
import PrivacyPolicy from './blocks/PrivacyPolicy';
import AccessibilityStatement from './blocks/AccessibilityStatement';
import Announcements from './blocks/Announcements';
import Compliance from './blocks/Compliance';
import Contact from './blocks/Contact';
import CookiesPolicy from './blocks/CookiesPolicy';
import DataPrivacy from './blocks/DataPrivacy';
import Gdpr from './blocks/Gdpr';
import Ferpa from './blocks/Ferpa';
import Download from './blocks/Download';
import Extension from './blocks/Extension';
import Letter from './layout/Letter';

//examlock page blocks
import ExamlockHeroSection from './blocks/examlock/HeroSection';
import CompatibilitySection from './blocks/examlock/CompatibiltySection';
import LiveMonitoringCard from './blocks/examlock/LiveMonitoringCard';
import IntrusionPreventionCard from './blocks/examlock/IntrusionPreventionCard';
import QmsCard from './blocks/examlock/QmsCard';
import IntegrationsCard from './blocks/examlock/IntegrationsCard';
import Features from './blocks/examlock/Features';
import AdvancedFeatures from './blocks/examlock/AdvancedFeatures';
import OtherIntegrationCard from './blocks/examlock/OtherIntegrationCard';
import Hero from './layout/Hero';
import HeroSection from './sections/HeroSection';
//examlock lite page blocks
import FocusedSection from './blocks/examlocklite/FocusedSection';

// Block component registry
const blockComponents = {
    landing_page: LandingPage,
    text_block: TextBlock,
    quote_block: QuoteBlock,
    image_block: ImageBlock,
    main_content_section: MainContentSection,
    certification: Certification,
    why_choose_us: WhyChooseUs,
    feature_homepage_card: FeatureHomepageCard,
    integration_section: IntegrationsSection,
    overview_section: Overview,
    faq_section: FAQSection,
    stats_section: TransformBrowser,
    integration: Integration,
    about_us: AboutUs,
    resources: Resources,
    our_features: OurFeatures,
    privacy_policy: PrivacyPolicy,
    accessibility_statement: AccessibilityStatement,
    announcements: Announcements,
    compliance: Compliance,
    contact: Contact,
    cookies_policy: CookiesPolicy,
    data_privacy: DataPrivacy,
    gdpr: Gdpr,
    ferpa: Ferpa,
    download: Download,
    extension: Extension,
    // Product pages
    examlock: ExamLock,
    examlock_lite: ExamLockLite,
    examlens: ExamLens,
    lms: Lms,

    //examlock page blocks
    examlock_hero: ExamlockHeroSection,
    compatibility: CompatibilitySection,
    live_monitoring_card: LiveMonitoringCard,
    intrusion_prevention_card: IntrusionPreventionCard,
    qms_card: QmsCard,
    integrations_card: IntegrationsCard,
    features: Features,
    advanced_features: AdvancedFeatures,
    other_integration_card: OtherIntegrationCard,
    letter_section: Letter,

    //examlock lite page blocks
    examlock_lite_hero: Hero,
    focused_section: FocusedSection,
} as const;

type BlockType = keyof typeof blockComponents;

interface BlockRendererProps {
    blocks: StatamicBlock[];
}

export default function BlockRenderer({ blocks }: BlockRendererProps) {
    return (
        <div className="space-y-8">
            {blocks.map((block) => {
                // Skip disabled blocks
                if (!block.enabled) {
                    return null;
                }

                // Get the component for this block type
                const BlockComponent = blockComponents[block.type as BlockType];

                // If no component found for this block type, render a fallback
                if (!BlockComponent) {
                    console.warn(`No component found for block type: ${block.type}`);
                    return (
                        <div 
                            key={block.id} 
                            className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20"
                        >
                            <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                                <span className="text-sm font-medium">⚠️ Unknown Block Type</span>
                            </div>
                            <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                                No component found for block type: <code>{block.type}</code>
                            </p>
                            {import.meta.env.DEV && (
                                <details className="mt-2">
                                    <summary className="cursor-pointer text-xs text-red-400">
                                        Show block data
                                    </summary>
                                    <pre className="mt-1 overflow-auto text-xs">
                                        {JSON.stringify(block, null, 2)}
                                    </pre>
                                </details>
                            )}
                        </div>
                    );
                }

                // Render the block component
                return (
                    <BlockComponent 
                        key={block.id} 
                        block={block}
                        {...block} // Spread all block properties as props
                    />
                );
            })}
        </div>
    );
}

// Helper function to get available block types (useful for debugging)
export function getAvailableBlockTypes(): string[] {
    return Object.keys(blockComponents);
}

// Helper function to check if a block type is supported
export function isBlockTypeSupported(blockType: string): boolean {
    return blockType in blockComponents;
}
