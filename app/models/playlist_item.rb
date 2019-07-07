# == Schema Information
#
# Table name: playlist_items
#
#  playlist_id :integer          not null
#  track_id    :integer          not null
#  position    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class PlaylistItem < ApplicationRecord

    validates :playlist_id, :track_id, :position, presence: true

    belongs_to :playlist
    belongs_to :track

end
