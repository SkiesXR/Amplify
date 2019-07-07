# == Schema Information
#
# Table name: albums
#
#  id           :bigint           not null, primary key
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  title        :string           not null
#  type         :string           not null
#  artist_id    :integer          not null
#  release_date :date             not null
#  image_url    :string           not null
#

class Album < ApplicationRecord

    validates :title, :type, :artist_id, :release_date, :image_url, presence: true

    belongs_to :artist,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: :Artist
    
    has_many :tracks,
        primary_key: :id,
        foreign_key: :album_id,
        class_name: :Track

    has_one_attached :album_art
end
