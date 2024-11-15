import axios from "axios"

export const getUserById = async (id:number) => {

const url = `https://dummyjson.com/users${id}`

const result = await axios({
    method: 'get',
    url: url,
    responseType: 'json',
})

return result?.data

}