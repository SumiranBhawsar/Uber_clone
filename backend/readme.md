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

## /api/v1/users/login

### Description
This endpoint is used to log in an existing user.

### Method
`POST`

### Request Body
The request body should be a JSON object containing the following fields:

- `email` (string): The email address of the user. Must be a valid email.
- `password` (string): The password for the user account. Must be at least 6 characters long.

### Example Request
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

### Responses

#### Success
- **Status Code**: `200 OK`
- **Response Body**:
  ```json
  {
    "status": 200,
    "message": "User logged in successfully",
    "data": {
      "user": {
        "_id": "user_id",
        "fullname": {
          "firstname": "john",
          "lastname": "doe"
        },
        "email": "user@example.com"
      },
      "accessToken": "access_token",
      "refreshToken": "refresh_token"
    },
    "success": true
  }
  ```

#### Error
- **Status Code**: `401 Unauthorized`
  - **Response Body**:
    ```json
    {
      "statusCode": 401,
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
      "message": "Something went wrong while logging in",
      "errors": [],
      "success": false
    }
    ```

## /api/v1/users/profile

### Description
This endpoint is used to get the profile of the logged-in user.

### Method
`POST`

### Headers
- `Authorization` (string): Bearer token for authentication.

### Responses

#### Success
- **Status Code**: `200 OK`
- **Response Body**:
  ```json
  {
    "status": 200,
    "message": "User profile fetched successfully",
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
- **Status Code**: `401 Unauthorized`
  - **Response Body**:
    ```json
    {
      "statusCode": 401,
      "message": "Unauthorized",
      "errors": [],
      "success": false
    }
    ```
- **Status Code**: `500 Internal Server Error`
  - **Response Body**:
    ```json
    {
      "statusCode": 500,
      "message": "Something went wrong while fetching the profile",
      "errors": [],
      "success": false
    }
    ```

## /api/v1/users/logout

### Description
This endpoint is used to log out the logged-in user.

### Method
`POST`

### Headers
- `Authorization` (string): Bearer token for authentication.

### Responses

#### Success
- **Status Code**: `200 OK`
- **Response Body**:
  ```json
  {
    "status": 200,
    "message": "User logged out successfully",
    "success": true
  }
  ```

#### Error
- **Status Code**: `401 Unauthorized`
  - **Response Body**:
    ```json
    {
      "statusCode": 401,
      "message": "Unauthorized",
      "errors": [],
      "success": false
    }
    ```
- **Status Code**: `500 Internal Server Error`
  - **Response Body**:
    ```json
    {
      "statusCode": 500,
      "message": "Something went wrong while logging out",
      "errors": [],
      "success": false
    }
    ```



## /api/v1/captains/register

### Description
This endpoint is used to register a new captain.

### Method
`POST`

### Request Body
The request body should be a JSON object containing the following fields:

- `email` (string): The email address of the captain. Must be a valid email.
- `fullname` (string): The full name of the captain. Must be at least 3 characters long.
- `password` (string): The password for the captain account. Must be at least 6 characters long.
- `color` (string): The color of the vehicle. Must be provided.
- `licensePlate` (string): The license plate of the vehicle. Must be provided.
- `capacity` (number): The capacity of the vehicle. Must be at least 1.
- `model` (string): The model of the vehicle. Must be provided.
- `vehicleType` (string): The type of the vehicle. Must be one of "auto", "car", or "bick".

### Example Request
```json
{
  "email": "captain@example.com",
  "fullname": "John Doe",
  "password": "password123",
  "color": "red",
  "licensePlate": "ABC123",
  "capacity": 4,
  "model": "Toyota",
  "vehicleType": "car"
}
```

### Responses

#### Success
- **Status Code**: `201 Created`
- **Response Body**:
  ```json
  {
    "status": 201,
    "message": "Captain registered successfully",
    "data": {
      "_id": "captain_id",
      "fullname": "john doe",
      "email": "captain@example.com",
      "vehicle": {
        "color": "red",
        "model": "Toyota",
        "vehicleType": "car",
        "licensePlate": "ABC123",
        "capacity": 4
      }
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