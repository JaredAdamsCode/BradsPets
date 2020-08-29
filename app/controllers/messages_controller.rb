class MessagesController < ApplicationController

  def create
    @message = Message.new(message_params)
    if @message.save
      PetMailer.message_user(@message).deliver_now
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
    params.require(:message).permit(:message_text, :user_id, :send_to_user_id)
  end
end
