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
#  genre_id   :integer          not null
#

require 'test_helper'

class ArtistTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
