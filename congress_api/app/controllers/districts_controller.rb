require 'dotenv-rails'
require 'geocodio'

class DistrictsController < ApplicationController
    def get_districts
        addressString = params["address"]
        geocodio = Geocodio::Client.new(ENV["API_KEY"])
        location = geocodio.geocode([addressString], fields: %w[cd]).best
        render json: location
    end
end
