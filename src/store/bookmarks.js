import { getListings } from "../services/listings"

const INITIAL_STATE = getListings(4).map((ad) => ({ ...ad, isFav: true }));

export const ACTION_TYPES = {
    ADD_BOOKMARK: "ADD_BOOKMARK",
    REMOVE_BOOKMARK: "REMOVE_BOOKMARK",
    UPDATE_BOOKMARK: "UPDATE_BOOKMARK",
};

const bookmarkReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case ACTION_TYPES.ADD_BOOKMARK:
            return [...state, payload];
        case ACTION_TYPES.REMOVE_BOOKMARK:
            return state.filter(ad => ad.id !== payload.id);
        case ACTION_TYPES.UPDATE_BOOKMARK:
            const _state = [...state];
            const idx = _state.findIndex(ad => ad.id === payload.id);

            if (idx > -1) _state[idx] = payload;

            return _state;
        default:
            return state;
    }
}

export const actions = {
    addBookmark(favorite) {
        return {
            type: ACTION_TYPES.ADD_BOOKMARK,
            payload: favorite,
        };
    }
};

export default bookmarkReducer;