# Portfolio API Documentation

## Overview
This API provides backend services for the portfolio website, including course management and authentication.

## Base URL
`http://localhost:5000`

## Authentication

### Admin Login
- **Endpoint**: `/api/admin/login`
- **Method**: POST
- **Request Body**:
  ```json
  {
    "password": "string"
  }
  ```
- **Response**:
  ```json
  {
    "success": boolean,
    "message": string
  }
  ```

## Courses API

### Get All Courses
- **Endpoint**: `/api/courses`
- **Method**: GET
- **Response**:
  ```json
  [
    {
      "id": string,
      "title": string,
      "description": string,
      "image": string,
      "price": number,
      "duration": string
    }
  ]
  ```

### Add Course
- **Endpoint**: `/api/courses`
- **Method**: POST
- **Request Body**:
  ```json
  {
    "title": string,
    "description": string,
    "image": string,
    "price": number,
    "duration": string
  }
  ```
- **Response**:
  ```json
  {
    "success": boolean,
    "message": string,
    "course": object
  }
  ```

### Update Course
- **Endpoint**: `/api/courses/:id`
- **Method**: PUT
- **Request Body**:
  ```json
  {
    "title": string,
    "description": string,
    "image": string,
    "price": number,
    "duration": string
  }
  ```
- **Response**:
  ```json
  {
    "success": boolean,
    "message": string
  }
  ```

### Delete Course
- **Endpoint**: `/api/courses/:id`
- **Method**: DELETE
- **Response**:
  ```json
  {
    "success": boolean,
    "message": string
  }
  ```

## Error Handling
- All endpoints return appropriate HTTP status codes
- Error responses include a message describing the error
- Authentication errors return 401 status code

## Security
- Admin routes are protected by password authentication
- All endpoints validate input data
- Rate limiting is implemented to prevent abuse

## Environment Variables
- `MONGODB_URI`: MongoDB connection string
- `PORT`: Server port (default: 5000)
- `ADMIN_PASSWORD`: Admin panel password

## Deployment
- The API can be deployed on any Node.js compatible hosting service
- Ensure MongoDB is properly configured
- Set appropriate environment variables
- Recommended to use HTTPS in production
