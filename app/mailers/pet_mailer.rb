class PetMailer < ApplicationMailer
  default from: 'brad@bradspets.com'
  layout 'mailer'

  def welcome_email(user)
    @user = user
    @specialtext = 'Hello ' + user.username + ', ' + '<br /> Welcome to BradsPets!'
    mail(to: @user.email, subject: "Welcome to Brad's Pets", body: @specialtext)
  end

  def message_user(message)
    @message = message
    @user = User.find_by(id: message.send_to_user_id)
    @specialtext = @message.message_text
    mail(to: @user.email, subject: 'You Found My Pet!', body: @specialtext)
  end
end
