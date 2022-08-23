# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

  3.0.3 and rails 6.1.5
  create the app rails with -d=postgresql -T --api

* System dependencies

  Apollo/client
  rack-cors
  graphiql-rails
  graphql

* Configuration

  after doing the installation the gems and dependencies:

  run in the terminal bundle, db:migrate, db:seed
  create the models with all required field
  run in the terminal rails g graphql:install
  then run rails g graphql:object nameModel
  then config the files created in the folder graphql for that working with all the field that is equal to characterist the model created

* Database creation

  postgresql

* Database initialization

  run in the terminal: db:create db:migrate db:seed

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)
  server graphiql
* Deployment instructions

  created a file called cors.rb in config/initializers and puts the next code inside the file created:
  Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins '*'

      resource '*', headers: :any, methods: %i[get post put patch delete options head]
    end
  end

  Create a folder assets and inside the folder create another folder called config and create a file manifest.js then puts this :
  //= link graphiql/rails/application.css
  //= link graphiql/rails/application.js

  then create the application react and download the dependencies apollo/client
  and continue with the documentation the apollo and graphql for react

* ...
