
export const isPasswordValid = (password: string) =>
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);