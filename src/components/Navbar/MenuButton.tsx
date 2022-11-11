interface Props {
  isOpen: boolean;
  setOpen: Function;
}

const MenuButton = ({ isOpen, setOpen }: Props) => {
  return (
    <button onClick={() => setOpen(!isOpen)}>
      <img
        src={isOpen ? "images/icon-menu-close.svg" : "images/icon-menu.svg"}
        alt=""
      />
    </button>
  );
};

export default MenuButton;
