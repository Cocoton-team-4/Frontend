import React, { useState } from "react";
import styled from "styled-components";
import "../Chat.css";

export default function Chat() {
  const [chat, setChat] = useState("");
  const [visible, setVisible] = useState(true); // visible 상태값 추가

  const onChange = (e) => {
    setChat(e.target.value); // 입력값을 chat 상태로 업데이트
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setVisible(true); // 채팅 전송 후 visible 상태를 true로 설정하여 표시
  };

  return (
    <div>
      <Container></Container>
      <ul
        className={
          visible ? "chat-screen_texts visible" : "chat-screen_texts hidden"
        }
      />
      <span>코코</span>
      {visible && <li className="text">{chat}</li>}

      <form onSubmit={handleSubmit}>
        <Submit>
          <input
            className="chatmessage"
            type="text"
            value={chat}
            placeholder="하고싶은 말을 남겨주세요"
            onChange={onChange}
            name="chat"
          />
          <img
            style={{ width: "50px", height: "50px" }}
            src="dm.png"
            alt="로고"
          />
        </Submit>
      </form>
    </div>
  );
}

const Container = styled.div`
  position: absolute;
  top: 80px;
  width: 80%;
  height: 100%;
  left: 10%;
  background-color: #bcdeec;
`;

const Submit = styled.div`
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: center;

  .chatmessage {
    bottom: 0px;
    border: none;
    width: 77%;
    height: 50px;
    left: 100px;
  }
  .submit {
    bottom: 0px;
    border: none;
  }
  .span {
    position: relative;
    left: 100px;
  }
`;
