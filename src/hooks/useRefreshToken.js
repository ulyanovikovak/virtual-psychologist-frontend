import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        /*const response = await axios.get('/refresh', {
            withCredentials: true
        });*/
        setAuth(prev => {
            let accessToken = localStorage.getItem("access")
            console.log(JSON.stringify(prev));
            console.log("useRefreshToken");
            console.log(accessToken);
            return {
                ...prev,
                roles: [2001],//response.data.roles,
                accessToken: accessToken
            }
        });
        let accessToken = localStorage.getItem("access")
        return accessToken;
    }
    return refresh;
};

export default useRefreshToken;
