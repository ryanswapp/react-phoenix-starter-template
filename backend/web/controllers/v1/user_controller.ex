defmodule ReactPhoenix.V1.UserController do
  use ReactPhoenix.Web, :controller

  alias ReactPhoenix.User

  # Simple authentication provided by Guardian
  # This code will check every incoming HTTP request for a JWT in the
  # 'Authorization' header
  plug Guardian.Plug.EnsureAuthenticated, on_failure: { ReactPhoenix.V1.SessionController, :unauthenticated_api }

  plug :scrub_params, "user" when action in [:create, :update]

  def index(conn, _params) do
    users = Repo.all(User)
    render(conn, "index.json", users: users)
  end

  def create(conn, %{"user" => user_params}) do
    changeset = User.registration_changeset(%User{}, user_params)

    case Repo.insert(changeset) do
      {:ok, user} ->
        conn
        |> put_status(:created)
        |> put_resp_header("location", v1_user_path(conn, :show, user))
        |> render("show.json", user: user)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(ReactPhoenix.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    user = Repo.get!(User, id)
    render(conn, "show.json", user: user)
  end

  def update(conn, %{"id" => id, "user" => user_params}) do
    user = Repo.get!(User, id)
    changeset = User.changeset(user, user_params)

    case Repo.update(changeset) do
      {:ok, user} ->
        render(conn, "show.json", user: user)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(ReactPhoenix.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    user = Repo.get!(User, id)

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    Repo.delete!(user)

    send_resp(conn, :no_content, "")
  end

  def current_user(conn, %{"jwt" => jwt}) do
    case Guardian.Plug.current_resource(conn) do
      nil -> 
        conn
        |> put_status(:not_found)
        |> render(ReactPhoenix.V1.SessionView, "error.json", user: user)
      user ->
        conn
        |> put_status(:ok)
        |> render("show.json", user: user)
    end
  end
end
