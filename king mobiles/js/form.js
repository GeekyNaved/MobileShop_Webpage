class Users{
 constructor(username,password){
  this.username = username;
  this.password = password;
 }
}

// UI
class UI{
	
	static addUserToList(user){
		
	const list = document.querySelector('#list');
    const row = document.createElement('tr');
	
    row.innerHTML = `<td>${user.username}</td>
					 <td>${user.password}</td>
					 <td><a href="#" class="btn btn-danger delete">X</a></td>
	`;
		
    list.appendChild(row);

	}
	
	static clearAllFields(){
		document.querySelector('#username').value = '';
		document.querySelector('#password').value = '';
	}
}

// store data to local storage
class Store{
	static getUsers(){
		let users;
		if(localStorage.getItem('users') === null){
			users = [];
		}else{
				users = JSON.parse(localStorage.getItem('users'));
			}
		return users;	
		
	}
	
	static addUsers(user){
		const users = Store.getUsers();
		users.push(user);
		localStorage.setItem('users',JSON.stringify(users));
	}
}

// Add Event

	document.querySelector('#myForm').addEventListener('submit',(e) =>
   {
		
		e.preventDefault();
	
		// Getting values
		const username = document.querySelector('#username').value;
		const password = document.querySelector('#password').value;
		
	
			
		// instantiate Users class
		const user = new Users(username,password);
			
		UI.addUserToList(user);
			
		UI.clearAllFields(user);
			
		Store.addUsers(user);
		
 
});
