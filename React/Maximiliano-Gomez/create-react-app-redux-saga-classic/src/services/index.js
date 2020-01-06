import { isCancel, CancelToken } from 'apisauce';

import createExampleApi from './example';
import createApiStudent from './student';
import { TIMEOUTS } from './config';

const exampleApi = createExampleApi();
const studentApi = createApiStudent();

export { CancelToken, isCancel, exampleApi, TIMEOUTS, studentApi };
