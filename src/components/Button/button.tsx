export default function Button(props: ButtonProps){
     return (
        <button type={props.type?? 'button'} className="btn btn-primary w-100"
                onClick={props.onCLick}>
            {props.children}
        </button>
    );
}

interface ButtonProps{
    children: React.ReactNode;
    onCLick?(): void;
    type?: 'button' | 'submit' | 'reset';
}