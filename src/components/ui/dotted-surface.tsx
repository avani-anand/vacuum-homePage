"use client";
import { cn } from '../../lib/utils';

type DottedSurfaceProps = Omit<React.ComponentProps<'div'>, 'ref'>;

export function DottedSurface({ className, ...props }: DottedSurfaceProps) {
    return (
        <div
            className={cn('pointer-events-none relative w-full h-full', className)}
            style={{
                backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.3) 1px, transparent 1px)`,
                backgroundSize: '50px 50px',
                backgroundPosition: '0 0',
            }}
            {...props}
        />
    );
}
