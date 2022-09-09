
import{Button,Toast,ToastBody} from "reactstrap";


const SuccessToast=(props:{
    toastIsOpen:boolean
    setToasIsOpen:(isOpen:boolean)=>void
})=>{
    return(
    <Toast
    className="bg-sucess text-white fixed-bottom ms-auto me-4 mb-4"
    isOpen={props.toastIsOpen}
    fade
    >
    <ToastBody className="d-flex justify-content-between">
        Produto adicionado ao carrinho
        <Button
        close
        className="btn-close-white"
        onClick={()=>props.setToasIsOpen(false)}
        >
        </Button>
    </ToastBody>
    </Toast>
    )
}

export default SuccessToast;