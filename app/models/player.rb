class Player < ActiveRecord::Base
	validates :system, presence: :required
	validates :name, presence: :required
	validates :country, presence: :required
end
