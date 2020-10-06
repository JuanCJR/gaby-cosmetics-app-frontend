const routes = [
    {
      name: "signin",
      url: "http://localhost:8081/api/users/signin",
    },
    {
        name: "reconect",
        url: "http://localhost:8081/api/users/reconect",
      }
  ];
  
  const getRoute = (name) => {
    const route = routes.filter((r) => r.name === name);
    return route[0].url;
  };
  
  export default getRoute;
  