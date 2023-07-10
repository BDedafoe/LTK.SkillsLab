import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AccountMenu from './components/AccountMenu.js';
import TodoList from './Todo/TodoList.js';
import Form from './Todo/Form.js'

function App() {
	const [openForm, setOpenForm] = React.useState(false);
	const handleOnClick = (page) => {
		console.log('open');
		if(!openForm) { 
			setOpenForm(true)
		} else {
			setOpenForm(false)
		}
	};
  return (
    <Container maxWidth="sm">
	<AccountMenu onClick={handleOnClick} />
	{openForm && <Form />}
      <Box sx={{ my: 4 }}>
		<TodoList />
        <Typography variant="h4" component="h1" gutterBottom>
          React Skills test
        </Typography>
      </Box>
    </Container>
  );
}

export default App;