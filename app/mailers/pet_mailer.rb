class PetMailer < ApplicationMailer::Base
  default from: 'bradspets@gmail.com'
  
  def welcome_email(user)
    @user = user
    @special_text = 'Hello #{user.username}, Welcome to BradsPets!'
    mail(to: '#{user.email}', subject: 'Welcome to BradsPets')
  end

  def message_user(message)
    @user = User.find_by(id: message.send_to_user_id)
    @special_text = message.message_text
    mail(to: '#{user.email}', subject: 'You Found My Pet!')
  end
  
end