import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Button from './Button';

export default function Hero() {
    const heroRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(heroRef.current, {
                duration: 1,
                opacity: 0,
                y: -50,
                ease: 'power3.out',
            });

            gsap.from('.hero-title', {
                duration: 1,
                scale: 0.8,
                opacity: 0,
                delay: 0.5,
                ease: 'elastic.out(1, 0.3)',
            });

            gsap.from('.hero-description', {
                duration: 1,
                opacity: 0,
                y: 20,
                delay: 1,
                ease: 'power3.out',
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={heroRef} className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>
                <p>IT'S TIME TO </p>
                <h1 className='hero-title uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
                    Elevate Your <span className='text-yellow-400'>Fitness Journey</span>
                </h1>
            </div>
            <p className='hero-description text-sm md:text-base font-light'>
                By engaging with our fitness programs, I acknowledge the possibility of <span className='text-yellow-400 font-medium'>achieving extraordinary gains</span> and accept the risks of becoming so <span className='text-yellow-400 font-medium'>impressively muscular</span> that doorways may seem smaller and mirrors might need a new perspective!.
            </p>
            <Button func={() => {
                window.location.href = '#generate';
            }} text={"Accept & Begin"} />
        </div>
    );
}
