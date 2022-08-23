class Mutations::DestroyUser < Mutations::BaseMutation
  argument :id, ID, required: true

  field :user, Types::UserType, null: false
  field :errors, [String], null: false
  field :completed, String, null: false

  def resolve(id:)
    user = User.find(id)
    if user.delete
      {
        user: nil,
        errors: [],
        completed: "Destroy successfull"
      }
    else
      {
        user: nil,
        errors: user.errors.full_messages,
        completed: nil
      }
    end
  end
end
