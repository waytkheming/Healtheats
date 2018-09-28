var MenuBox = createReactClass({
  loadMenusFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(result) {
        this.setState({data: result.data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState() {
    return {data: []};
  },
  handleMenuSubmit(menu) {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: menu,
      success: function(data) {
        this.setState({data: this.state.data.concat([data])});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount() {
    this.loadMenusFromServer();
    setInterval(this.loadMenusFromServer, this.props.pollInterval);
  },
  render() {
    return (
      <div className="menubox">
        <MenuList data={this.state.data}/>
        <MenuForm onMenuSubmit={this.handleMenuSubmit}/>
      </div>
    );
  }
});

var MenuList = createReactClass({
  render() {
    var menuNodes = this.props.data.map(function (menu) {
      return (
        <Menu data={menu} />
      );
    });
    return (
      <div className="menubox-list">
        {menuNodes}
      </div>
    );
  }
})

var Menu = createReactClass({
  render() {
    return (
      <div className="menubox-list__item">
        <h2 className="menubox-list__item--name">
          {this.props.data.name}
        </h2>
        <p className="menubox-list__item--desc">{this.props.data.description}</p>
        <p className="menubox-list__item--price">¥{this.props.data.price}</p>
        <p className="menubox-list__item--kcal">{this.props.data.kcalorie} kcal</p>
      </div>
    )
  }
})

var MenuForm = createReactClass({
  render(){
    return (
      <div className="menubox-form">
        # TODO: returns menu form
        Menuモデルをmasterにマージしたらformから新しいmenuをpostする処理を書く
      </div>
    )
  }
})
