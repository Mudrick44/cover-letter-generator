import React, { useState } from "react";
import DownloadLetter from "../services/downloadLetter";
import Livepreview from "./livepreview";

const JobDescription: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [jobTitle, setJobTitle] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [hiringManager, setHiringManager] = useState<string>("");
  const [letterDetails, setLetterDetails] = useState<string>("");
  const [showPreview, setShowPreview] = useState<boolean>(false);
  const [showDownloadButton, setDownloadButton] = useState<boolean>(false);

  const allFormFilled =
    name.trim() &&
    jobTitle.trim() &&
    email.trim() &&
    address.trim() &&
    phone.trim() &&
    companyName.trim() &&
    hiringManager.trim() &&
    letterDetails.trim();

  return (
    <div className="flex flex-col lg:flex-row h-full min-h-screen bg-gray-200">
      {/* Form Section */}
      <div className="flex-1 bg-white shadow-lg rounded-lg p-6 overflow-y-auto">
        <h1 className="text-xl font-semibold mb-4">Personal Details</h1>
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Job Title</label>
              <input
                type="text"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50"
                placeholder="Enter job title"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Address</label>
              <input
                type="text"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <h1 className="text-xl font-semibold mb-4">Employer Details</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Company Name</label>
              <input
                type="text"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50"
                placeholder="Enter company name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">
                Hiring Manager Name
              </label>
              <input
                type="text"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50"
                placeholder="Enter hiring manager's name"
                value={hiringManager}
                onChange={(e) => setHiringManager(e.target.value)}
              />
            </div>
          </div>
          <h1 className="text-xl font-semibold mb-4">Letter Details</h1>
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">
              3–4 paragraphs explaining why you're the perfect candidate
            </label>
            <textarea
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50"
              rows={6}
              placeholder="Write your cover letter details"
              value={letterDetails}
              onChange={(e) => setLetterDetails(e.target.value)}
            />
          </div>
          <div className="p-4">
            {showDownloadButton && (
              <DownloadLetter
                name={name}
                address={address}
                email={email}
                phone={phone}
                companyName={companyName}
                hiringManager={hiringManager}
                letterDetails={letterDetails}
                disabled={!allFormFilled}
              />
            )}
          </div>
        </form>
      </div>

      {/* Live Preview Button (Only visible on small screens) */}
      {!showPreview && (
        <button
          onClick={() => {
            setShowPreview(true); // Toggle for showing the preview and hiding the button
            setDownloadButton(true); // Show download button
          }}
          className="sm:block lg:hidden fixed bottom-4 right-4 z-40 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform transition-all hover:scale-105 hover:from-blue-600 hover:to-indigo-700 hover:shadow-2xl focus:outline-none"
        >
          Live Preview
        </button>
      )}

      {/* Live Preview Modal (Only on small screens) */}
      {showPreview && (
        <Livepreview
          name={name}
          address={address}
          email={email}
          companyName={companyName}
          hiringManager={hiringManager}
          letterDetails={letterDetails}
          phone={phone}
          jobtitle={jobTitle}
          closeModal={() => {
            setShowPreview(false);
            setDownloadButton(false); // Hide the download button again after closing
          }}
        />
      )}

      {/* Live Preview Section for Large Screens (Right Side) */}
      <div className="hidden lg:block flex-1 flex flex-col justify-center items-center bg-gray-300 p-4">
        <h2 className="text-lg font-bold text-gray-600 mb-4 text-center">
          Live Preview
        </h2>
        <div
          className="w-[110mm] h-[170mm] bg-white shadow-lg rounded-lg p-6 overflow-y-auto"
          style={{
            maxWidth: "100%",
            maxHeight: "calc(100vh - 48px)",
            margin: "auto",
            border: "1px solid #ccc",
            boxSizing: "border-box",
          }}
        >
          {/* Letter Preview Content */}
          <div className="text-xs leading-6">
            {name && (
              <p className="text-right mb-4">
                {name}
                <br />
                {address}
                <br />
                {email}
                <br />
                {phone}
              </p>
            )}
            {hiringManager && companyName && (
              <p className="mb-4">
                {hiringManager} <br />
                {companyName} <br />
              </p>
            )}
            {jobTitle && (
              <p className="mb-4">RE: applying for the role as {jobTitle}</p>
            )}
            {hiringManager && <p className="mb-4">Dear {hiringManager},</p>}
            {letterDetails && (
              <p className="mb-4 whitespace-pre-line">{letterDetails}</p>
            )}
            {(name || letterDetails) && <p className="mt-6">Sincerely,</p>}
            {name && <p>{name}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;

