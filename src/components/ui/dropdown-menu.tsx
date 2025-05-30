// components/ui/dropdown-menu.tsx
import React, { useEffect, useRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

interface DropdownMenuProps {
    children: React.ReactNode;
    className?: string;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}

export const DropdownMenu = ({
    children,
    className,
    open,
    onOpenChange
}: DropdownMenuProps) => {
    return (
        <div
            className={cn('relative', className)}
            onBlur={() => onOpenChange?.(false)}
        >
            {children}
        </div>
    );
};

interface DropdownMenuTriggerProps {
    children: React.ReactNode;
    asChild?: boolean;
    className?: string;
}

export const DropdownMenuTrigger = ({
    children,
    asChild = false,
    className,
}: DropdownMenuTriggerProps) => {
    const Comp = asChild ? Slot : 'button';
    return (
        <Comp className={cn('outline-none', className)}>
            {children}
        </Comp>
    );
};

// components/ui/dropdown-menu.tsx
// import React, { useEffect, useRef } from 'react';
// import { cn } from '@/lib/utils';

interface DropdownMenuContentProps {
    children: React.ReactNode;
    className?: string;
    align?: 'start' | 'center' | 'end';
    onClose?: () => void; // Add this prop
}

export const DropdownMenuContent = ({
    children,
    className,
    align = 'start',
    onClose,
}: DropdownMenuContentProps) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const alignmentClasses = {
        start: 'left-0',
        center: 'left-1/2 transform -translate-x-1/2',
        end: 'right-0',
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (contentRef.current && !contentRef.current.contains(event.target as Node)) {
                onClose?.();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div
            ref={contentRef}
            className={cn(
                'absolute mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50',
                alignmentClasses[align],
                className
            )}
        >
            {children}
        </div>
    );
};

// components/ui/dropdown-menu.tsx
interface DropdownMenuItemProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;  // Add disabled prop
}

export const DropdownMenuItem = ({
    children,
    className,
    onClick,
    disabled = false,  // Default to false
}: DropdownMenuItemProps) => {
    return (
        <button
            className={cn(
                'block w-full text-left px-4 py-2 text-sm',
                'text-gray-700 dark:text-gray-200',
                'hover:bg-gray-100 dark:hover:bg-gray-700',
                disabled && 'opacity-50 cursor-not-allowed',  // Disabled styles
                className
            )}
            onClick={!disabled ? onClick : undefined}  // Only allow clicks when not disabled
            disabled={disabled}  // Native disabled attribute
            aria-disabled={disabled}  // For better accessibility
        >
            {children}
        </button>
    );
};