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
Status 400
``` javascript
{
    "errors": {
      "Name can't be empty,email can't be empty,password can't be empty"
    }
  or
    "errors": {
      "Name can't be empty"
    }
  or
    "errors": {
      "email can't be empty"
    }
  or
    "errors": {
      "password can't be empty"
    }  
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

## POST /login
Login if user want to CRUD todo list

### Properties
- email (string)
- password (string)

### Response
Status 200
``` javascript
{
  "msg": "Jane Doe successfully login",
  "token": "<user_token>"
}
```
Status 400
``` javascript
{
    "errors": {
      "email or password are wrong"
    }
}
or
{
    "errors": {
      "No user found"
    }
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
Get user todo list

### Properties
- title (string)
- description (string)
- status (string)
- due_date (string)
- imageURL (string)
- userId (integer)

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
    "data": {
        "id": "user_id",
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
- imageURL (string)

## Request Header
``` javascript
{
   "token" : "<user_token>" 
}
```

## Request Body
``` javascript
{
    "data": {
        "id": (string),
        "title": (string),
        "description": (string),
        "status": (string),
        "due_date": (string),
        "imageURL": (string)
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

## Request Header
``` javascript
{
   "token" : "<user_token>" 
}
```

## Request Params
``` javascript
{
   "id" : "<userId>" 
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
- imageURL (string)

## Request Header
``` javascript
{
   "token" : "<user_token>" 
}
```

## Request Body
``` javascript
{
    "data": {
        "id": 3,
        "title": "Makan vitamin nanti",
        "description": "Jangan lupa makan vitamin",
        "status": "Belum terlaksana",
        "due_date": "Rabu, 8 Juli 2020",
        "imageURL": "https://www.jejakpiknik.com/wp-content/uploads/2019/03/bali-1-630x380.jpg"
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

## Request Header
``` javascript
{
   "token" : "<user_token>" 
}
```

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

## GET /calender-holiday/:country/:year
Get Holiday date and information

### Properties
- API KEY (string)
- country (string)
- year (string)

## Request Header
``` javascript
{
   "token" : "<user_token>" 
}
```

## Request Params
``` javascript
{
  "country": "search_country",
  "year": "search_year"
}
```

### Response
Status 200
``` javascript
[
  {
    "id": "4836c8d89ce554b5a799a18b27f633ac",
    "name": "New Year's Day",
    "notes": null,
    "date": "2020-01-01",
    "start": "2020-01-01T00:00:00Z",
    "end": "2020-01-01T23:59:59Z",
    "type": "Public Holiday",
    "public": true,
    "country": "ID"
  }
] 
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

## POST /googlelogin
Register with google 

### Request Body
``` javascript
{
  "id_token" = (string)
}
```

### Response

Status 200
``` javascript
  {
    "token": (string)
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