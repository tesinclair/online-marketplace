function NavBar(){
  return(
    <nav>
      <a href="/">Online MarketPlace</a>
      <SearchBar></SearchBar>
      <ul>
        <li><a href="/login">Login</a> {/* only for unlogged in customers */}</li>
        <li><a href="/create-account">Create Account</a> {/* only for unlogged in customers */}</li>
      </ul>
      <a href="/checkout">Checkout</a>
      <ul>
        <li><a href="/order-track">Track your orders</a> {/* Only for logged in customers */}</li>
        <li>Log Out</li>
      </ul>
    </nav>
  );
}

export default NavBar;