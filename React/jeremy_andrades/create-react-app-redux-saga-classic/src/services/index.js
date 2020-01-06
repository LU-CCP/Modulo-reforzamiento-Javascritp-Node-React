import { isCancel, CancelToken } from 'apisauce';

import createExampleApi from './example';
import { TIMEOUTS } from './config';

const exampleApi = createExampleApi();

export { CancelToken, isCancel, exampleApi, TIMEOUTS };
