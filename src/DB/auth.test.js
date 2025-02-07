import { registerUser, loginUser, logoutUser } from "./auth";

test("Функції авторизації існують", () => {
    expect(registerUser).toBeDefined();
    expect(loginUser).toBeDefined();
    expect(logoutUser).toBeDefined();
});