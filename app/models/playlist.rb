# == Schema Information
#
# Table name: playlists
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Playlist < ApplicationRecord

    validates :title, uniqueness: {scope: :user_id}
    validates :user_id, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    has_many :playlist_items,
        primary_key: :id,
        foreign_key: :playlist_id,
        class_name: :PlaylistItem
    
    has_many :tracks,
        through: :playlist_items,
        source: :track

end
