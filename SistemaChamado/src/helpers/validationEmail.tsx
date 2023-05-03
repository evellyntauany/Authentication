export const ValidationEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
}