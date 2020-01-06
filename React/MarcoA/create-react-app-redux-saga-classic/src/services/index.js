import { isCancel, CancelToken } from 'apisauce';

import createStudentApi from './students';
import createExampleApi from './example';
import { TIMEOUTS } from './config';

const exampleApi = createExampleApi();
const studentApi = createStudentApi();

export { CancelToken, isCancel, exampleApi, TIMEOUTS, studentApi };
