import React from "react";
import { jsPDF } from "jspdf";


interface LetterContent {
  name: string;
  email: string;
  address: string;
  phone: string;
  companyName: string;
  hiringManager: string;
  letterDetails: string;
  disabled: boolean;
}


const DownloadLetter: React.FC<LetterContent> = ({
  name,
  email,
  address,
  phone,
  companyName,
  hiringManager,
  letterDetails,
  disabled,
}) => {
  const handleDownload = () => {
    const doc = new jsPDF();

    doc.setFont("times", "normal");

    // Definition layout settings
    const marginLeft = 25;
    const marginTop = 30;
    const lineHeight = 8; 
    const contentWidth = 160; 

    let cursorY = marginTop;

    // Sender's information
    doc.setFontSize(11);
    doc.text(name, marginLeft, cursorY);
    cursorY += lineHeight;
    doc.text(address, marginLeft, cursorY);
    cursorY += lineHeight;
    doc.text(email, marginLeft, cursorY);
    cursorY += lineHeight;
    doc.text(phone, marginLeft, cursorY);
    cursorY += lineHeight * 2; 

    // Hiring Manager's details
    doc.setFontSize(12);
    doc.text(hiringManager, marginLeft, cursorY);
    cursorY += lineHeight;
    doc.text(companyName, marginLeft, cursorY);
    cursorY += lineHeight * 2; 

    // Greeting
    doc.setFontSize(12);
    doc.text(`Dear ${hiringManager},`, marginLeft, cursorY);
    cursorY += lineHeight * 1; 

    // Body of the letter
    doc.setFontSize(11);
    doc.text(letterDetails, marginLeft, cursorY, {
      maxWidth: contentWidth,
      align: "left",
    });

    
    const bodyTextHeight =
      doc.splitTextToSize(letterDetails, contentWidth).length * lineHeight;
    cursorY += bodyTextHeight; 

    // Closing
    doc.setFontSize(11);
    doc.text("Sincerely,", marginLeft, cursorY);
    cursorY += lineHeight * 1;
    doc.text(name, marginLeft, cursorY);

    doc.save("cover_letter.pdf");
  };

  return (
    <button
      onClick={handleDownload}
      disabled={disabled}
      className={`bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform transition-all hover:scale-105 hover:from-blue-600 hover:to-indigo-700 hover:shadow-2xl focus:outline-none fixed bottom-4 right-4 z-40  ${disabled ? "opacity-50 cursor-not-allowed": ""} `}
    >
      Download PDF
    </button>
  );
};

export default DownloadLetter;
