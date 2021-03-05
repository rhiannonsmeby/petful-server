# Petful Server

### Live App: https://petful-fifo-lake.vercel.app/
### Client Repo: https://github.com/rhiannonsmeby/petful-client

### Summary
The petful application simulates an animal shelter that adopts pets out on a First In First Out basis. The user can add their name to the line and, when it is their turn, they can adopt one or both pets that are at the top of the queue.

### Technology Used
* Node.js
* Express

### API Documentation
#### Base URL: https://secret-basin-40331.herokuapp.com

#### Responses
This API returns json responses in the following format
```javascript
{
    "error": "message"
}
```

#### Endpoints
```javascript
GET /people
```
Returns all the people currently in the queue

```javascript
POST /people
```
Adds a person to the end of the queue

```javascript
GET /pets
```
Returns the animals ready for adoption

```javascript
DELETE /pets
```
Deletes addopted pets from the list

#### Status codes
* 200 OK
* 201 CREATED
* 204 DELETED
* 400 BAD REQUEST
* 500 INTERNAL SERVER ERROR
