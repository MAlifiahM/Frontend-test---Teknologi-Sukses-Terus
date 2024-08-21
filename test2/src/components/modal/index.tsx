import React from "react";

interface ModalTncProps {
    show: boolean;
    onClose: () => void;
    title: string;
}

const ModalTnc: React.FC<ModalTncProps> = ({ show, onClose, title }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 w-1/3">
                <h2 className="text-2xl mb-4 capitalize">{title}</h2>
                <p className="mb-8">[<span className="lowercase">{title}</span> ...]</p>
                <button
                    onClick={onClose}
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 float-end"
                >
                    Close
                </button>
            </div>
        </div>
    )
}

export default ModalTnc;