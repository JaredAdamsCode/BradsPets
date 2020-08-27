class ApplicationController < ActionController::Base

  # skip before action prevents Rails from using its authenticity token. 
  # This is a security token that Rails generates from the 
  # session data and adds to the parameters sent from a Rails 
  # form to a controller action to prevent cross-site request 
  # forgery (CSRF) attacks. Since the backend is an API, 
  # we should disable this so that we 
  # don’t receive ‘forbidden’ parameters that will prevent the 
  # controller actions from executing without error

  skip_before_action :verify_authenticity_token  
  
  #declare helper methods so they are available down the inheritance hierarchy 
  helper_method :login!, :logged_in?, :current_user, :authorized_user?, :logout!
  
  # Below are methods used for each session to authorize a user or delete a session.
  # further implementation is in the session controller
   
  def login!
    session[:user_id] = @user.id
  end
  
  def logged_in?
    !!session[:user_id]
  end
  
  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end
  
  def authorized_user?
     @user == current_user
   end
   
   def logout!
     session.clear
   end
  
  # Fallback method
  def fallback_index_html
    render :file => 'public/index.html'
  end
  
end
