import {
    TOGGLE_FAV
} from '../constants/globalConstants';

export const toggleFav = id => {
    return {
        type: TOGGLE_FAV,
        productId: id
    };
};
