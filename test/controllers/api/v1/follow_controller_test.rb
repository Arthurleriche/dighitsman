require 'test_helper'

class Api::V1::FollowControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_v1_follow_create_url
    assert_response :success
  end

  test "should get show" do
    get api_v1_follow_show_url
    assert_response :success
  end

  test "should get index" do
    get api_v1_follow_index_url
    assert_response :success
  end

  test "should get destroy" do
    get api_v1_follow_destroy_url
    assert_response :success
  end

end
