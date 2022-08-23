class Mutations::UpdateUser < Mutations::BaseMutation
  argument :id, ID, required: true
  argument :name, String, required: false
  argument :username, String, required: false
  argument :password, String, required: false

  field :user, Types::UserType, null: false
  field :errors, [String], null: false

  def resolve(id:, **kwargs)
    user = User.find(id)
    if user.update(kwargs)
      {
        user: user,
        errors: []
      }
    else
      {
        user: nil,
        errors: user.errors.full_messages
      }
    end
  end
end
