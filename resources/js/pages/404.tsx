import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
    return (
        <>
            <Head title="404 - Page Not Found" />
            
            <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
                <div className="w-full max-w-2xl text-center">
                    {/* 404 Visual */}
                    <div className="relative mb-8">
                        <h1 className="text-[150px] font-bold text-gray-200 md:text-[200px] lg:text-[250px]">
                            404
                        </h1>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="rounded-full bg-primary/10 p-8">
                                <Search className="h-16 w-16 text-primary md:h-20 md:w-20" />
                            </div>
                        </div>
                    </div>

                    {/* Error Message */}
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                            Page Not Found
                        </h2>
                        <p className="mx-auto max-w-md text-lg text-gray-600">
                            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link href="/">
                            <Button size="lg" className="w-full sm:w-auto">
                                <Home className="mr-2 h-4 w-4" />
                                Go to Homepage
                            </Button>
                        </Link>
                        
                        <Button
                            size="lg"
                            variant="outline"
                            onClick={() => window.history.back()}
                            className="w-full sm:w-auto"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Go Back
                        </Button>
                    </div>

                    {/* Helpful Links */}
                    <div className="mt-12 border-t border-gray-200 pt-8">
                        <p className="mb-4 text-sm font-medium text-gray-700">
                            You might be interested in:
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm">
                            <Link 
                                href="/products/examlock" 
                                className="text-primary hover:underline"
                            >
                                Products
                            </Link>
                            <Link 
                                href="/resources/articles" 
                                className="text-primary hover:underline"
                            >
                                Resources
                            </Link>
                            <Link 
                                href="/about" 
                                className="text-primary hover:underline"
                            >
                                About Us
                            </Link>
                            <Link 
                                href="/contact" 
                                className="text-primary hover:underline"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
