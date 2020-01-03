import { isCancel, CancelToken } from 'apisauce';

import createExampleApi from './example';
import createStudetApi from './student';
import { TIMEOUTS } from './config';

const exampleApi = createExampleApi();
const studetApi = createStudetApi();

export { CancelToken, isCancel, exampleApi, TIMEOUTS, studetApi };
