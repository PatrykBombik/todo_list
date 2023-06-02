import {API_KEY,API_URL} from "./constants";

@param {function} succesCallBack

export const getTasks = (succesCallBack) => {
    fetch (`${API_URL}/tasks`, {
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