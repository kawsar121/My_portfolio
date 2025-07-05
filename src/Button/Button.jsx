import React from 'react';

import { ArrowDownToLine } from 'lucide-react';


function handleDownload() {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; 
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const Button = () => {
    return (

        <button
            onClick={handleDownload}
            className="bg-[var(--secondary-color)]  relative flex items-center gap-1 sm:px-4 px-3 sm:py-1 py-2 rounded-sm text-[var(--text-color)] hover:opacity-90">
            Resume
            <ArrowDownToLine className="w-5 h-5" />
        </button>

    );
};

export default Button;