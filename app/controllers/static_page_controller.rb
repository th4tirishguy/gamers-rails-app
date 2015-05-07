class StaticPageController < ApplicationController
  def index
  	@player = Player.new
  end

  def about
  end

  def contact
  end
end
