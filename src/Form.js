import './Form.css';


const Form = props => {
	return (
		<form className='github-form'>
			<input type='text' placeholder='Github username' />
			<button>Add Card</button>
		</form>
	);
};

export default Form;