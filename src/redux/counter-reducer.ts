type InitialStateType = typeof initialState
const initialState = {
    min: 0,
    max: 5,
    count: 0,
    isSettingsEnabled: false,
    isIncorrectValue: false
}
const SET_MIN = 'SET-MIN'
const SET_MAX = 'SET-MAX'
const SET_COUNT = 'SET-COUNT'
const TOGGLE_SETTINGS_ENABLED = 'TOGGLE-SETTINGS-ENABLED'
const INC_COUNT = 'INC-COUNT'

const isIncorrect = (min: number, max: number) => (min < 0 || max < 0 || max <= min)
export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_MIN:
            const min = action.payload.min
            return {
                ...state,
                min,
                isIncorrectValue: isIncorrect(min, state.max),
                isSettingsEnabled: true
            }
        case SET_MAX:
            const max = action.payload.max
            return {
                ...state, max,
                isIncorrectValue: isIncorrect(state.min, max),
                isSettingsEnabled: true
            }
        case SET_COUNT:
            return {...state, count: action.payload.count}
        case TOGGLE_SETTINGS_ENABLED:
            const isSettingsEnabled = action.payload.isSettingsEnabled
            return {...state, isSettingsEnabled, count: isSettingsEnabled ? state.count : state.min}
        case INC_COUNT:
            return {...state, count: ++state.count}
        default:
            return state
    }
}
type ActionType = SetMinType | SetMaxType | SetCountType | SetSettingEnabledType | IncCountType
type SetMinType = ReturnType<typeof setMin>
export const setMin = (min: number) => ({type: SET_MIN, payload: {min}}) as const
type SetMaxType = ReturnType<typeof setMax>
export const setMax = (max: number) => ({type: SET_MAX, payload: {max}}) as const
type SetCountType = ReturnType<typeof setCount>
export const setCount = (count: number) => ({type: SET_COUNT, payload: {count}}) as const
type SetSettingEnabledType = ReturnType<typeof toggleSettingEnabled>
export const toggleSettingEnabled = (isSettingsEnabled: boolean) => ({
    type: TOGGLE_SETTINGS_ENABLED,
    payload: {isSettingsEnabled}
}) as const
type IncCountType = ReturnType<typeof incCount>
export const incCount = () => ({type: INC_COUNT}) as const
