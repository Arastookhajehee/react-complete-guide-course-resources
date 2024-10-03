export default function Box({ title, children, onClick, ...props })
{
    return (

        <div {...props}> 
            <h2 {...props}>{title}</h2>
            <button {...props} onClick={onClick}>Click me</button>
            {children}
        </div>

    );
}