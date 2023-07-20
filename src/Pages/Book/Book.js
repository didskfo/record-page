import * as style from "./styles";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Book() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <>
      <style.Title>WRITE</style.Title>
      <style.Wrap>
        <style.Inform>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="yyyy / MM / dd"
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="yyyy / MM / dd"
          />
        </style.Inform>
        <style.Input>
          <img src={process.env.PUBLIC_URL + "Images/Picture.svg"} />
          <style.Textarea>
            <style.TitleInput
              type="textarea"
              placeholder="책 제목을 입력하세요."
            />
            <style.WriterInput
              type="textarea"
              placeholder="저자를 입력하세요."
            />
            <style.TextInput type="textarea" placeholder="내용을 입력하세요." />
          </style.Textarea>
        </style.Input>
      </style.Wrap>
    </>
  );
}

export default Book;
