import React, { createContext, useRef } from 'react';


export const Authcontext = createContext()
const Provider = ({ children }) => {
    const sectionRef = useRef(null);
    const contact = useRef(null);
    const projects = useRef(null);

    const handleScrollToSection = (section) => {
        if (section?.current) {
            section?.current?.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const value = {
        handleScrollToSection,
        sectionRef,
        contact,
        projects
    }


    return (
        <Authcontext value={value}>
            {children}
        </Authcontext>
    );
};

export default Provider;