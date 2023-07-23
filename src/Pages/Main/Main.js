import * as style from "./styles";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Main() {
  const [writeDate, setWriteDate] = useState(new Date());
  return (
    <>
      <style.Title>RECORD</style.Title>
      <style.Wrap>
        <style.Inform>
          <form>
            <select name="range" id="ran">
              <option value="basic">Choose a sorting standard</option>
              <option value="title">Title</option>
              <option value="date">Date</option>
              <option value="random">Random</option>
            </select>
          </form>
        </style.Inform>
        <style.Range>
          <style.Set>
            <style.Photo
              src={process.env.PUBLIC_URL + "Images/plusPhoto.svg"}
            />
            <p>Title</p>
          </style.Set>
          <style.Set>
            <style.Photo
              src={process.env.PUBLIC_URL + "Images/plusPhoto.svg"}
            />
            <p>Title</p>
          </style.Set>
          <style.Set>
            <style.Photo
              src={process.env.PUBLIC_URL + "Images/plusPhoto.svg"}
            />
            <p>Title</p>
          </style.Set>
        </style.Range>
      </style.Wrap>
    </>
  );
}

export default Main;
