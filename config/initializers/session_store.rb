# configure the way our server will handle the HTTP cookies. 
# The server needs to know two things about the cookie; its key and domain. 
# Note, the domain is only needed when the app is in production or deployed


if Rails.env === 'production' 
  Rails.application.config.session_store :cookie_store, key: '_pet-reuniter', domain: 'www.petreuniter.com'
else
  Rails.application.config.session_store :cookie_store, key: '_pet-reuniter' 
end