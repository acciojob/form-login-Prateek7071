
function getFormvalue() {
    //Write your code here
	event.preventDefault()

	const form=getElementbyId('form1')
	const fname = form.elements['fname']
	const lname = form.elements['lname']

	const fullname = fname.value.trim() + ' ' + lname.value.trim()
	alert(fullname)
	return false
}
