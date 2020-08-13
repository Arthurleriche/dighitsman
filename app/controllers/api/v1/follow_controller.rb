  def create
    follow = Follow.create(follow_params)
    follow.user = current_user

    if follow.save
      render json: FollowSerializer.new(follow).as_json
    else
      render json: { error: song.errors.messages }, status: 422
    end
  end

def show
end


  def index
  end

  def destroy
  end

private

def follow_params
    params.require(:follow).permit(:artist)
end

end
