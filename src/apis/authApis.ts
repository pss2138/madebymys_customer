import {useDispatch} from 'react-redux';
import {defaultApiResponse} from './global';
import {setToken} from '../slices/userSlice';

export const requestSendCodeEmail = (email: string) => {
  // use defaultApiRequest
  const resp = {...defaultApiResponse, code: '111111'};
  return {
    ...defaultApiResponse,
    code: resp.code,
  };
};

export const requestVerifyCode = (email: string, code: string) => {
  const resp = {...defaultApiResponse};
  const dispatch = useDispatch();
  dispatch(setToken(resp.token));
};
