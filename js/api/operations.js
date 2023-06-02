import {API_URL,API_KEY} from "./constants";

@param {string} id
@param {function} succesCallBack
export const getOperations = (id, succesCallBack) => {
    fetch(`${API_URL}/tasks/${id}/operations`, {
        headers: {
            Authorization: API_KEY,
        },
    })
        .then((r) => r.json())
        .then((data) => {
            if (data.error === false && typeof succesCallBack === "function") {
                succesCallBack(data.data);
            }
        })
        .catch((err) => console.log(err));
};