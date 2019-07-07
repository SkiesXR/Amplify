# == Schema Information
#
# Table name: playlist_items
#
#  playlist_id :integer          not null
#  track_id    :integer          not null
#  position    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  id          :bigint           not null, primary key
#

class PlaylistItem < ApplicationRecord

    validates :playlist_id, :track_id, :position, presence: true

    belongs_to :playlist,
        primary_key: :id,
        foreign_key: :playlist_id,
        class_name: :Playlist

    belongs_to :track,
        primary_key: :id,
        foreign_key: :track_id,
        class_name: :Track
end
