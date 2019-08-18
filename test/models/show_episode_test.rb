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

require 'test_helper'

class ShowEpisodeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
