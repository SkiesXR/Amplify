# == Schema Information
#
# Table name: genres
#
#  id         :bigint           not null, primary key
#  category   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Genre < ApplicationRecord

    validates :category, presence: true, uniqueness: true

    has_one_attached :genre_image

    has_many :artists,
        primary_key: :id,
        foreign_key: :genre_id,
        class_name: :Artist

end
