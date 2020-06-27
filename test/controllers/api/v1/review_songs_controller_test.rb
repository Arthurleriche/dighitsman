require 'test_helper'

class Api::V1::ReviewSongsControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get api_v1_review_songs_show_url
    assert_response :success
  end

end
