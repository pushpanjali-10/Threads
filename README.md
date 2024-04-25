*Discussion Forum*

Project Overview
This project is a discussion forum where users can engage in conversations, share knowledge, and connect with others who share their interests. The forum makes it easy for users to communicate by allowing them to create discussion threads, post replies, and interact with each other smoothly.

Tech Stack
Backend: NodeJS
Frontend: ReactJS (preferred)
Styling: Bootstrap, .scss

Features
User authentication: Users can sign up, sign in, and manage their profiles.
Discussion threads: Users can create new discussion threads on various topics.
Replies: Users can reply to existing threads to engage in the conversation.
Search: Users can search for specific threads or topics.
Notifications: Users receive notifications for replies to their threads or comments.
Moderation: Admins can moderate the forum, delete inappropriate content, and manage users.

About API:
   - POST /signup: Creates a new user account. Expects name, password, email, and profileImage in the request body. Returns a success message or an error if the username already exists.
   - POST /login: Logs in a user. Expects email and password in the request body. Returns the user object if successful or an error if the user does not exist or the password is incorrect.
   - POST /ask-question: Creates a new question. Expects question, description, userId, and tags in the request body. Returns the newly created question object.
   - POST /answer/:id: Adds an answer to a question. Expects answer and userId in the request body, and the question ID in the URL parameter. Returns the newly created answer object.
   - POST /upvote/:id: Upvotes a question. Expects userId in the request body and the question ID in the URL parameter. Returns a success message or an error if the user has already upvoted.
   - POST /downvote/:id: Downvotes a question. Expects userId in the request body and the question ID in the URL parameter. Returns a success message or an error if the user has already downvoted.
   - GET /questions: Retrieves all questions, including their replies. Returns an array of question objects.
   - GET /allusers: Retrieves all users. Returns an array of user objects.
   - GET /my-questions/:id: Retrieves questions posted by a specific user. Expects the user ID in the URL parameter. Returns an array of question objects.
   - GET /find/:topic: Retrieves questions related to a specific topic (tag). Expects the topic in the URL parameter. Returns an array of question objects.


