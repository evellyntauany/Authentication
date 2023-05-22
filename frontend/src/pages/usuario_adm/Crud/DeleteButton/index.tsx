
interface DeleteButtonProps {
    onClick: () => void;
  }
  
  function DeleteButton({ onClick }: DeleteButtonProps) {
    return (
      <button onClick={onClick}>Excluir</button>
    );
  }
  
  export default DeleteButton;