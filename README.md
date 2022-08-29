Project Setup
    npm install
    add .env file with variables:
        MONGO_URL
        JWT_SECRET
        TOKEN_LIFETIME
    node seedProduct.js
    npm start

Supported APIs for postman testing:
    /api/v1/auth/register --> Sign Up feature
    /api/v1/auth/login  --> Sign In feature
    /api/v1/orders/  --> Create Order feature
    /api/v1/userorders/  -->  Get User Orders feature
    /api/v1/orders/admin/status/:id   -->  Accept/ reject order feature

Unit Testing:
    Each file can be tested using node filename
