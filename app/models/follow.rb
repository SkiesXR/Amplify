# == Schema Information
#
# Table name: follows
#
#  id          :bigint           not null, primary key
#  leader_id   :integer          not null
#  follower_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Follow < ApplicationRecord

    validates :leader_id, :follower_id, presence: true

    belongs_to :leader,
        primary_key: :id,
        foreign_key: :leader_id,
        class_name: :User

    belongs_to :follower,
        primary_key: :id,
        foreign_key: :follower_id,
        class_name: :User

end
