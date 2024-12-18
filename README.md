//A Website Which Has 2 Endpoints-

1->  POST/Signin
     Body-{
        username:String
        password:String
     }
     (
        Return a json web token with username encrypted.
     )


2->  GET/users
     Headers-
    Authorization Headers

    (Return an array of all users if user is Signed in(token is correct))
    (Return 403 status code if not)     