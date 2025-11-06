import { type StatamicBlock } from '@/types/statamic';

// Import all block components
import NotificationBanner from './sections/NotificationBanner';
import HeroSection from './sections/HeroSection';
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
import Announcements from './blocks/Announcements';
import Download from './blocks/Download';
import Extension from './blocks/Extension';
import Letter from './layout/Letter';
import FAQ from './blocks/FAQ';
import Carousel from './blocks/Carousel';
import InfoCard from './layout/info-card';
import Declarations from './blocks/Declarations';
import MissionVisionCard from './blocks/MissionVisionCard';
import GetInTouchSection from './blocks/GetInTouchSection';
import SectionTitle from './common/SectionTitle';
import OfficeSection from './blocks/OfficeSection';

//examlock page blocks
import CompatibilitySection from './blocks/examlock/CompatibiltySection';
import Features from './blocks/examlock/Features';
import AdvancedFeatures from './blocks/examlock/AdvancedFeatures';
import Hero from './layout/PageHero';

//examlock lite page blocks
import FocusedSection from './blocks/examlocklite/FocusedSection';
import IntelligentMonitoring from './blocks/examlocklite/IntelligentMonitoring';

//examlens page blocks
import WhyPaper from './blocks/examlens/WhyPaper';
import StandardsCard from './blocks/examlens/StandardsCard';

//lms page blocks
import CardsSection from './blocks/lms/CardsSection';
import CardWithAccordion from './blocks/lms/CardWithAccordion';

// Block component registry
const blockComponents = {
    notification_banner: NotificationBanner,
    hero_section: HeroSection,
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
    our_features: OurFeatures,
    annoucement_section: Announcements,
    download: Download,
    extension: Extension,
    carousel_section: Carousel,
    info_card: InfoCard,
    declaration_section: Declarations,
    mission_vision_section: MissionVisionCard,
    get_in_touch_section: GetInTouchSection,
    simple_section: SectionTitle,
    office_section: OfficeSection,

    // Product pages
    page_hero: Hero,
    

    //examlock page blocks
    compatibility: CompatibilitySection,
    features: Features,
    advanced_features: AdvancedFeatures,
    letter_section: Letter,

    //examlock lite page blocks
    focused_section: FocusedSection,
    intelligent_monitoring: IntelligentMonitoring,
    faq: FAQ,

    //examlens page blocks
    why_paper: WhyPaper,
    standards_section: StandardsCard,

    //lms page blocks
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
