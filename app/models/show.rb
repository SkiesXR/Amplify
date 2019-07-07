# == Schema Information
#
# Table name: shows
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  author      :string           not null
#  description :text             not null
#  image_url   :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Show < ApplicationRecord

    validates :title, :author, :description, :image_url, presence: true

    has_many :show_episodes,
        primary_key: :id,
        foreign_key: :show_id,
        class_name: :ShowEpisode
        
    has_one_attached :show_photo  
end
