import React, { useEffect, useState } from 'react';
import './VerticalNav.css';

interface NavItem {
    id: string;
    label: string;
}

const navItems: NavItem[] = [
    { id: 'projects', label: 'Projects' },
    { id: 'workflow', label: 'Workflow' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
];

const VerticalNav: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('');
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        let scrollTimeout: ReturnType<typeof setTimeout>;

        const handleScroll = () => {
            setIsVisible(true);
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                setIsVisible(false);
            }, 2000); // Hide after 2 seconds of inactivity
        };

        window.addEventListener('scroll', handleScroll);

        const observerOptions = {
            root: null,
            rootMargin: '-40% 0px -40% 0px',
            threshold: 0,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        navItems.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTimeout);
            observer.disconnect();
        };
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`vertical-nav ${isVisible ? 'visible' : ''}`} aria-label="Vertical navigation">
            <div className="nav-dots-container">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        className={`nav-dot-wrapper ${activeSection === item.id ? 'active' : ''}`}
                        onClick={() => scrollToSection(item.id)}
                        title={item.label}
                        aria-label={`Scroll to ${item.label}`}
                    >
                        <span className="nav-dot"></span>
                        <span className="nav-tooltip">{item.label}</span>
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default VerticalNav;
