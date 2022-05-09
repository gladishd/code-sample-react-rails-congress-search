require 'dotenv-rails'
require 'geocodio'

class DistrictsController < ApplicationController
    def get_districts
        addressString = params["search"]
        geocodio = Geocodio::Client.new(ENV["API_KEY"])
        location = geocodio.geocode([addressString], fields: %w[cd]).best
        district = location.congressional_districts
        
        newDistrict = District.create(
            name: district[0].name,
            number: district[0].district_number 
        )
        render json: newDistrict
    end
end
