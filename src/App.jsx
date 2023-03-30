import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Container, Stack} from "@mui/material";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Container className="App">
      <Navbar />
      <Stack direction={"row"} justifyContent="space-between" gap={3}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Container>
  );
}

export default App;
