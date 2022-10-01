from flask import Flask
from flask_restful import Resource, Api

service = Flask('rest_backend')
api = Api(service)

# Data

data_sets = {
    "mars": { "property1": 0, "property1:": 0},
    "sun": { "property1": 0, "property1": 0},
    "moon": { "property1": 0, "property1:": 0}
}

# API

class StarResource(Resource):
    def get(self, identifier):
        return {identifier: data_sets[identifier]}
api.add_resource(StarResource, '/resource/<string:identifier>')

# Service

if __name__ == "__main__":
    from waitress import serve
    serve(service, host="127.0.0.1", port=40667)
