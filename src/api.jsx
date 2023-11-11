const APIHOST = 'https://skypro-music-api.skyeng.tech/'

//получение всех треков

export async function getTracksAll() {
  const response = await fetch(`${APIHOST}catalog/track/all/`, {
    headers: { Authorization: ``, 'Content-Type': 'application/json' },
  })

  const tracks = await response.json()

  if (!response.ok) {
    throw new Error(`Не удалось загрузить плейлист, попробуйте позже!`) // ${response.status}
  }

  return tracks
}

// ЗАРЕГЕСТРИРОВАТЬСЯ

export async function registrationUserApi(email, password) {
  return fetch(`${APIHOST}user/signup/`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
      username: email,
    }),
    headers: {
      'content-type': 'application/json',
    },
  }).then((response) => {
    if (response.status === 400) {
      return response.json().then((errorResponse) => {
        if (errorResponse.username) {
          throw new Error(errorResponse.username)
        }
        if (errorResponse.email) {
          throw new Error(errorResponse.email)
        }
        if (errorResponse.password) {
          throw new Error(errorResponse.password)
        }
      })
    }
    if(response.status === 500) {
      throw new Error("Сервер сломался");
    }
    return response.json();
  })


}

// ВОЙТИ

export async function loginUserApi(email, password) {
  return fetch(`${APIHOST}user/login/`, {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      'content-type': 'application/json',
    },
  }).then((response) => {

    console.log(response)

    if (response.status === 400) {
      return response.json().then((errorResponse) => {
        if (errorResponse.email) {
          throw new Error(errorResponse.email)
        }
        if (errorResponse.password) {
          throw new Error(errorResponse.password)
        }
        throw new Error("Произошла неизвестная ошибка!");
      })
    }
    if (response.status === 401) {
      return response.json().then((errorResponse) => {
        throw new Error(errorResponse.detail);
      });
    }
    if(response.status === 500) {
      throw new Error("Сервер сломался");
    }
    return response.json();
  })
}

export async function getToken(email, password) {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/user/token/",
    {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
        "content-type": "application/json",
      },
    }
  );

  const data = await response.json;

  if (!response.ok) {
    throw new Error("Ошибка получения токена");
  } else {
    return data;
  }
}