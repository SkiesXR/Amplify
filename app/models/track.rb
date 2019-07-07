# == Schema Information
#
# Table name: tracks
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  length     :string           not null
#  artist_id  :integer          not null
#  album_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Track < ApplicationRecord

    validates :title, :length, :artist_id, :album_id, presence: true

    belongs_to :artist,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: :Artist

    belongs_to :album,
        primary_key: :id,
        foreign_key: :album_id,
        class_name: :Album

    has_many :likes,
        primary_key: :id,
        foreign_key: :track_id,
        class_name: :Like   

end
