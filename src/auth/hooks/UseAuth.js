import { useNavigate } from 'react-router-dom';

const useAuth = () => {
	const navigate = useNavigate();

	return async (email, password) => {
		navigate('/pokemon');
	}
}

export default useAuth;