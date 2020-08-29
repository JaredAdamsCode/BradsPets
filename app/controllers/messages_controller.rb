class MessagesController < ApplicationController

  def create
    @message = message.new(message_params)
    if @message.save
      render json: {
        success: true
      }
    else render json: {
      success: false
      }
    end
  end

  private
  def message_params
    message.require(:message).permit(:message, :user_id :send_to_user_id)
  end
end
