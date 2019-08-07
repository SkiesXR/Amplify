export const fetchSearchResults = (input) => (
    $.ajax({
        method: 'GET',
        url: 'api/search',
        data: {
            input
        }
    })
);