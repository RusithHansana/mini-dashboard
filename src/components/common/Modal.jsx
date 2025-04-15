import { useEffect, useRef } from "react"
import Button from "./Button"

const Modal = ({ isOpen, onClose, title, children }) => {
    const modalRef = useRef(null)

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") onClose()
        }

        if (isOpen) {
            document.addEventListener("keydown", handleEscape)
            document.body.style.overflow = "hidden"
        } else {
            document.removeEventListener("keydown", handleEscape)
            document.body.style.overflow = "auto"
        }

        return () => {
            document.removeEventListener("keydown", handleEscape)
            document.body.style.overflow = "auto"
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                {/* Overlay */}
                <div
                    className="fixed inset-0 transition-opacity"
                    aria-hidden="true"
                    onClick={onClose}
                >
                    <div className="absolute inset-0 bg-gray-500/75"></div>
                </div>

                {/* Spacer for alignment */}
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                    &#8203;
                </span>

                {/* Modal */}
                <div
                    ref={modalRef}
                    className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                >
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4" id="modal-headline">
                                    {title}
                                </h3>
                                <div className="mt-2">{children}</div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <Button onClick={onClose} variant="primary" className="ml-2">
                            Close
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal