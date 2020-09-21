import { getListings } from "../services/listings"

const INITIAL_STATE = getListings();

export const ACTION_TYPES = {
    ADD_LISTING: "ADD_LISTING",
    REMOVE_LISTING: "REMOVE_LISTING",
    UPDATE_LISTING: "UPDATE_LISTING",
};

const listingsReducer = (state = INITIAL_STATE, { type, payload}) => {
    switch (type) {
        case ACTION_TYPES.ADD_LISTING:
            return [...state, payload];
        case ACTION_TYPES.REMOVE_LISTING:
            return state.filter(ad => ad.id !== payload.id);
        case ACTION_TYPES.UPDATE_LISTING:
            const _state = [...state];
            const idx = _state.findIndex(ad => ad.id === payload.id);

            if(idx > -1) _state[idx] = payload;

            return _state;
        default:
            return state;
    }
}

export const actions = {
    addListing(ad) {
        return {
            type: ACTION_TYPES.ADD_LISTING,
            payload: ad,
        };
    }
};

export default listingsReducer;