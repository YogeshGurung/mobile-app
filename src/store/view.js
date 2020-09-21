const INITIAL_STATE = {
    title: "",
    subtitle: ""
};

export const ACTION_TYPES = {
    SET_META: "SET_META",
};

const viewReducer = (state = INITIAL_STATE, { type, payload}) => {
    switch (type) {
        case ACTION_TYPES.SET_META:
            return payload;
        default:
            return state;
    }
}

export const actions = {
    setMeta(meta) {
        return {
            type: ACTION_TYPES.SET_META,
            payload: meta,
        };
    }
};

export default viewReducer;