puts 'coucou'


def testes
  return 'test'
end

  def dighit
    if !user_signed_in?
      redirect_to root_path
    # elsif User.where(id: params[:id].to_i) != current_user
    #       redirect_to dighit_path(current_user)
    end
    if current_user != params[:id].to_i
      return 'true'
    end
  end

puts dighit

