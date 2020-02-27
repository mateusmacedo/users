db.createUser(
    {
        user: "users-app",
        pwd: "Secret*123",
        roles: [
            {role: "dbAdmin", db: "users"},
            {role: "readWrite", db: "users"},
        ]
    }
);