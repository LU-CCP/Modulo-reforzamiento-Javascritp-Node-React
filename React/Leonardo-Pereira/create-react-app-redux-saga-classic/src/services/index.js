import { isCancel, CancelToken } from 'apisauce';

import createExampleApi from './example';
import createStudentapi from './Students';
import { TIMEOUTS } from './config';

const exampleApi = createExampleApi();

const studentApi = createStudentapi();

export { CancelToken, isCancel, exampleApi, TIMEOUTS, studentApi };
