import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios"; // axios 추가

const Modal = ({ isOpen, onClose }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post("/imageupload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        const result = response.data;
        console.log("File ID:", result.file_id);
        // 여기에서 파일 업로드 성공 시 추가적인 동작을 수행할 수 있습니다.
      } else {
        console.error("Failed to upload file");
      }
    } catch (error) {
      console.error("Error during file upload:", error);
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
        </div>
        <button className="closeButton" onClick={onClose}>
          닫기
        </button>
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

  .closeButton {
    position: absolute;
    right: 20px;
    top: 20px;
  }
`;

export default Modal;
