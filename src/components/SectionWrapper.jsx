import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

export default function SectionWrapper(props) {
    const { children, header, title, id } = props;
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
  
            gsap.from(sectionRef.current, {
                duration: 1.5,
                opacity: 0,
                y: 100,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%', 
                    toggleActions: 'play none none none', 
                }
            });

           
            gsap.from('.section-title span', {
                duration: 1,
                y: 50,
                opacity: 0,
                ease: 'power3.out',
                stagger: 0.2, 
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                    toggleActions: 'play none none none',
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id={id} ref={sectionRef} className='min-h-screen flex flex-col gap-10'>
            <div className='bg-gainsboroGreen py-10 flex flex-col gap-2 justify-center items-center p-4'>
                <p className='uppercase font-medium'>{header}</p>
                <h2 className='section-title font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>
                    {title[0]} <span className='uppercase text-yellow-400'>{title[1]}</span> {title[2]}
                </h2>
            </div>
            <div className='max-w-[800px] w-full flex flex-col mx-auto gap-10 p-4 '>
                {children}
            </div>
        </section>
    );
}
