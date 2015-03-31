# list out all the attributes you want to serialize into JSON and send to Ember:
class LeadSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :phone, :status, :notes
end

