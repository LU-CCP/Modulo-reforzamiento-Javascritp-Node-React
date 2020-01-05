import { isCancel, CancelToken } from 'apisauce';

import createExampleApi from './students';
import { TIMEOUTS } from './config';

const studentApi = createExampleApi();

export { CancelToken, isCancel, studentApi, TIMEOUTS };
