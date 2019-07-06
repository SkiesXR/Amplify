# == Schema Information
#
# Table name: artists
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  bio        :string
#  image_url  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artist < ApplicationRecord

    validates :name, presence: true

    has_many :tracks,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: :Track

    has_many :albums,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: :Album  

end
