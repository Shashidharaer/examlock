import {
    Card,
    CardAction,
    CardContent,
    CardFooter,
    CardHeader,
} from '@/components/ui/card';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';

interface ResourceItem {
    title: string;
    version?: string;
    description: string;
    href: string;
    linkText?: string;
    badge?: string;
}

interface DocResourcesProps {
    resources?: ResourceItem[];
}

const defaultResources: ResourceItem[] = [
    {
        title: 'Knowledge Hub',
        description: 'Comprehensive guides, tutorials, and best practices to help you get the most out of our platform.',
        href: '/docs/knowledge-hub',
        linkText: 'Browse Articles',
        badge: '2025',
    },
    {
        title: 'Manuals',
        description: 'Detailed user manuals and step-by-step instructions for all platform features and workflows.',
        href: '/docs/manuals',
        linkText: 'View Manuals',
        badge: 'Docs',
    },
    {
        title: 'APIs',
        description: 'API documentation and integration guides for developers to build, extend, and integrate with our assessment platform.',
        href: '/docs/api',
        linkText: 'View API Docs',
        badge: 'Guide',
    },
    {
        title: 'SDK',
        version: 'Version 2.1',
        description: 'Software Development Kits with libraries, tools, and code samples for rapid application development.',
        href: '/docs/sdk',
        linkText: 'Download SDK',
    },
    {
        title: 'System Status',
        description: 'Real-time system health monitoring, uptime statistics, and incident reports for our services.',
        href: '/docs/system-status',
        linkText: 'Check Status',
        badge: 'Live',
    },
];

export default function DocResources({ resources = defaultResources }: DocResourcesProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-7xl">
            {resources.map((resource) => (
                <Card key={resource.href}>
                    <CardHeader className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">{resource.title}</h2>
                        {resource.version && (
                            <span className="bg-primary w-fit rounded-full px-2 py-1 text-xs text-white whitespace-nowrap">
                                {resource.version}
                            </span>
                        )}
                        {resource.badge && !resource.version && (
                            <span className="bg-primary w-fit rounded-full px-2 py-1 text-xs text-white whitespace-nowrap">
                                {resource.badge}
                            </span>
                        )}
                    </CardHeader>
                    <div className='flex flex-col justify-between h-full gap-6'>
                        <CardContent>
                            <p className="text-muted-foreground font-light">
                                {resource.description}
                            </p>
                        </CardContent>
                        <CardFooter>
                            <CardAction>
                                <Link
                                    href={resource.href}
                                    className="btn text-primary underline underline-offset-4 inline-flex items-center gap-1 hover:gap-2 transition-all"
                                >
                                    {resource.linkText || 'Explore Resources'}
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </CardAction>
                        </CardFooter>
                    </div>
                </Card>
            ))}
        </div>
    );
}
