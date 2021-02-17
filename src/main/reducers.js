import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import Dashboardreducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducers'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'
import AuthReducer from '../auth/authReducer'

const rootReducers = combineReducers({
    dashboard: Dashboardreducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer ,
    form: formReducer ,
    toastr: toastrReducer,
    auth: AuthReducer
})

export default rootReducers