import { motion } from "framer-motion";


type OverlayProps = {
  children: JSX.Element;
  onClick: () => void;
};

function Overlay({ children, onClick }: OverlayProps) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute top-0 left-0 w-full h-full bg-[#000000e1] flex justify-center items-center z-[999]" onClick={onClick} >
      {children}
    </motion.div>
  )
};


export default Overlay;

