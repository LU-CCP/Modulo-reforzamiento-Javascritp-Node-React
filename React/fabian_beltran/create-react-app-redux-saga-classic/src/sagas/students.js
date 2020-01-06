import {studentApi} from '../services';
import {FETCH_STUDENT, setStudent, SAVE_STUDENT} from '../actions/students';
import {MESSAGES} from '../config/messages';

const {ERROR_MSG} = MESSAGES;

const {
    todos: {getStudents, postStudents}

} = studentApi;

function* fetchStudent () {
    try {
        const {ok, data} = yield call (getStudents);
    if (!ok) {
        yield call (alert, ERROR_MSG);

        return;
    }

    yield putResolve(setStudent(data));
}   catch (err) {
    yield call (alert, ERROR_MSG);
}
)
