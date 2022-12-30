export const authToken = user => {
    console.log('Hello from Auth Token', user);
    const currentUser = {
        email: user.email,
    }
    fetch(`http://localhost:5000/user/${user?.email}`, {
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