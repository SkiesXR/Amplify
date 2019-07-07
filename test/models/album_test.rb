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

require 'test_helper'

class AlbumTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
