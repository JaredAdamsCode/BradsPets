# By default, your React client will run on http://localhost:3000 (this is set to 3001). 
# This code allows requests originating from that address to have access to 
# all server resources ('*') and utilize all HTTP methods: 
# :get, :post, :put, :patch, :delete, :options, :head. 
# This configuration is ideal while working on the development environment. 
# Once your application is ready for production, 
# we will need to change the origin to the deployed front-end client’s domain address.



Rails.application.config.middleware.insert_before 0, Rack::Cors do 
  allow do
    origins 'http://localhost:3000'
  
    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head],
      credentials: true
  end
end