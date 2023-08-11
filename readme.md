# Features

* Create Post
* Get all Posts
* Create Comment on a Post
* Like Post
* Unline Post


# API Path

| Feature        | Path                    |
| -------------- | ----------------------- |
| Create Post    | /api/v1/posts/create    |
| Get all Posts  | /api/v1/posts           |
| Create Comment | /api/v1/comments/create |
| Like Post      | /api/v1/likes/like      |
| Unlike Post    | /api/v1/likes/unlike    |


# Models

1. Post
2. Like
3. Comment

#### POST

* title String
* body String
* likes []
* comments []

**We have separate model for Like and Comment so we will only store their reference (_id) here.**

#### Like

* user String
* post

**We have separate model for Post so we will only store its reference (_id) here.**

#### Comment

* user String
* body String
* post

**We have separate model for Post so we will only store its reference (_id) here.**


# Folder Structure

* config
  * database.js (has function to connect our server with database)
* routes
  * maps (Path -> Controller)
* controller
  * business logic
* models
  * schema of Post, Like and Comment


# Things to NOTICE

On addition of any comment, we have to update two models:

1. Comment
2. Post (as comment is on a post so we have to push it inside the comments array)


On liking/unliking any post, we have to update two models:

1. Comment
2. Post (as comment is on a post so we have to push it inside the comments array)
