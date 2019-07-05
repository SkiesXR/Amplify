export const signup = (user) => (
    $.ajax({
        method: 'POST',
        url: 'api/users',
        data: { user }
    })
)

export const login = (user) => {

    return $.ajax({
        method: 'POST',
        url: 'api/session',
        data: { user: user }
    })
}

export const logout = () => (
    $.ajax({
        method: 'DELETE',
        url: 'api/session'
    })
)

export const destroy = (user) => (
    $.ajax({
        method: 'DELETE',
        url: api/user/`${user.id}`
    })
)
