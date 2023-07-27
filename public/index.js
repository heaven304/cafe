let data = []

function clickme() {

	let obj = {
		name: document.getElementById('name').value,
		email: document.getElementById('email').value,
		pass: document.getElementById('pass').value,
	}

	let alreadyReg = false

	for (let i = 0; i < data.length; i++) {
		if (data[i].email == obj.email) {
			alreadyReg = true
		}
	}


	if (alreadyReg) {
		alert('already Registered')
	} else {

		data.push(obj)
		alert('Registration Successful')
	}

	console.log(data)


}