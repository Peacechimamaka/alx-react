import { render, screen } from "@testing-library/react"
import App from './App'

describe('App Component should pass tests', () => {
    test('renders without crashing', () => {
        render(<App />);
        expect(screen.getByText(/ES6/i)).toBeInTheDocument();
    })
    



})