import React, { useState, useEffect } from "react";

const JoinMeetup = ({ meetup, onJoin }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Handle escape
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.keyCode === 27) setIsOpen(false);
        };

        if (isOpen) {
            window.addEventListener("keydown", handleEsc);
        }
        
        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, [isOpen]);

    // Prevent scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const handleConfirm = () => {
        onJoin(meetup.$id);
        setIsOpen(false);
    };

    return (
        <>
            <button onClick={() => setIsOpen(true)} className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm">
                Join
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)}/>
          
                    {/* Modal */}
                    <div role="dialog" aria-modal="true" aria-labelledby="modal-title" className="relative bg-white rounded-xl shadow-lg max-w-md w-full mx-4 z-50">
                    
                    {/* Header */}
                    <div className="p-6 pb-0">
                        <h2 id="modal-title" className="text-xl font-bold text-gray-900">
                            Join Meetup: {meetup.title}
                        </h2>
                        <p className="text-gray-500 mt-2">
                            Please review the meetup details before joining. You'll meet in one of the open voice channels on Discord.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        <ul className="space-y-4">
                            <li>
                                <h3 className="text-indigo-500">
                                    {`${meetup.meetingDate} @ ${meetup.meetingTime} ${meetup.meetingTimeZone}`}
                                </h3>
                            </li>
                            <li>
                                <p className="text-blue-500">
                                    Discord: {meetup.discordName}
                                </p>
                            </li>
                            <li>
                                <p className="text-gray-700">{meetup.description}</p>
                            </li>
                        </ul>
                    </div>

                    {/* Footer */}
                    <div className="p-6 pt-0 flex justify-end gap-3">
                        <button type="button" onClick={() => setIsOpen(false)} className="h-[36px] bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-center text-sm">
                            Cancel
                        </button>
                        <button type="button" onClick={handleConfirm} className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm">
                            Confirm Join
                        </button>
                    </div>
                </div>
            </div>
            )}
        </>
    );
};

export default JoinMeetup;