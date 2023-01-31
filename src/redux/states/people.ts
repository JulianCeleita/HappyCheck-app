import { Person } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

const initialState : Person[] = [];

const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorage = (key: string) => {
    return localStorage.getItem(key);
}

export const peopleSlice = createSlice({
  name: "people",
  initialState: getLocalStorage(LocalStorageTypes.PEOPLE)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.PEOPLE) as string)
    : initialState,
  reducers: {
    addPeople: (state, action) => {
      setLocalStorage(LocalStorageTypes.PEOPLE, state);
      return action.payload;
    },
    addFavorite: (state, action) => {
        setLocalStorage(LocalStorageTypes.PEOPLE, state);
        return action.payload;
    }
  },
});
