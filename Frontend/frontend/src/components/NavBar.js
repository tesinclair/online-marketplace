function NavBar(props){
  return(
    <nav className = "nav">
      <a href="/">Online Marketplace</a>
      {/*<SearchBar></SearchBar>*/}
      {
      props.loggedIn?
        <ul className = "options">
          <li><a href="/order-tracking">Track your orders</a> {/* Only for logged in customers */}</li>
          <li>Log Out</li>
        </ul>
        :
        <ul className = "options">
          <li><a href="/login">Login</a> {/* only for unlogged in customers */}</li>
          <li><a href="/create">Create Account</a> {/* only for unlogged in customers */}</li>
        </ul>
      }
      <a className = "options" href="/checkout">Checkout</a>
      
    </nav>
  );
}

export default NavBar;