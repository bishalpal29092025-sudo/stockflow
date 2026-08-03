import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

import Navbar from "@/components/layout/Navbar";

import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Box minH="100vh">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/create" element={<CreatePage />} />

        <Route path="/edit/:id" element={<EditPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Box>
  );
}

export default App;