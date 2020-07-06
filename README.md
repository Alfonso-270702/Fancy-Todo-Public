# Fancy-Todo
**Title**
----
 <_Portofolio part 1_>
* **URL**

  /todos

* **Method:**
  
  POST


* **Data Params**

 **Required:**
 
   `title=[string]` <br />
   `description=[string]`<br />
   `status=[string]`<br />
   `due_date=[string]`<br />


* **Success Response:**
 
  * **Code:** 201 <br />
    **Content:** 
    ```json
    {
    "data": {
        "id": 8,
        "title": "Kembalikan buku sekolah",
        "description": "Jangan lupa kembalikan buku sekolah",
        "status": "Belum terlaksana",
        "due_date": "Rabu, 8 Juli 2020",
        "updatedAt": "2020-07-06T13:09:45.267Z",
        "createdAt": "2020-07-06T13:09:45.267Z"
      }
    }

* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `{ error : "title or description or status or due_date must be filled" }`
    **Code:** 500 <br />
    **Content:** `{ error : "internal server error" }`



* **Method:**
  
  GET


* **Data Params**

 **Required:**
 
   `title=[string]`<br />
   `description=[string]`<br />
   `status=[string]`<br />
   `due_date=[string]`<br />


* **Success Response:**
 
  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
    "data": {
        "id": 1,
        "title": "Cuci baju",
        "description": "Jangan lupa cuci baju siang hari",
        "status": "Belum terlaksana",
        "due_date": "Selasa, 7 Juli 2020",
        "createdAt": "2020-07-06T09:13:49.622Z",
        "updatedAt": "2020-07-06T09:13:49.622Z"
      }
    }
 
* **Error Response:**
    **Code:** 500 <br />
    **Content:** `{ error : "internal server error" }`

* **Method:**
  
  GET


* **Data Params**

 **Required:**
 
   `title=[string]`<br />
   `description=[string]`<br />
   `status=[string]`<br />
   `due_date=[string]`<br />


* **Success Response:**
 
  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
    "data": {
        "id": 8,
        "title": "Kembalikan buku sekolah",
        "description": "Jangan lupa kembalikan buku sekolah",
        "status": "Belum terlaksana",
        "due_date": "Rabu, 8 Juli 2020",
        "updatedAt": "2020-07-06T13:09:45.267Z",
        "createdAt": "2020-07-06T13:09:45.267Z"
    }
}
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `{ error : "todos not found" }`
    **Code:** 500 <br />
    **Content:** `{ error : "internal server error" }`


* **Method:**
  
  PUT


* **Data Params**

 **Required:**
 
   `title=[string]`<br />
   `description=[string]`<br />
   `status=[string]`<br />
   `due_date=[string]`<br />


* **Success Response:**
 
  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
    "data": [
        1
      ]
    }
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `{ error : "title or description or status or due_date must be filled" }`
    **Code:** 500 <br />
    **Content:** `{ error : "internal server error" }`
    **Code:** 404 <br />
    **Content:** `{ error : "ERROR! Not Found" }`


* **Method:**
  
  DELETE


* **Data Params**

 **Required:**
 
   `title=[string]`<br />
   `description=[string]`<br />
   `status=[string]`<br />
   `due_date=[string]`<br />


* **Success Response:**
 
  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
    "data": 1
    }
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "internal server error" }`
    **Code:** 404 <br />
    **Content:** `{ error : "ERROR! Not Found" }`