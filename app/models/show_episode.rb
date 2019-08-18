# == Schema Information
#
# Table name: show_episodes
#
#  id            :bigint           not null, primary key
#  title         :string           not null
#  description   :text             not null
#  release_date  :date             not null
#  show_id       :integer          not null
#  length        :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  episode_audio :string
#

class ShowEpisode < ApplicationRecord

    validates :title, :description, :release_date, :show_id, :length, presence: true
    validates :title, uniqueness: {scope: :show_id}

    belongs_to :show,
        primary_key: :id,
        foreign_key: :show_id,
        class_name: :Show
        
end

