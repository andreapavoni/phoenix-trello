defmodule PhoenixTrello.ShowBoardTest do
  use PhoenixTrello.IntegrationCase

  alias PhoenixTrello.{Board}

  setup do
    user = create_user

    board = user
    |> build_assoc(:owned_boards)
    |> Board.changeset(%{name: "My new board"})
    |> Repo.insert!


    {:ok, %{user: user, board: board |> Repo.preload([:user, :invited_users, lists: :cards])}}
  end

  @tag :integration
  test "Clicking on previously created board", %{user: user, board: board} do
    user_sign_in(%{user: user, board: board})

    assert page_source =~ board.name

    board_id = board
      |> Board.slug_id

    click({:id, board_id})

    assert element_displayed?({:css, ".view-container.boards.show"})

    assert page_title =~ board.name
    assert page_source =~ board.name
    assert page_source =~ "Add new list..."
  end
end
