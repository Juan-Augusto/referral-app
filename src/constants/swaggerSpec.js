import YAML from "js-yaml";

export const spec = YAML.load(`
openapi: 3.0.0
info:
  title: My API
  version: 1.0.0
  description: A simple API for managing users and referrals
servers:
  - url: http://localhost:5000
    description: Local server
paths:
  /signup:
    post:
      summary: Sign up a new user
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                email:
                  type: string
                  format: email
                password:
                  type: string
      responses:
        '201':
          description: User created
        '400':
          description: Bad request
        '500':
          description: Internal server error
  /login:
    post:
      summary: Log in a user
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                email:
                  type: string
                  format: email
                password:
                  type: string
      responses:
        '200':
          description: User logged in
          content:
            application/json:
              schema:
                type: object
                properties:
                  token:
                    type: string
                  id:
                    type: integer
                  email:
                    type: string
        '401':
          description: Invalid credentials
  /users:
    get:
      summary: Get all users
      responses:
        '200':
          description: List of users
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  properties:
                    id:
                      type: integer
                    email:
                      type: string
        '500':
          description: Internal server error
  /deleteUser:
    delete:
      summary: Delete a user
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                email:
                  type: string
                  format: email
      responses:
        '200':
          description: User deleted
        '500':
          description: Internal server error
  /referrals:
    post:
      summary: Create a referral
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                userID:
                  type: integer
                referralEmail:
                  type: string
                  format: email
                referralDescription:
                  type: string
      responses:
        '201':
          description: Referral created
        '500':
          description: Internal server error
    get:
      summary: Get all referrals
      responses:
        '200':
          description: List of referrals
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
        '500':
          description: Internal server error
  /referrals/{id}:
    put:
      summary: Update a referral
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                referralEmail:
                  type: string
                  format: email
                description:
                  type: string
      responses:
        '200':
          description: Referral updated
        '400':
          description: Bad request
        '500':
          description: Internal server error
    delete:
      summary: Delete a referral
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
      responses:
        '200':
          description: Referral deleted
        '500':
          description: Internal server error
`);
