import React from "react";
import { Download } from "lucide-react";

interface DownloadButtonProps {
  fileUrl: string;
  fileName: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ fileUrl, fileName }) => {
  return (
    <a
      href={fileUrl}
      download={fileName}
      className="flex items-center px-4 py-2 space-x-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
    >
      <Download className="w-5 h-5" />
      <span>Download</span>
    </a>
  );
};

export default DownloadButton;
