import './divider.scss'

const Divider = ({color}) => {
    return (
        <div className={`divider ${color ? '' : 'black'}`}>
            <span className="icon-Group-1"></span>
        </div>
    )
}

export default Divider;