defmodule ReactPhoenix.V1.RegistrationController do
  use ReactPhoenix.Web, :controller

  alias ReactPhoenix.User

  plug :scrub_params, "user" when action in [:create]

  def create(conn, %{"user" => user_params}) do
    changeset = User.registration_changeset(%User{}, user_params)

    case Repo.insert(changeset) do
      {:ok, user} ->
        broadcast_user = Map.take(user, [:id, :username, :email])
        ReactPhoenix.Endpoint.broadcast("users:new", "new:user", %{user: broadcast_user})
        conn
        |> put_status(:created)
        |> put_resp_header("location", v1_user_path(conn, :show, user))
        |> render(ReactPhoenix.V1.UserView, "show.json", user: user)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(ReactPhoenix.ChangesetView, "error.json", changeset: changeset)
    end
  end
end