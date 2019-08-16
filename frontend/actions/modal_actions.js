export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const RECEIVE_SONG_ID = 'RECEIVE_SONG_ID';

export const openModal = modal => {
    return {
        type: OPEN_MODAL,
        modal,
        // songId
    };
};

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    };
};

export const receiveSongId = (id) => {
    return {
        type: RECEIVE_SONG_ID,
        id
    };
};