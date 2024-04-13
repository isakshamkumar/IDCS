import React from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import PdfViewer from './PdfViewer.jsx';
// import java from './java.pdf'
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import ScriptRunner from './components/ScriptRunner.jsx';
// Set the worker source
import java from './java.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function App() {
 // Ensure the PDF file path is correct and accessible
//  const pdfFilePath = "./sql.pdf"; // Update this path if necessary

 return (
  <BrowserRouter>
    <div className="App">
<Routes>
<Route path='/' element={<ScriptRunner/>} />
<Route path='pdf' element={<PdfViewer myFile={java}/>} />
      {/* <PdfViewer myFile={java} /> */}
</Routes>
    </div>
  </BrowserRouter>
 );
}

export default App;
