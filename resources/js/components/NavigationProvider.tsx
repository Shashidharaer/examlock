import React, { createContext, useContext, ReactNode } from 'react';
import { type NavigationContext } from '@/types/statamic';

// Create the navigation context
const NavigationContext = createContext<NavigationContext | null>(null);

interface NavigationProviderProps {
    children: ReactNode;
    navigation: NavigationContext;
}

export function NavigationProvider({ children, navigation }: NavigationProviderProps) {
    return (
        <NavigationContext.Provider value={navigation}>
            {children}
        </NavigationContext.Provider>
    );
}

// Hook to use navigation data
export function useNavigation(): NavigationContext | null {
    const context = useContext(NavigationContext);
    return context;
}

// Hook to get specific navigation by handle
export function useNavigationByHandle(handle: string) {
    const navigation = useNavigation();
    return navigation?.[handle] || null;
}

// Hook to get main navigation
export function useMainNavigation() {
    return useNavigationByHandle('main');
}

// Hook to get footer navigation
export function useFooterNavigation() {
    return useNavigationByHandle('footer');
}

// Helper function to check if navigation is available
export function hasNavigation(handle: string): boolean {
    const navigation = useNavigation();
    return !!(navigation?.[handle]);
}

// Helper function to get all available navigation handles
export function getAvailableNavigationHandles(): string[] {
    const navigation = useNavigation();
    return navigation ? Object.keys(navigation) : [];
}
