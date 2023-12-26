import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Modal = ({ isOpen, onClose }) => {
  const [file, setFile] = useState(null);
  const [fileId, setFileId] = useState(null);
  const [plot, setPlot] = useState(""); // 글 내용
  const [date, setDate] = useState(""); // 추억의 날짜

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post("/v1/image-upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        const result = response.data;
        console.log("File ID:", result.file_id);
        setFileId(result.file_id);
      } else {
        console.error("Failed to upload file");
      }
    } catch (error) {
      console.error("Error during file upload:", error);
    }
  };

  const handlePostUpload = async () => {
    try {

      const response = await axios.post(`/posting/1`, { //////////////////////////고인의 아이디
        plot: plot,
        picture: fileId,
        date: date,
      });

      

      if (response.status === 200) {
        console.log("Post uploaded successfully");
        // 업로드 성공 시 추가적인 동작 수행
      } else {
        console.error("Failed to upload post");
      }
    } catch (error) {console.log("와아아아아", plot, fileId, date);
      console.error("Error during post upload:", error);
    }
  };

  const handleGetPostList = async () => {
    try {
      const response = await axios.get("/posting/1",  {
        headers: { "ngrok-skip-browser-warning": true },
      }); // 예시 URL
  
      if (response.status === 200) {
        const result = response.data;
        console.log("Post List:", result.postList);
      } else {
        console.error("Failed to get post list");
      }
    } catch (error) {
      console.error("Error during post list retrieval:", error);
    }
  };
  

  if (!isOpen) return null;

  return (
    <ModalWrapper>
      <ModalContent>
        <div>
          <div className="photoUpload">
            <span className="text">사진 업로드</span>
            <input type="file" onChange={handleFileChange} />
            <button className="uploadButton" onClick={handleUpload}>
              업로드
            </button>
          </div>
          <div style={{position: "absolute", top: "420px", left: "350px"}}>내용(선택)<input type="text" onChange={(e) => setPlot(e.target.value)} /></div>
            <div style={{position: "absolute", top: "500px", left: "350px"}}>날짜<input onChange={(e) => setDate(e.target.value)} type="date" /></div>
            <div onClick={handlePostUpload} style={ {position: "absolute", textAlign: "center", left: "700px", top: "600px", width: "100px", backgroundColor: "#D79BEC"}}>업로드</div>
            
        </div>
        <span className="closeButton" onClick={onClose}>
          X
        </span>
      </ModalContent>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  width: 1000px;
  height: 70vh;
  background: white;
  padding: 20px;
  border-radius: 5px;
  margin-top: 100px;

  .photoUpload {
    display: flex;
    margin-top: 130px;
    align-items: center;
    padding-left: 100px;
    height: 100px;
  }

  .text {
    margin-right: 20px;
  }

  .uploadButton {
    width: 100px;
    height: 30px;
    background-color: grey;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .getButton {
    width: 150px;
    height: 30px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .postUploadButton {
    width: 100px;
    height: 30px;
    margin-top: 10px;
    background-color: #D79BEC;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .closeButton {
    position: absolute;
    left: 1200px;
    top: 170px;
  }
`;

export default Modal;
