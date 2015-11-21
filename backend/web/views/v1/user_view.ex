defmodule ReactPhoenix.V1.UserView do
  use ReactPhoenix.Web, :view

  def render("index.json", %{users: users}) do
    %{data: render_many(users, ReactPhoenix.V1.UserView, "user.json")}
  end

  def render("show.json", %{user: user}) do
    %{data: render_one(user, ReactPhoenix.V1.UserView, "user.json")}
  end

  def render("user.json", %{user: user}) do
    %{id: user.id,
      username: user.username,
      email: user.email}
  end
end
