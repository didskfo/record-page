import * as style from "./styles";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Photo() {
  const [writeDate, setWriteDate] = useState(new Date());
  return (
    <>
      <style.Title>WRITE</style.Title>
      <style.Wrap>
        <style.Inform>
          <DatePicker
            selected={writeDate}
            onChange={(date) => setWriteDate(date)}
            dateFormat="yyyy / MM / dd"
          />
          <style.Weather className="weather">
            <img src={process.env.PUBLIC_URL + "Images/sunny.svg"} />
            <img src={process.env.PUBLIC_URL + "Images/foggy.svg"} />
            <img src={process.env.PUBLIC_URL + "Images/air.svg"} />
            <img src={process.env.PUBLIC_URL + "Images/thunderstorm.svg"} />
            <img src={process.env.PUBLIC_URL + "Images/snow.svg"} />
          </style.Weather>
        </style.Inform>
        <style.Input>
          <img src={process.env.PUBLIC_URL + "Images/plusPhoto.svg"} />
          <style.Textarea type="textarea" placeholder="내용을 입력하세요." />
        </style.Input>
      </style.Wrap>
    </>
  );
}

export default Photo;
