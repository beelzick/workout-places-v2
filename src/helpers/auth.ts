export const handleSingInClick = () => {
    window.location.assign('/api/auth/login')
}
export const handleSignOutClick = () => {
    window.location.assign('/api/auth/logout')
}