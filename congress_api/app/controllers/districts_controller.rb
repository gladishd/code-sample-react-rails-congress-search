require 'dotenv-rails'
require 'geocodio'

class DistrictsController < ApplicationController
    def get_districts
        addressString2 = params["search"]
        addressString = "1600 Pennsylvania Ave Washington, DC"
        geocodio = Geocodio::Client.new(ENV["API_KEY"])
        location = geocodio.geocode([addressString], fields: %w[cd]).best
        district = location.congressional_districts

        render json: district
    end
end

## params["search"] gets correct data from form, but does not allow that data to be passed into .geocode() method
## Do I need a Strong Params for search?
## Do I need to add a 'search' attribute to database?

## 1. On submit, form sends request to get_districts route.
## 2. Request Method is GET, status code is 200 ok. 
## 3. Payload is accurate, reflects search form entry. 
## 4. Response: Failed to load response data: No data for resource with given identifier
