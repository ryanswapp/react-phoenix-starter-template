defmodule ReactPhoenix.V1.SessionController do
  use ReactPhoenix.Web, :controller

  def create(conn, %{"session" => session_params}) do
    case ReactPhoenix.Session.authenticate(session_params, ReactPhoenix.Repo) do
      # If the user is authenticated, send back a new JWT
      {:ok, user} ->
        conn = Guardian.Plug.api_sign_in(conn, user, :token)

        conn
        |> put_status(:created)
        |> render(ReactPhoenix.V1.SessionView, "show.json", %{jwt: Guardian.Plug.current_token(conn)})
      :error ->
        conn
        |> put_status(:unprocessable_entity)
    end
  end

  def unauthenticated_api(conn, _params) do
    conn
    |> put_status(:unauthorized)
    |> render(ReactPhoenix.V1.SessionView, "error.json", error: "Not Authenticated")
  end
end