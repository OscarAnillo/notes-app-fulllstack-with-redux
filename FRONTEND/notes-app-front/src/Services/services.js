import axios from 'axios';
const baseURL = "http://localhost:3005/api/notes";

export const getAllNotes = async () => {
    const res = await axios.get(baseURL);
    return res.data;
}

export const createNew = async (note) => {
    const object = { note }
    const res = await axios.post(baseURL, object)
    return res.data
}

export const deleteNew = async id => {
    const res = await axios.delete(`${baseURL}/${id}`);
    return res.data;
}