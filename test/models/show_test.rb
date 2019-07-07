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

require 'test_helper'

class ShowTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
