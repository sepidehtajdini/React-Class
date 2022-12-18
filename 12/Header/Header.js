import './header.css';
export default function Header({ time }) {
    return (
        <div className='container'>
            timer
            <div className="header">
                {time}
            </div>
        </div>
    )
}