# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  track_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ApplicationRecord

    validates :user_id, :track_id, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :track,
        primary_key: :id,
        foreign_key: :track_id,
        class_name: :Track

end
