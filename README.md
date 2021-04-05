# Public Blog!

## We're going to create a public blog with full CRUD capibilities

- Similar to what you did for homework we are going to create another api this time one that follows in the form of a blog.
- This means that you'll be setting up a blog that allows for posts to be created, (full crud on those posts) with the added functionality of adding comments to any post (create and delete only)
  - hmmm I wonder how we can set it up in a way that when you see a single post, you can see all the comments associated with that post?
  - this probably means a comment cannot exist without a post

1. start by creating your ERD
1. Once you're sure of your ERD go through the usual setup of your server and database. Try to setup as much as you can on your own.
<details><summary>Cheat sheet here</summary>
<p>

- `npm init -y`
- `npm i express pg sequelize rowdy-logger cors`
- add a `.gitignore` and add node_modules and or config to it
- in your package.json add these to the scripts after "test"
- <pre>
  <code>
      "start": "node server.js",
      "dev": "nodemon server.js"
  </code>
  </pre>
- it should look like this
  - <pre>
      <code>
      "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "start": "node server.js",
      "dev": "nodemon server.js"
    },
      </code>
      </pre>
- sequelize init
- update config.json (change dialect to postgres)
- create database
- create our model
- Please type this out to get reps in!!
  - `sequelize model:generate --name=tableName --attributes tableColumn:dataType,tableColumn:dataType`
- check your database that everything you have your tables!
- `sequelize db:migrate`

</p>
</details>
1. Similarily to the homework make sure to organize your server in a routes and controllers folder
1. Given enough time create the frontend for your public blog! 
    - (think back to group projects but instead of using an api your using your server!!)
