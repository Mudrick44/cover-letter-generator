import React from 'react';

interface LetterPreview {
  name: string;
  email: string;
  address: string;
  phone: string;
  companyName: string;
  hiringManager: string;
  letterDetails: string;
  jobtitle: string;
  closeModal: () => void;
}

const Livepreview: React.FC<LetterPreview> = ({
  name,
  email,
  address,
  phone,
  companyName,
  hiringManager,
  letterDetails,
  jobtitle,
  closeModal
}) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      {/* Close Button Outside the Paper */}
      <button
        className="absolute top-6 right-6 text-3xl text-white bg-red-500 rounded-full w-8 h-8 flex items-center justify-center"
        onClick={closeModal}
        aria-label="Close"
      >
        &times;
      </button>

      {/* Modal with fixed size for paper-like feel */}
      <div className="relative bg-white shadow-lg w-[360px] h-[520px] p-6 overflow-hidden rounded-lg m-4">
        {/* Letter Content */}
        <div className="w-full h-full text-[10px] leading-4 overflow-y-auto">
          {/* Header (Address and Contact Information) */}
          <div className="text-right mb-4">
            {name && (
              <p>
                {name}
                <br />
                {address}
                <br />
                {email}
                <br />
                {phone}
              </p>
            )}
          </div>

          {/* Employer Details */}
          {hiringManager && companyName && (
            <div className="mb-4">
              <p>
                {hiringManager}
                <br />
                {companyName}
                <br />
              </p>
            </div>
          )}

          {/* Job Title */}
          {name && (
            <div className="mb-4">
              <p>RE: Applying for the role as {jobtitle}</p>
            </div>
          )}

          {/* Greeting */}
          {hiringManager && <p className="mb-4">Dear {hiringManager},</p>}

          {/* Main Letter Body */}
          {letterDetails && (
            <div className="mb-4 whitespace-pre-line">
              <p>{letterDetails}</p>
            </div>
          )}

          {/* Closing */}
          {(name || letterDetails) && <p className="mt-6">Sincerely,</p>}
          {name && <p>{name}</p>}
        </div>
      </div>
    </div>
  );
};

export default Livepreview;
