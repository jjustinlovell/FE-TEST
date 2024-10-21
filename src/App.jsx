import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Shop from "./pages/Shop";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="login" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="shop" element={<Shop />} />
            <Route />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" containerStyle={{margin : '8px'}}/>
    </>
  );
}
