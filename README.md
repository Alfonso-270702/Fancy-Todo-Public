# Fancy-Todo

## POST /register
Register so user can access todo list 

### Properties
- name (string)
- email (string)
- password (string)

### Request Body
``` javascript
{
  "id": 3,
  "name": "Jane Doe",
  "email": "janedoe@gmail.com",
  "createdAt": "2020-07-07 19:50:53:41+07",
  "updatedAt": "2020-07-07 19:50:53:41+07"
}
```

### Response
Status 201
``` javascript
  {
    "msg": "Jane Doe successfully register"
  }
```
<br>

## POST /login
Login if user want to CRUD todo list

### Properties
- email (string)
- password (string)

## Request Header
``` javascript
{
   "token" : "<user_token>" 
}
```

### Response
Status 200
``` javascript
{
  "msg": "Jane Doe successfully login",
  "token": "<user_token>"
}
```
<br>

## GET /todos
Get user todo list

### Properties
- title (string)
- description (string)
- status (string)
- due_date (string)
- userId (integer)

## Request Header
``` javascript
{
   "userId" : "<user_userId>" 
}
```

### Response
Status 200
``` javascript
{
    "data": {
        "id": "userId",
        "title": "Makan vitamin nanti",
        "description": "Jangan lupa makan vitamin",
        "status": "Belum terlaksana",
        "due_date": "Rabu, 8 Juli 2020",
        "userId": 1,
        "createdAt": "2020-07-07T11:12:05.376Z",
        "updatedAt": "2020-07-07T11:13:16.220Z"
    }
}
```
Status 400
``` javascript
{
    "errors": [
      "error_name"
    ]
}
```
Status 500
``` javascript
{
    "errors": {
      "internal server error"
    }
}
```
<br>

## POST /todos
Create todo list

### Properties
- title (string)
- description (string)
- status (string)
- due_date (string)

## Request Header
``` javascript
{
   "userId" : "<user_userId>" 
}
```

## Request Body
``` javascript
{
    "data": {
        "id": "userId",
        "title": "Makan vitamin nanti",
        "description": "Jangan lupa makan vitamin",
        "status": "Belum terlaksana",
        "due_date": "Rabu, 8 Juli 2020"
    }
}
```

### Response
Status 201
``` javascript
{
    "data": {
        "id": "userId",
        "title": "Makan vitamin nanti",
        "description": "Jangan lupa makan vitamin",
        "status": "Belum terlaksana",
        "due_date": "Rabu, 8 Juli 2020",
        "userId": 1,
        "createdAt": "2020-07-07T11:12:05.376Z",
        "updatedAt": "2020-07-07T11:13:16.220Z"
    }
}
```
Status 400
``` javascript
{
    "errors": [
      "error_name"
    ]
}
```
Status 500
``` javascript
{
    "errors": {
      "internal server error"
    }
}
```
<br>

## GET /todos
Find one user todo list

### Properties
- id (integer)

## Request Body
``` javascript
{
    "data": {
        "id": "userId",
    }
}
```

### Response
Status 200
``` javascript
{
    "data": {
        "id": "userId",
        "title": "Makan vitamin nanti",
        "description": "Jangan lupa makan vitamin",
        "status": "Belum terlaksana",
        "due_date": "Rabu, 8 Juli 2020",
        "userId": 1,
        "createdAt": "2020-07-07T11:12:05.376Z",
        "updatedAt": "2020-07-07T11:13:16.220Z"
    }
}
```
Status 400
``` javascript
{
    "errors": [
      "error_name"
    ]
}
```
Status 500
``` javascript
{
    "errors": {
      "internal server error"
    }
}
```
<br>

## PUT /todos
Update user todo list

### Properties
- title (string)
- description (string)
- status (string)
- due_date (string)
- id (integer)

## Request Body
``` javascript
{
    "data": {
        "id": 3,
        "title": "Makan vitamin nanti",
        "description": "Jangan lupa makan vitamin",
        "status": "Belum terlaksana",
        "due_date": "Rabu, 8 Juli 2020"
    }
}
```

### Response
Status 200
``` javascript
{
  msg:'successfully edit todo'
}
```
Status 400
``` javascript
{
    "errors": [
      "error_name"
    ]
}
```
Status 404
``` javascript
{
    "errors": [
      "ERROR! Not Found"
    ]
}
```

Status 500
``` javascript
{
    "errors": {
      "internal server error"
    }
}
```
<br>

## DELETE /todos
Delete user todo list

### Properties
- id (integer)

## Request Params
``` javascript
{
  "id": "user_id",
}
```

### Response
Status 200
``` javascript
{
  msg:'successfully delete todo'
}
```
Status 400
``` javascript
{
    "errors": [
      "error_name"
    ]
}
```
Status 404
``` javascript
{
    "errors": [
      "ERROR! Not Found"
    ]
}
```

Status 500
``` javascript
{
    "errors": {
      "internal server error"
    }
}
```
<br>