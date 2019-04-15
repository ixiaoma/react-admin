import { get, post } from './tools';
import _API from './config';


export const LoginFn = params=> post(_API.LOGIN,params)
