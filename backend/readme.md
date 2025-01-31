# API Documentation

## /api/v1/users/register

### Description
This endpoint is used to register a new user.

### Method
`POST`

### Request Body
The request body should be a JSON object containing the following fields:

- `email` (string): The email address of the user. Must be a valid email.
- `fullname` (object):
  - `firstname` (string): The first name of the user. Must be at least 3 characters long.
  - `lastname` (string): The last name of the user. Must be at least 3 characters long.
- `password` (string): The password for the user account. Must be at least 6 characters long.

### Example Request
```json
{
  "email": "user@example.com",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "password": "password123"
}
```

### Responses

#### Success
- **Status Code**: `201 Created`
- **Response Body**:
  ```json
  {
    "status": 201,
    "message": "User registered successfully",
    "data": {
      "_id": "user_id",
      "fullname": {
        "firstname": "john",
        "lastname": "doe"
      },
      "email": "user@example.com"
    },
    "success": true
  }
  ```

#### Error
- **Status Code**: `400 Bad Request`
  - **Response Body**:
    ```json
    {
      "statusCode": 400,
      "message": "Invalid details",
      "errors": [],
      "success": false
    }
    ```
- **Status Code**: `500 Internal Server Error`
  - **Response Body**:
    ```json
    {
      "statusCode": 500,
      "message": "Something went wrong while creating a user",
      "errors": [],
      "success": false
    }
    ```
