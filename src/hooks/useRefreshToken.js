import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        const response = await axios.get('/refresh', {
            withCredentials: true
        });
        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log(response.data.access);
            return {
                ...prev,
                roles: [2001],//response.data.roles,
                accessToken: response.data.access
            }
        });
        return response.data.access;
    }
    return refresh;
};

export default useRefreshToken;
