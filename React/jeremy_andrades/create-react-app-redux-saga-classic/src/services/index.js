import { isCancel, CancelToken } from 'apisauce';

import createExampleApi from './example';
import createStudentApi from './students';
import { TIMEOUTS } from './config';

const exampleApi = createExampleApi();
const studentApi = createStudentApi();

export { CancelToken, isCancel, exampleApi, studentApi, TIMEOUTS };
