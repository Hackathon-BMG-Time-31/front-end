import { axios } from "./config";
import { setToken } from "../Auth/Auth";

export async function loginApi(cpf, senha) {
    try{
        const url = "http://localhost:5000/users/login";
        const response = await axios.post(url, {
            cpf: cpf,
            senha: senha
        });

        const result = response.data;

        if(result.auth) {
            setToken(result.token);
            return true;
        }

        return false;
    }
    catch(err) {
        console.log('err => ', err)
        return false;
    }
}

export async function getUserApi() {
    try{
        const url = "http://localhost:5000/users/get";
        const response = await axios.get(url);

        const result = response.data;

        if(result.user) {
            return result.user;
        }

        return null;
    }
    catch(err) {
        console.log('err => ', err)
        return null;
    }
}