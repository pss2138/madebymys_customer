import {useSelector} from 'react-redux';
import {selectToken} from '../slices/userSlice';

interface DefaultApiRequest {
  token: string | undefined;
}

interface DefaultApiResponse {
  statusCode: string | undefined;
  errorMsg: string | undefined;
  token: string | undefined;
}

const token = useSelector(selectToken);

export const defaultApiRequest: DefaultApiRequest = {
  token,
};

export const defaultApiResponse: DefaultApiResponse = {
  statusCode: undefined,
  errorMsg: undefined,
  token: 'token',
};
