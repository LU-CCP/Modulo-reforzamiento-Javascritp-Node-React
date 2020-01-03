import { isCancel, CancelToken } from 'apisauce';

import createExampleApi from './example';
import createStudentsApi from './students';
import { TIMEOUTS } from './config';

const exampleApi = createExampleApi();
const studentsApi = createStudentsApi();

export { CancelToken, isCancel, exampleApi, TIMEOUTS, studentsApi };
