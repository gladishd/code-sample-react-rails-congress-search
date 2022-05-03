require 'dotenv'
require 'geocodio'

class DistrictsController < ApplicationController
    def get_districts
        geocodio = Geocodio::Client.new(ENV["API_KEY"])
        byebug
        location = geocodio.geocode(['1109 N Highland St, Arlington VA'])
    end
end
