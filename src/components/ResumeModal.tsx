import React, { useState, useEffect } from 'react';
import { X, Download, FileText, ExternalLink } from 'lucide-react';
import resumeFile from '../assets/Data_analyst_ujjaval.pdf';
import './ResumeModal.css';

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

function useIsMobileDevice(): boolean {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const check = () =>
            setIsMobile(
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                ) || window.innerWidth < 768
            );
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);
    return isMobile;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
    const isMobile = useIsMobileDevice();
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="resume-modal-content seamless" onClick={(e) => e.stopPropagation()}>
                <div className="resume-floating-controls">
                    <a
                        href={resumeFile}
                        download="Ujjaval_DataAnalyst_Resume.pdf"
                        className="download-button-floating"
                        title="Download PDF"
                    >
                        <Download size={22} />
                    </a>
                    <button className="close-button-floating" onClick={onClose} title="Close">
                        <X size={22} />
                    </button>
                </div>

                <div className="resume-body-seamless">
                    {isMobile ? (
                        /* Mobile: PDF embeds break on iOS. Show a clean download card instead */
                        <div className="resume-mobile-fallback">
                            <div className="resume-mobile-icon">
                                <FileText size={56} strokeWidth={1.2} />
                            </div>
                            <h3 className="resume-mobile-title">Resume — Ujjaval Bhardwaj</h3>
                            <p className="resume-mobile-text">
                                PDF preview isn't supported in mobile browsers.
                                Download or open the resume directly.
                            </p>
                            <div className="resume-mobile-actions">
                                <a
                                    href={resumeFile}
                                    download="Ujjaval_DataAnalyst_Resume.pdf"
                                    className="resume-mobile-btn primary"
                                >
                                    <Download size={16} />
                                    Download Resume
                                </a>
                                <a
                                    href={resumeFile}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="resume-mobile-btn secondary"
                                >
                                    <ExternalLink size={16} />
                                    Open in Browser
                                </a>
                            </div>
                        </div>
                    ) : (
                        <iframe
                            src={`${resumeFile}#toolbar=0&navpanes=0&view=FitH`}
                            className="resume-iframe-seamless"
                            title="Resume Preview"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ResumeModal;
