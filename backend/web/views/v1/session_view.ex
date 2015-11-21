defmodule ReactPhoenix.V1.SessionView do
  use ReactPhoenix.Web, :view

  def render("show.json", %{jwt: jwt}) do
    %{jwt: jwt}
  end

  def render("error.json", %{error: error}) do
    %{error: error}
  end
end