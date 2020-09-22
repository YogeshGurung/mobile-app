import { getListings } from "../services/listings"

const INITIAL_STATE = getListings(7).map((ad, idx) => ({...ad, title: `My Ad ${idx+1}`, owner: "Yogesh Gurung"}));

export const ACTION_TYPES = {
    ADD_MY_ADS: "ADD_MY_ADS",
    REMOVE_MY_ADS: "REMOVE_MY_ADS",
    UPDATE_MY_ADS: "UPDATE_MY_ADS",
};

const myAdsReducer = (state = INITIAL_STATE, { type, payload}) => {
    switch (type) {
        case ACTION_TYPES.ADD_MY_ADS:
            return [...state, payload];
        case ACTION_TYPES.REMOVE_MY_ADS:
            return state.filter(ad => ad.id !== payload.id);
        case ACTION_TYPES.UPDATE_MY_ADS:
            const _state = [...state];
            const idx = _state.findIndex(ad => ad.id === payload.id);

            if(idx > -1) _state[idx] = payload;

            return _state;
        default:
            return state;
    }
}

export const actions = {
    addMyAd(ad) {
        return {
            type: ACTION_TYPES.ADD_MY_ADS,
            payload: ad,
        };
    }
};

export default myAdsReducer;