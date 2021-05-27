class Character < ApplicationRecord
  belongs_to :user
  has_many :fight_outputs

  before_create :set_next_time

  def set_next_time
    self.next_time = Time.now
  end
end
