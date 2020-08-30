class PetMailer < ApplicationMailer
  default from: 'bradspets@gmail.com'
  
  def welcome_email(user)
    @user = user
    @specialtext = 'Hello #{user.username}, Welcome to BradsPets!'
    mail(to: '#{user.email}', subject: 'Welcome to BradsPets')
  end

  def message_user(message)
    @message = message
    @user = User.find_by(id: message.send_to_user_id)
    @specialtext = @message.message_text
    mail(to: '#{user.email}', subject: 'You Found My Pet!')
  end

end