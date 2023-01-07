export const authToken = user => {
    const currentUser = {
        email: user.email,
    }
    fetch(`https://theme-portal-server.vercel.app/user/${user?.email}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
      })
        .then(res => res.json())
        .then(data => {
          //Save token in LocalStorage
          localStorage.setItem('theme-token', data.token)
        })
  
  }