import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Make() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    deathname: "",
    putname: "",
    relation: "",
    phone: "",
  });
  const { deathname, putname, relation, phone } = inputs;
  //=======================================================
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };
  //=====================================================
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("분향소가 등록되었습니다");
    navigate(`/`);
  };
  return (
    <MakeDeath flex>
      <div className="middle">
        <div className="make1">분향소생성</div>
      </div>

      <br></br>
      <form onSubmit={handleSubmit}>
        <div>
          <hr></hr>
        </div>
        <div className="middle">
          <div className="make">RE:BORNER정보</div>
        </div>
        <br></br>
        <br></br>
        <div className="checkinfo1">
          <div>고인명</div>
          <input
            type="text"
            value={deathname}
            name="deathname"
            onChange={onChange}
          ></input>

          <div>사진 업로드</div>
          <input type="button" value="업로드"></input>
          <div>사망확인서 업로드</div>
          <input type="button" value="업로드"></input>
        </div>
        <br></br>
        <div className="checkinfo1">
          <div>생년월일</div>
          <input type="date"></input>
          <div>발인날짜</div>
          <input type="date"></input>
        </div>
        <br></br>
        <div>
          <hr></hr>
        </div>
        <div className="middle">
          <div className="make">등록자정보</div>
        </div>
        <br></br>
        <br></br>
        <div className="checkinfo1">
          <div>등록자명</div>
          <input
            type="text"
            value={putname}
            name="putname"
            onChange={onChange}
          ></input>
          <div>가족관계증명서 업로드</div>
          <input type="button" value="업로드"></input>
        </div>
        <br></br>
        <div className="checkinfo1">
          <div>고인과의 관계</div>
          <input
            type="text"
            value={relation}
            name="relation"
            onChange={onChange}
          ></input>
          <div>전화번호</div>
          <input
            type="text"
            value={phone}
            name="phone"
            onChange={onChange}
          ></input>
        </div>
        <br></br>
        <div className="checkinfo1">
          <div>온라인 분향소 개방 기간</div>
          <div class="radio-group">
            <label>
              <input type="radio" name="option" />
              7일
            </label>
            <label>
              <input type="radio" name="option" />한 달
            </label>
            <label>
              <input type="radio" name="option" />
              1년
            </label>
            <label>
              <input type="radio" name="option" />
              무기한
            </label>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="middle">
          <Submit type="submit" disabled={loading} />
        </div>
      </form>
    </MakeDeath>
  );
}

const MakeDeath = styled.div`
  position: absolute;
  top: 50%;
  left: 15%;
  width: 70%;
  top: 100px;
  height: 100%;
  padding-bottom: 150px;

  .make1 {
    font-size: 30px;
  }
  .make {
    font-size: 20px;
  }
  .middle {
    margin-top: 50px;
  }
  .checkinfo1 {
    display: flex;
    margin-left: 30px;
  }
  .checkinfo1 > div {
    margin-right: 60px; /* 입력 필드 간의 수평 간격을 조절합니다. */
  }
  .checkinfo1 > input {
    margin-right: 100px; /* 입력 필드 간의 수평 간격을 조절합니다. */
  }
  .middle {
    display: flex;
    justify-content: center;
  }
  .radio-group input[type="radio"] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid #333;
    outline: none;
    border-radius: 0; /* 네모 모양의 라디오 버튼을 위해 border-radius를 0으로 설정합니다. */
  }

  /* 선택된 라디오 버튼의 스타일 */
  .radio-group input[type="radio"]:checked {
    background-color: #bd6ad6; /* 선택된 상태의 배경색을 변경합니다. */
    border-color: #bd6ad6; /* 선택된 상태의 테두리 색상도 변경할 수 있어요. */
  }
  /* 라디오 버튼 스타일링 */
  .radio-group label {
    display: inline-block; /* 각 라디오 버튼을 한 줄에 나란히 표시합니다. */
    margin-right: 20px; /* 각 라디오 버튼 사이의 가로 간격을 조절합니다. */
  }

  /* 라디오 버튼 스타일 */
  .radio-group input[type="radio"] {
    /* 기존의 스타일 유지 */
    /* ... */
  }
`;
const Submit = styled.input`
  background-color: #bd6ad6;
  border-radius: 10px;
  border: 0;
  width: 200px;
  height: 30px;
  color: white;
  cursor: pointer;
`;
