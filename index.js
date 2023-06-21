function Spa() {
  return (
    <HashRouter>
        <NavBar/>
        <div>
          <hr/>
        </div>
      <UserContext.Provider value={{users:[{name:'April',email:'apriljp0007@gmail.com',password:'secret',balance:100}]}}>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact         component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/deposit/"       component={Deposit} />
          <Route path="/withdraw/"      component={Withdraw} />
          <Route path="/alldata/"       component={AllData} />
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
