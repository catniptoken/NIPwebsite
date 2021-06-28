import React, { useState } from "react";
import { Document, Page } from "react-pdf";

export default function AllPages(props) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const { pdf } = props;

  return (
      <div    style={{
        backgroundImage:
          "url(" + require("newAssets/websiteBackgroundAudit.png").default + ")",

          
      }}
      
      >
          <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
              
          }}
          >

          <Document

file={pdf}
options={{ workerSrc: "/pdf.worker.js" }}
onLoadSuccess={onDocumentLoadSuccess}
>
{Array.from(new Array(numPages), (el, index) => (
  <Page key={`page_${index + 1}`} pageNumber={index + 1} />
))}
</Document>

          </div>



      </div>

  );
}
