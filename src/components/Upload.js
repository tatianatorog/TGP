// import uploadFile from '../helpers/uploadFile'
import React from 'react';

function FileUpload() {
    // State to store uploaded file
    const [file, setFile] = React.useState("");
  
    // Handles file upload event and updates state
    function handleUpload(event) {
      setFile(event.target.files[0]);
  
      // Add code here to upload file to server
      // ...
    }
  
    return (
      <div id="upload-box">
        <input type="file" onChange={handleUpload} />
        <p>Filename: {file.name}</p>
      </div>
    );
  }
  
export default FileUpload