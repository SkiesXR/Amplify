export const signup = () => (
    $.ajax ({
        method: 'POST',
        url: '/api/user'
    })
)

export const login = () => (
    $.ajax({
        method: 'POST',
        url: '/api/session'
    })
)

export const logout = () => (
    $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
)
