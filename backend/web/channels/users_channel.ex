defmodule ReactPhoenix.UsersChannel do
  use Phoenix.Channel

  def join("users:new", _auth_msg, socket) do
    {:ok, socket}
  end

  def handle_in("new:user", %{"user" => user}, socket) do
    {:noreply, socket}
  end

  def handle_in("remove:user", %{"user_id" => user_id}, socket) do
    broadcast! socket, "remove:user", %{user_id: user_id}
    {:noreply, socket}
  end
end