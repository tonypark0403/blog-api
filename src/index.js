import dotenv from 'dotenv';
dotenv.config();
import app from './app';

const PORT = process.env.PORT || 8000;

const handleListening = () => console.log(`Server running on port ${PORT}`);

app.listen(PORT, handleListening);