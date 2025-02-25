export type User = {
    id: string;
    name: string;
    email: string;
    role: "CUSTOMER" | "VENDOR" | "ADMIN";
};

export type LoginResponse = {
    token: string;
    user: User;
};

export type RegisterResponse = LoginResponse;

export type ErrorResponse = {
    message: string;
};
