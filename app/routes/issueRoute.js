const express=require('express');
const appConfig=require('../../config/appConfig');
const multer=require('./../services/multer');
//controllers
const issueController=require('../controllers/issueController');


let setRoute=(app)=>
{

    let baseUrl=appConfig.apiVersion+'/issue';


    app.post(`${baseUrl}/create`,issueController.createIssue);

    /**
     * @apiGroup issue
     * @apiVersion  1.0.0
     * @api {post} /api/v1.0.0/issue/create api for create issue.
     *
     * @apiParam {string} status status of the issue. (body params) (required)
     * @apiParam {string} description description of the issue. (body params) (required)
     * @apiParam {string} assignedTo Assigned to user. (body params) (required)
     * @apiParam {string} title title of the issue. (body params) (required)
     * @apiParam {files} images Comma seprated file names. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
        "error": false,
        "message": "Issue Created",
        "status": 200,
        "data": [
            {
                "_id" : ObjectId("5d18a2fe76e5e23cc4f9745a"),
                "issueId" : "wDk_K1iW6",
                "status" : "Backlog",
                "title" : "tests",
                "description" : "sdf",
                "reporter" : "Karthikeyan k",
                "reporterId" : "Karthikeyan k",
                "assignedTo" : "Karthikeyan k",
                "assignedToId" : "fzacNxl6K",
                "images" : [
                    ""
                ],
                "createdOn" : ISODate("2019-06-30T17:24:38.000+05:30"),
                "__v" : 0
            }
        ]
        }
    */

    
    
    app.post(`${baseUrl}/edit/:issueId`,issueController.editIssue);

    
    /**
     * @apiGroup issue
     * @apiVersion  1.0.0
     * @api {post} /api/v1.0.0/issue/edit/:issueId api for edit issue.
     *
     * @apiParam {string} userId userId of the user. (body params) (required)
     *  @apiParam {string} issueId Id of the issue. (body params) (required)
     * @apiParam {string} status status of the issue. (body params) (required)
     * @apiParam {string} description description of the issue. (body params) (required)
     * @apiParam {string} assignedTo Assigned to user. (body params) (required)
     * @apiParam {string} title title of the issue. (body params) (required)
     * @apiParam {files} images Comma seprated file names. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
        "error": false,
        "message": "Issue updated",
        "status": 200,
        "data": [
            {
                "_id" : ObjectId("5d18a2fe76e5e23cc4f9745a"),
                "issueId" : "wDk_K1iW6",
                "status" : "Backlog",
                "title" : "tests",
                "description" : "sdf",
                "reporter" : "Karthikeyan k",
                "reporterId" : "Karthikeyan k",
                "assignedTo" : "Karthikeyan k",
                "assignedToId" : "fzacNxl6K",
                "images" : [
                    ""
                ],
                "createdOn" : ISODate("2019-06-30T17:24:38.000+05:30"),
                "__v" : 0
            }
        ]
        }
    */



    app.post(`${baseUrl}/delete/:issueId`,issueController.deleteIssue);

     /**
     * @apiGroup issue
     * @apiVersion  1.0.0
     * @api {post} /api/v1.0.0/issue/delete/:issueId api to delete issue.
     *
     * @apiParam {string} issueId id of the issue. (body params) (required)
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

    app.get(`${baseUrl}/view/all`,issueController.getAllIssue);

    
    /**
     * @apiGroup issue
     * @apiVersion  1.0.0
     * @api {get} /api/v1.0.0/issue/view/all api for get issue details.
     *
     * 
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
                "error": false,
                "message": "Issues found",
                "status": 200,
                "data": [
                   {
                        "_id" : ObjectId("5d18a2fe76e5e23cc4f9745a"),
                        "issueId" : "wDk_K1iW6",
                        "status" : "Backlog",
                        "title" : "tests",
                        "description" : "sdf",
                        "reporter" : "Karthikeyan k",
                        "reporterId" : "Karthikeyan k",
                        "assignedTo" : "Karthikeyan k",
                        "assignedToId" : "fzacNxl6K",
                        "images" : [
                            ""
                        ],
                        "createdOn" : ISODate("2019-06-30T17:24:38.000+05:30"),
                        "__v" : 0
                    }
                ]
        }
    */


    app.get(`${baseUrl}/view/:issueId`,issueController.getSingleIssue);

    
    /**
     * @apiGroup issue
     * @apiVersion  1.0.0
     * @api {get} /api/v1.0.0/issue/view/:issueId api for get issue details.
     *
     * 
     * @apiParam {string} issueID id of the issue. (body params) (required)
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
                "error": false,
                "message": "Issue found",
                "status": 200,
                "data": [
                   {
                        "_id" : ObjectId("5d18a2fe76e5e23cc4f9745a"),
                        "issueId" : "wDk_K1iW6",
                        "status" : "Backlog",
                        "title" : "tests",
                        "description" : "sdf",
                        "reporter" : "Karthikeyan k",
                        "reporterId" : "Karthikeyan k",
                        "assignedTo" : "Karthikeyan k",
                        "assignedToId" : "fzacNxl6K",
                        "images" : [
                            ""
                        ],
                        "createdOn" : ISODate("2019-06-30T17:24:38.000+05:30"),
                        "__v" : 0
                    }
                ]
        }
    */


    
    app.post(`${baseUrl}/watch`,issueController.createWatchList);

    
    /**
     * @apiGroup issue
     * @apiVersion  1.0.0
     * @api {post} /api/v1.0.0/issue/watch api for get issue details.
     *
     * 
     * @apiParam {string} watcherId id of the watcher. (body params) (required)
     * @apiParam {string} issueId id of the issue. (body params) (required)
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
                "error": false,
                "message": "watch created successfully",
                "status": 200,
                "data": [{
                    "_id" : ObjectId("5d18b041b13bb12e4c31bbe8"),
                    "watcherId" : "fzacNxl6K",
                    "issueId" : "nvTKnv7UQ",
                    "__v" : 0
                    }]
           
        }
    */
    
    app.get(`${baseUrl}/watch/view`,issueController.getWatcher);

    /**
     * @apiGroup issue
     * @apiVersion  1.0.0
     * @api {get} /api/v1.0.0/issue/watch/view/ api for watch details.
     *
     * 
     * @apiParam {string} watcherId id of the watcher. (body params) (required)
     * @apiParam {string} issueId id of the issue. (body params) (required)
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
                "error": false,
                "message": "watch  found successfully",
                "status": 200,
                "data": [{
                    "_id" : ObjectId("5d18b041b13bb12e4c31bbe8"),
                    "watcherId" : "fzacNxl6K",
                    "issueId" : "nvTKnv7UQ",
                    "__v" : 0   
                        }]
           
        }
    */
    
    
    app.post(`${baseUrl}/add/comment`,issueController.addComment);
    /**
     * @apiGroup issue
     * @apiVersion  1.0.0
     * @api {post} /api/v1.0.0/issue/add/comment/ api for comment details.
     *
     * 
     * @apiParam {string} reporter  reporter of the comment. (body params) (required)
     * @apiParam {string} reporterId reporterid of the comment. (body params) (required)
     * @apiParam {string} description  description of the comment. (body params) (required)
     * @apiParam {string} issueId id of the issue. (body params) (required)
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
                "error": false,
                "message": "comment found successfully",
                "status": 200,
                "data": [{
                    "_id" : ObjectId("5d18aabb541a99446cecdfbd"),
                    "commentId" : "pb5s5E49R",
                    "issueId" : "gfpCSHPLn",
                    "description" : "Hi there",
                    "reporter" : "Karthikeyan k",
                    "reporterId" : "fzacNxl6K",
                    "createdOn" : ISODate("2019-06-30T17:57:39.000+05:30"),
                    "__v" : 0
                    }]
           
        }
    */

    
    app.get(`${baseUrl}/view/comment/:issueId`,issueController.readComment);
      /**
     * @apiGroup issue
     * @apiVersion  1.0.0
     * @api {get} /api/v1.0.0/issue/view/comment/ api for comment details.
     * 
     * @apiParam {string} issueId id of the issue. (body params) (required)
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
                "error": false,
                "message": "comments  found successfully",
                "status": 200,
                "data": [{
                    "_id" : ObjectId("5d18aabb541a99446cecdfbd"),
                    "commentId" : "pb5s5E49R",
                    "issueId" : "gfpCSHPLn",
                    "description" : "Hi there",
                    "reporter" : "Karthikeyan k",
                    "reporterId" : "fzacNxl6K",
                    "createdOn" : ISODate("2019-06-30T17:57:39.000+05:30"),
                    "__v" : 0
                    }]
           
        }
    */

  

    app.get(`${baseUrl}/notifications/:userId`,issueController.getAllnotifications);


    /**
     * @apiGroup issue
     * @apiVersion  1.0.0
     * @api {get} /api/v1.0.0/issue/notifications/:userId api for notification details.
     * 
     * 
     * @apiParam {array} desription desription of the issue. (body params) (required)
     * @apiParam {string} issueId id of the issue. (body params) (required)
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
                "error": false,
                "message": "notifications  created successfully",
                "status": 200,
                "data": [
                    {
                        "_id" : ObjectId("5d18b041b13bb12e4c31bbe9"),
                        "userId" : "fzacNxl6K",
                        "description" : [
                            "Issue has beend addded to watch list"
                        ],
                        "issueId" : "nvTKnv7UQ",
                        "notificationCount" : 0,
                        "createdOn" : ISODate("2019-06-30T18:21:13.000+05:30"),
                        "__v" : 0
                    }
                ]
           
        }
    */

  

    app.put(`${baseUrl}/notify/count`,issueController.countUpdate);
    
    /**
     * @apiGroup issue
     * @apiVersion  1.0.0
     * @api {post} /api/v1.0.0/issue/notifications/count api for update notification details.
     * 
     * 
     * @apiParam {string} userID id of the issue. (body params) (required)
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
                "error": false,
                "message": "notifications  update successfully",
                "status": 200,
                "data": [
                    {
                        "_id" : ObjectId("5d18b041b13bb12e4c31bbe9"),
                        "userId" : "fzacNxl6K",
                        "description" : [
                            "Issue has beend addded to watch list"
                        ],
                        "issueId" : "nvTKnv7UQ",
                        "notificationCount" : 1,
                        "createdOn" : ISODate("2019-06-30T18:21:13.000+05:30"),
                        "__v" : 0
                    }
                ]
           
        }
    */

  
    

    app.post('/api/upload', multer.upload.single('file'), multer.uploadFile)

    app.get(`/api/file`,multer.getAllFiles);

    
    app.get(`/api/image/:fileName`,multer.getSingleFile);

    app.get(`/api/download/:fileName`,multer.downloadFiles);



    app.get(`${baseUrl}/search`, issueController.searchIssue);
    
    /**
     * @apiGroup issue
     * @apiVersion  1.0.0
     * @api {get} /api/v1.0.0/issue/search api for search details.
     * 
     * @apiParam {string} arg (body params) (required)
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
                "error": false,
                "message": "search  found successfully",
                "status": 200,
                "data": [
                    {
                        "_id" : ObjectId("5d18b041b13bb12e4c31bbe9"),
                        "userId" : "fzacNxl6K",
                        "description" : [
                            "Issue has beend addded to watch list"
                        ],
                        "issueId" : "nvTKnv7UQ",
                        "notificationCount" : 0,
                        "createdOn" : ISODate("2019-06-30T18:21:13.000+05:30"),
                        "__v" : 0
                    }
                ]
           
        }
    */

  

    app.delete(`/api/deleteFiles/:fileName`,multer.deleteFiles);

}

module.exports=
{
    setRoute:setRoute
}