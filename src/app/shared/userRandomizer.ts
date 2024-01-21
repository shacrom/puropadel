function userRandomizer() {
  let mocked_users_js = []

  function randomizeIdentityCard() {
    const part1 = Math.floor(Math.random() * 9) + 1; // Número entre 1 y 9
    const part2 = Math.floor(Math.random() * 9000) + 1000; // Número entre 1000 y 9999
    const part3 = Math.floor(Math.random() * 9000) + 1000; // Número entre 1000 y 9999

    return `${part1}-${part2}-${part3}`;
  }

  for (let i = 1; i <= 100; i++) {
    let user_js = {
      "name": `Usuario${i}`,
      "lastName": `Lastname${i}`,
      "email": `usuario${i}@gmail.com`,
      "phone": "666777888",
      "identityCard": randomizeIdentityCard()
    }
    mocked_users_js.push(user_js)
  }

  console.log(mocked_users_js);
}