import { Box, Flex, Stack, useToast } from "@chakra-ui/react";
import React from "react";
import useLocalStorage from "./useLocalStorage";
import { AnimatePresence, motion } from "framer-motion";
// import Child from "./components/Child";
import Header from "./components/Header";
import MyTodos from "./components/MyTodos";
import Child from "./components/Child"

function App() {
  const [listValue, setListValue] = useLocalStorage("list", []); //Array of todos obj {id:id, text:todo}

  // const toast = useToast();
  // const handleToast = (text, status) =>
  //   toast({
  //     title: text,
  //     status: status,
  //     isClosable: true,
  //   }); //toast messages

  const addToList = (todo) => {
    setListValue((listValue) =>
      listValue.concat({ text: todo, id: String(Date.now()) })
    );
    return true;
  };

  const deleteFromList = (id) => {
    setListValue((listValue) => listValue.filter((obj) => obj.id !== id));
  };
  // const handleEdit = (edited) => {
  //   setListValue((listValue) =>
  //     listValue.map((elem) => (elem.id === edited.id ? edited : elem))
  //   );
  //   handleToast("Item edited successfully", "success");
  //   return true;
  // };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "400px",
        margin: "auto",
        boxShadow: " 0px 35px 15px -8px rgba(0,0,0,0.1)",
      }}
    >
      {/* <Box width= "500px" > */}
      <Header />
      <Child addFunc={addToList} />
      <MyTodos todos={listValue} deleteFunc={deleteFromList} />
    </Box>
  );
}
export default App;
