class User < ApplicationRecord
  
  has_many :pets 

  # bcrypt uses an attribute called has_secure_password 
  # We need to include this in our User model in order for bcrypt
  has_secure_password 

  # validations
  validates :username, presence: true
  validates :username, uniqueness: true
  validates :username, length: { minimum: 4 }
  validates :email, presence: true
  validates :email, uniqueness: true
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
end
