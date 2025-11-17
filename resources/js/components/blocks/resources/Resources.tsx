import {
    Card,
    CardAction,
    CardContent,
    CardFooter,
    CardHeader,
} from '@/components/ui/card';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';

interface ResourceArticle {
    id: string;
    title: string;
    description: string;
    link_text?: string;
    type: string;
    enabled: boolean;
    article_link?: string;
}

interface ResourcesSectionProps {
    id?: string;
    resource_articles?: ResourceArticle[];
    type?: string;
    enabled?: boolean;
}

export default function ResourcesSection({
    resource_articles = [],
}: ResourcesSectionProps) {
    // Filter only enabled articles
    const enabledArticles = resource_articles.filter(
        (article) => article.enabled
    );

    if (enabledArticles.length === 0) {
        return null;
    }
    
    // Helper function to ensure URL is properly formatted
    const normalizeUrl = (url: string | undefined): string => {
        if (!url) return '#';
        
        // If it's an external URL (starts with http:// or https://), return as is
        if (url.startsWith('http://') || url.startsWith('https://')) {
            return url;
        }
        
        // If it already starts with /resources/, return as is
        if (url.startsWith('/resources/')) {
            return url;
        }
        
        // If it starts with /, add /resources prefix
        if (url.startsWith('/')) {
            return `/resources${url}`;
        }
        
        // Otherwise, add /resources/ prefix
        return `/resources/${url}`;
    };
    
    // Helper function to check if URL is external
    const isExternalUrl = (url: string | undefined): boolean => {
        if (!url) return false;
        return url.startsWith('http://') || url.startsWith('https://');
    };

    return (
        <section className="my-10 w-full px-4 md:my-20">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {enabledArticles.map((article) => (
                    <Card key={article.id}>
                        <CardHeader className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold">
                                {article.title}
                            </h2>
                        </CardHeader>
                        <div className="flex h-full flex-col justify-between gap-6">
                            <CardContent>
                                <p className="text-muted-foreground font-light">
                                    {article.description}
                                </p>
                            </CardContent>
                            <CardFooter>
                                <CardAction>
                                    {isExternalUrl(article.article_link) ? (
                                        <a
                                            href={normalizeUrl(article.article_link)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn text-primary inline-flex items-center gap-1 underline underline-offset-4 transition-all hover:gap-2"
                                        >
                                            {article.link_text ||
                                                'Explore Resources'}
                                            <ArrowRight className="h-4 w-4" />
                                        </a>
                                    ) : (
                                        <Link
                                            href={normalizeUrl(article.article_link)}
                                            className="btn text-primary inline-flex items-center gap-1 underline underline-offset-4 transition-all hover:gap-2"
                                        >
                                            {article.link_text ||
                                                'Explore Resources'}
                                            <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    )}
                                </CardAction>
                            </CardFooter>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}
