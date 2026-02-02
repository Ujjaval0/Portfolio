import React from 'react';
import { X, Download } from 'lucide-react';
import resumeFile from '../assets/resume.pdf';
import './ResumeModal.css';

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="resume-modal-content seamless" onClick={(e) => e.stopPropagation()}>
                <div className="resume-floating-controls">
                    <a
                        href={resumeFile}
                        download="Ujjaval_Bhardwaj_Resume.pdf"
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
                    <embed
                        src={`${resumeFile}#toolbar=0&navpanes=0&view=FitH`}
                        type="application/pdf"
                        className="resume-iframe-seamless"
                        title="Resume Preview"
                    />
                </div>
            </div>
        </div>
    );
};

export default ResumeModal;
