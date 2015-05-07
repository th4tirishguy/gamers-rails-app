class PlayerController < ApplicationController
  
  def all
  	@players = Player.all.order(created_at: :desc)
  	return render json: @players
  end

  def create
  	@player = Player.new(player_params)
  	# @player.system = params["player"][:system]
  	# @player.name = params["player"][:name]
  	# @player.country = params["player"][:country]

  	if !@player.valid?
  		render template: "static_page/index"
  	else
  		@player.save
  		return redirect_to :root
  	end
  end

  private

  	def player_params
  		params.require(:player).permit(:system, :name, :country, :microphone)
  	end
end
