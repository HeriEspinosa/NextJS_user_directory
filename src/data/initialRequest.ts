import axios from 'axios';

export const initialData = async () => {
    const url = `https://dummyjson.com/users`;

    const result = await axios({
        method: 'get',
        url: url,
        responseType: 'json',
    });

    return result?.data?.users;
};
