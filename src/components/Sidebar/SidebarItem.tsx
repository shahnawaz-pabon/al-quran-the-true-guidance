'use client';

import { ChevronDown, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

type SidebarItemProps = {
    icon: React.ReactNode;
    label: string;
    isOpen: boolean;
    items?: {
        id: number;
        label: string;
        href: string;
    }[];
};

export default function SidebarItem({
    icon,
    label,
    isOpen,
    items = [],
}: SidebarItemProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    if (!isOpen && isExpanded) {
        setIsExpanded(false);
    }

    return (
        <div className="space-y-1">
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={cn(
                    'flex items-center w-full p-2 rounded-md transition-colors hover:bg-accent',
                    isExpanded && 'bg-accent'
                )}
            >
                <div className="flex-shrink-0">{icon}</div>
                {isOpen && (
                    <>
                        <span className="ml-3 text-sm font-medium">{label}</span>
                        {items.length > 0 && (
                            <div className="ml-auto">
                                {isExpanded ? (
                                    <ChevronDown className="h-4 w-4" />
                                ) : (
                                    <ChevronRight className="h-4 w-4" />
                                )}
                            </div>
                        )}
                    </>
                )}
            </button>

            {isOpen && items.length > 0 && (
                <motion.div
                    initial={false}
                    animate={{ height: isExpanded ? 'auto' : 0 }}
                    className="overflow-hidden"
                >
                    <div className="py-1 space-y-1">
                        {items.map((item) => (
                            <Link
                                key={item.id}
                                href={item.href}
                                className="flex items-center py-1 pl-11 pr-2 text-sm rounded-md hover:bg-accent"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </div>
    );
}