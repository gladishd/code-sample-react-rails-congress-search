require 'dotenv'
require 'geocodio'

class DistrictsController < ApplicationController
    def get_districts
        geocodio = Geocodio::Client.new(ENV["API_KEY"])
        location = geocodio.geocode(['1109 N Highland St, Arlington VA'])
        byebug
    end
end
