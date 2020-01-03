import { isCancel, CancelToken } from 'apisauce';

import createExampleApi from './students';
import { TIMEOUTS } from './config';

const exampleApi = createExampleApi();

export { CancelToken, isCancel, exampleApi, TIMEOUTS };
