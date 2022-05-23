require 'dotenv-rails'
require 'geocodio'

class DistrictsController < ApplicationController
    def get_districts
        addressString2 = params["search"]
        addressString = "1600 Pennsylvania Ave Washington, DC"
        geocodio = Geocodio::Client.new(ENV["API_KEY"])
        location = geocodio.geocode([addressString2], fields: %w[cd]).best
        district = location.congressional_districts

        render json: district
    end
end