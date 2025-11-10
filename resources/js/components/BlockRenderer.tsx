import { type StatamicBlock } from '@/types/statamic';
import Extension from './blocks/Extension';
import Download from './blocks/Download';
import ImageBlock from './blocks/ImageBlock';
import QuoteBlock from './blocks/QuoteBlock';

// Import landing page block components
import HeroSection from './sections/HeroSection';
import MainContentSection from './sections/MainContentSection';
import WhyChooseUs from './sections/WhyChooseUs';
import OurFeatures from './sections/OurFeatures';
import FeatureHomepageCard from './sections/FeatureHomepageCard';
import TextBlock from './blocks/TextBlock';
import IntegrationsSection from './sections/IntegrationsSection';
import Overview from './sections/Overview';
import FAQSection from './sections/FAQSection';
import TransformBrowser from './sections/TransformBrowser';

// Other common components
import Hero from './common/PageHero';
import Letter from './common/Letter';
import Certification from './common/Certification';
import FAQ from './common/FAQ';
import Carousel from './common/Carousel';
import InfoCard from './common/info-card';
import Declarations from './common/Declarations';
import MissionVisionCard from './common/MissionVisionCard';
import GetInTouchSection from './common/GetInTouchSection';
import SectionTitle from './common/SectionTitle';
import OfficeSection from './common/OfficeSection';
import Announcements from './common/Announcements';
import NotificationBanner from './sections/NotificationBanner';
import Features from './blocks/examlock/Features';
import AdvancedFeatures from './blocks/examlock/AdvancedFeatures';

//examlock page blocks components
import CompatibilitySection from './blocks/examlock/CompatibiltySection';

//examlock lite page blocks components
import FocusedSection from './blocks/examlocklite/FocusedSection';
import IntelligentMonitoring from './blocks/examlocklite/IntelligentMonitoring';

//examlens page blocks components
import WhyPaper from './blocks/examlens/WhyPaper';
import StandardsCard from './blocks/examlens/StandardsCard';

//lms page blocks components
import CardsSection from './blocks/lms/CardsSection';
import CardWithAccordion from './blocks/lms/CardWithAccordion';

// Block component registry
const blockComponents = {
    // Basic blocks
    extension: Extension,
    download: Download,
    image_block: ImageBlock,
    quote_block: QuoteBlock,
    text_block: TextBlock,

    // Landing page sections
    hero_section: HeroSection,
    main_content_section: MainContentSection,
    why_choose_us: WhyChooseUs,
    our_features: OurFeatures,
    feature_homepage_card: FeatureHomepageCard,
    integration_section: IntegrationsSection,
    overview_section: Overview,
    faq_section: FAQSection,
    stats_section: TransformBrowser,

    // Common components
    page_hero: Hero,
    letter_section: Letter,
    certification: Certification,
    faq: FAQ,
    carousel_section: Carousel,
    info_card: InfoCard,
    declaration_section: Declarations,
    mission_vision_section: MissionVisionCard,
    get_in_touch_section: GetInTouchSection,
    simple_section: SectionTitle,
    office_section: OfficeSection,
    annoucement_section: Announcements,
    notification_banner: NotificationBanner,

    // ExamLock page blocks
    features_section: Features,
    advanced_features_section: AdvancedFeatures,
    compatibility: CompatibilitySection,

    // ExamLock Lite page blocks
    focused_section: FocusedSection,
    intelligent_monitoring: IntelligentMonitoring,

    // ExamLens page blocks
    why_paper: WhyPaper,
    standards_section: StandardsCard,

    // LMS page blocks
    cards_section: CardsSection,
    card_with_accordion: CardWithAccordion,

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
                            className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20 max-w-7xl mx-auto"
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
