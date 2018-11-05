export const getAll = () => 
  fetch('http://localhost:3000/admin/api/categories').then(response => {
    return response.json().then(data => {
      return data
    })
  })
