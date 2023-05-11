import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../fetchConfig/api/axios";
import { AddAlertMessage } from "../UI/UISlice";

const defaultMessage = "Something went wrong. Please try again.";

export const Register = createAsyncThunk(
  "auth/Register",
  async (body: any, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post("/auth/register", body);
      dispatch(
        AddAlertMessage({
          message:
            "You have successfully created an account for " +
            body.firstName +
            " " +
            body.lastName,
          type: "success",
        })
      );

      return response.data;
    } catch (err: any) {
      dispatch(
        AddAlertMessage({
          message: err.response.data.message || defaultMessage,
        })
      );
      return rejectWithValue(err);
    }
  }
);

export const Login = createAsyncThunk(
  "auth/Login",
  async (body: any, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post("/auth/login", body);
      dispatch(
        AddAlertMessage({ message: "Logged in successfully", type: "success" })
      );

      return response.data;
    } catch (err: any) {
      dispatch(
        AddAlertMessage({
          message: err.response.data.message || defaultMessage,
        })
      );
      return rejectWithValue(err);
    }
  }
);

export const ForgotPassword = createAsyncThunk(
  "auth/ForgotPassword",
  async (data: any, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.get(
        `/auth/password?email=${data?.email}&userId=${data?.userId}`
      );
      dispatch(
        AddAlertMessage({
          message: "An email has been sent to you with further instructions",
          type: "success",
        })
      );

      return response.data;
    } catch (err: any) {
      dispatch(
        AddAlertMessage({
          message:
            err.response.data.message || err.response.data || defaultMessage,
        })
      );
      return rejectWithValue(err);
    }
  }
);

export const ResetPassword = createAsyncThunk(
  "auth/ResetPassword",
  async (data: any, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post("/auth/password", data);
      dispatch(
        AddAlertMessage({
          message: "Password changed successfully.",
          type: "success",
        })
      );

      return response.data;
    } catch (err: any) {
      dispatch(
        AddAlertMessage({
          message:
            err.response.data.message || err.response.data || defaultMessage,
        })
      );
      return rejectWithValue(err);
    }
  }
);

export const LogOut = createAsyncThunk(
  "auth/LogOut",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post("/auth/logout");
      dispatch(
        AddAlertMessage({ message: "Logged out successfully", type: "success" })
      );

      return response.data;
    } catch (err: any) {
      dispatch(
        AddAlertMessage({
          message: err.response.data.message || defaultMessage,
        })
      );
      return rejectWithValue(err);
    }
  }
);

export const GetUsers = createAsyncThunk(
  "auth/GetUsers",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.get("/auth/users");

      return response.data;
    } catch (err: any) {
      dispatch(
        AddAlertMessage({
          message: err.response.data.message || defaultMessage,
        })
      );
      return rejectWithValue(err);
    }
  }
);

export const DeleteUser = createAsyncThunk(
  "auth/DeleteUser",
  async (userId: string, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.delete("/auth/users?userId=" + userId);

      dispatch(
        AddAlertMessage({
          message: "User deleted",
          type: "success",
        })
      );

      return response.data;
    } catch (err: any) {
      dispatch(
        AddAlertMessage({
          message: err.response.data.message || defaultMessage,
        })
      );
      return rejectWithValue(err);
    }
  }
);

export const ChangeUserRole = createAsyncThunk(
  "auth/ChangeUserRole",
  async (data: object, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.patch("/auth/users", data);

      dispatch(
        AddAlertMessage({
          message: "User role changed",
          type: "success",
        })
      );

      return response.data;
    } catch (err: any) {
      dispatch(
        AddAlertMessage({
          message: err.response.data.message || defaultMessage,
        })
      );
      return rejectWithValue(err);
    }
  }
);

export const ResetClientsTreated = createAsyncThunk(
  "auth/ResetClientsTreated",
  async (userId: string, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.put("/auth/users?userId=" + userId);

      dispatch(
        AddAlertMessage({
          message: "Reset Successful",
          type: "success",
        })
      );

      return response.data;
    } catch (err: any) {
      dispatch(
        AddAlertMessage({
          message: err.response.data.message || defaultMessage,
        })
      );
      return rejectWithValue(err);
    }
  }
);

export const GetClientForStaff = createAsyncThunk(
  "auth/GetClientForStaff",
  async (data: any, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.get(
        `/auth/get-clients?userId=${data?.userId}&role=${data?.role}`
      );
      return response.data;
    } catch (err: any) {
      dispatch(
        AddAlertMessage({
          message: err.response.data.message || defaultMessage,
        })
      );
      return rejectWithValue(err);
    }
  }
);
