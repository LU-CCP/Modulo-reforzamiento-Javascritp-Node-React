import { isCancel, CancelToken } from 'apisauce';

import createStudentApi from './Student';
import { TIMEOUTS } from './config';

const studentApi = createStudentApi();

export { CancelToken, isCancel, studentApi, TIMEOUTS };
