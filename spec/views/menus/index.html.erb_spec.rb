require 'rails_helper'

RSpec.describe "menus/index", type: :view do
  it "shows sample strings" do
    render
    expect(rendered).to have_css("h1", text: "メニュー一覧")
    # TODO: Reactをテストしたいけど無理そう ><
  end
end
