const express=require('express');
const appConfig=require('./../../config/appConfig');
const passport=require('passport');

//controllers
const userController=require('./../controllers/userController');

//middlewares
const auth=require('./../middlewares/auth');

let setRoute=(app)=>
{

    let baseUrl=appConfig.apiVersion+'/users';
    
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1.0.0/users/signup api for Registering User.
     *
     * @apiParam {string} firstName First Name of the user. (body params) (required)
     * @apiParam {string} lastname Last Name of the user. (body params) (required)
     * @apiParam {string} mobileNumber Mobile Number of the user. (body params) (required)
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
        "error": false,
        "message": "User Created",
        "status": 200,
        "data": [
            {
                "createdOn": "2018-09-12T13:42:58.000Z",
                "email": "karhirajakarthik.k@gmail.com",
                "password": "$2a$10$XvHxf9JX76JvvIeqwd2CoOdxtCraX23nR2ToAYIhynLmNquDFdbOa",
                "mobileNumber": "9788364345",
                "lastName": "k",
                "firstName": "karthikeyan",
                "userId": "B1cyuc8OX"
            }
        }
    */

    app.post(`${baseUrl}/signup`,userController.signUpFunction);
    
        /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1.0.0/users/login api for login User.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
        "error": false,
        "message": "Logged in successfully",
        "status": 200,
        "data": [
            {
                "authToken": "jaNNknlkMLMLmkN,mlMTc1NzU1NywiZXhwIjoxNTM3MTc4MTU3LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJsZXRzTWVldEFwcCIsImRhdGEiOnsiZW1haWxWZXJpZmllZCI6IlllcyIsInZhbGlkYXRpb25Ub2tlbiI6Ik51bGwiLCJlbWFpbCI6InNheXllZHNvZnR0ZWNoMzEzQGdtYWlsLmNvbSIsImlzQWRtaW4iOiJ0cnVlIiwibW9iaWxlTnVtYmVyIjoiOTEgNzg0MDk2Mjg4NyIsImNvdW50cnlOYW1lIjoiSW5kaWEiLCJ1c2VyTmFtZSI6IlNoYWgtYWRtaW4iLCJsYXN0TmFtZSI6IlNheXllZCIsImZpcnN0TmFtZSI6IlNoYWhydWtoIiwidXNlcklkIjoiQjFjeXVjOE9YIn19.fcCu0TZQ-WnAs8bOmZa9YhF1YVv2JscTwOPT--rTwbc",
					"userDetails": {
                "createdOn": "2018-09-12T13:42:58.000Z",
                "email": "karhirajakarthik.k@gmail.com",
                "password": "$2a$10$XvHxf9JX76JvvIeqwd2CoOdxtCraX23nR2ToAYIhynLmNquDFdbOa",
                "mobileNumber": "9788364345",
                "lastName": "k",
                "firstName": "karthikeyan",
                "userId": "B1cyuc8OX"
                    }
            }
        }
    */

    
    app.post(`${baseUrl}/login`,userController.loginFunction);

     /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1.0.0/users/logout api to logout from application.
     *
     * @apiParam {string} userId userId of the user. (body params) (required)
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Logged Out Successfully",
            "status": 200,
            "data": null
        }
    */

    app.post(`${baseUrl}/logout`,auth.isAuthorized,userController.logoutFunction);

    app.put(`${baseUrl}/edit/:userId`,auth.isAuthorized,userController.editUser);

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1.0.0/users/edit/:userID api for edit User.
     *
     * @apiParam {string} firstName First Name of the user. (body params) (required)
     * @apiParam {string} lastname Last Name of the user. (body params) (required)
     * @apiParam {string} mobileNumber Mobile Number of the user. (body params) (required)
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
        "error": false,
        "message": "User upadted",
        "status": 200,
        "data": [
            {
                "createdOn": "2018-09-12T13:42:58.000Z",
                "email": "karhirajakarthik.k@gmail.com",
                "password": "$2a$10$XvHxf9JX76JvvIeqwd2CoOdxtCraX23nR2ToAYIhynLmNquDFdbOa",
                "mobileNumber": "9788364345",
                "lastName": "k",
                "firstName": "karthikeyan",
                "userId": "B1cyuc8OX"
            }
        }
    */


    app.get(`${baseUrl}/view/all`,auth.isAuthorized,userController.getAllUser);

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1.0.0/users/view/all api for  get User details.
     *
     * 
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
                "error": false,
                "message": "User Details found",
                "status": 200,
                "data": [
                    {
                        "_id" : ObjectId("5d189f1f76e5e23cc4f9743b"),
                        "userId" : "fzacNxl6K",
                        "firstName" : "Karthikeyan",
                        "lastName" : "k",
                        "password" : "$2b$10$QJ.WKAr7wMQHCzPrwztP9O/31xqgn6S0pJJdVGWVCeZOoC8tClhbS",
                        "email" : "karthirajakarthik.k@gmail.com",
                        "mobileNumber" : "9788364345",
                        "createdOn" : ISODate("2019-06-30T17:08:07.000+05:30"),
                        "__v" : 0
                    }
           
        }
    */

    
    app.get(`${baseUrl}/view/:userId`,auth.isAuthorized,userController.getSingleUser);

    
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1.0.0/users/view/:userId api for get User details.
     *
     * 
     * @apiParam {string} userId userId of the user. (body params) (required)
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
                "error": false,
                "message": "User Details found",
                "status": 200,
                "data": [
                    {
                        "_id" : ObjectId("5d189f1f76e5e23cc4f9743b"),
                        "userId" : "fzacNxl6K",
                        "firstName" : "Karthikeyan",
                        "lastName" : "k",
                        "password" : "$2b$10$QJ.WKAr7wMQHCzPrwztP9O/31xqgn6S0pJJdVGWVCeZOoC8tClhbS",
                        "email" : "karthirajakarthik.k@gmail.com",
                        "mobileNumber" : "9788364345",
                        "createdOn" : ISODate("2019-06-30T17:08:07.000+05:30"),
                        "__v" : 0
                    }
           
        }
    */

    app.post(`${baseUrl}/delete/:userId`,auth.isAuthorized,userController.deleteSingleUser);
    
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1.0.0/users/delete/:userId api to delete user.
     *
     * @apiParam {string} userId userId of the user. (body params) (required)
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "deleted Successfully",
            "status": 200,
            "data": null
        }
    */
    

    app.get(`/auth/google`, passport.authenticate('google',{
        scope: ['profile', 'email']
    }));

    app.get(`/auth/google/callback` ,passport.authenticate('google'),(req, res)=>{
        let responseHTML = '<html><head><title>Main</title></head><body></body><script>res = %value%; window.opener.postMessage(res, "*");window.close();</script></html>'
         responseHTML = responseHTML.replace('%value%', JSON.stringify({
        user: req.user
    }));
    res.status(200).send(responseHTML);
    })
    

}

module.exports=
{
    setRoute:setRoute
}