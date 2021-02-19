import axios from 'axios'
const BASE_URL = 'https://moneycycle.herokuapp.com/api'

export function getSummary() {
    const request = axios.get(`${BASE_URL}/billingCycles/summary`)
    return {
    type: 'BILLING_SUMMARY_FETCHED',
    payload: request
    }
}