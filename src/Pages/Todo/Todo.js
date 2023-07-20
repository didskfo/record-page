import * as style from "./styles";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Todo() {
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
        </style.Inform>
        <style.Input>
          <style.TodoList>
            <style.Box>
              <img src={process.env.PUBLIC_URL + "Images/checkBox.svg"} />
            </style.Box>
            <style.List>
              <span>할 일 1</span>
            </style.List>
          </style.TodoList>
          <style.TodoList>
            <style.Box>
              <img src={process.env.PUBLIC_URL + "Images/blankBox.svg"} />
            </style.Box>
            <style.List>
              <span>할 일 2</span>
            </style.List>
          </style.TodoList>
          <style.TodoList>
            <style.Box>
              <img src={process.env.PUBLIC_URL + "Images/blankBox.svg"} />
            </style.Box>
            <style.List>
              <span>할 일 3</span>
            </style.List>
          </style.TodoList>
        </style.Input>
      </style.Wrap>
    </>
  );
}

export default Todo;
