import React from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import PdfViewer from './PdfViewer.jsx';

// Set the worker source
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function App() {
 // Ensure the PDF file path is correct and accessible
 const pdfFilePath = "./sql.pdf"; // Update this path if necessary

 return (
    <div className="App">
      <PdfViewer file={pdfFilePath} />
    </div>
 );
}

export default App;
