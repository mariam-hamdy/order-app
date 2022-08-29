Project Setup<br/>
&nbsp;&nbsp;&nbsp;&nbsp;npm install<br/>
&nbsp;&nbsp;&nbsp;&nbsp;add .env file with variables:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;MONGO_URL<br/>
&nbsp;&nbsp;&nbsp;&nbsp;JWT_SECRET<br/>
&nbsp;&nbsp;&nbsp;&nbsp;TOKEN_LIFETIME<br/>
&nbsp;&nbsp;&nbsp;&nbsp;node seedProduct.js<br/>
&nbsp;&nbsp;&nbsp;&nbsp;npm start<br/>
<br/>
Supported APIs for postman testing:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;/api/v1/auth/register&nbsp;&nbsp;--> Sign Up feature<br/>
&nbsp;&nbsp;&nbsp;&nbsp;/api/v1/auth/login&nbsp;&nbsp;--> Sign In feature<br/>
&nbsp;&nbsp;&nbsp;&nbsp;/api/v1/orders/&nbsp;&nbsp;--> Create Order feature<br/>
&nbsp;&nbsp;&nbsp;&nbsp;/api/v1/userorders/&nbsp;&nbsp;-->  Get User Orders feature<br/>
&nbsp;&nbsp;&nbsp;&nbsp;/api/v1/orders/admin/status/:id&nbsp;&nbsp;-->  Accept/ reject order feature<br/>
<br/>
Unit Testing:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;Each file can be tested using node filename<br/>
