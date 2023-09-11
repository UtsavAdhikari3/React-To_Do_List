import { Box, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";

const InputForm = ({ addFunc }) => {
  const [myTodo, setMyTodo] = useState("");
  return (
    <>
      <div>InputForm</div>
      <Box>
        <Input
          placeholder="write Todo"
          onChange={(event) => {
            setMyTodo(event.target.value);
          }}
        />
        <Button onClick={() => addFunc(myTodo)}>add</Button>
      </Box>
    </>
  );
};

export default InputForm;
