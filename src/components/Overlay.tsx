import { motion } from "framer-motion";


type OverlayProps = {
  children: JSX.Element;
  onClick: () => void;
};

function Overlay({ children, onClick }: OverlayProps) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed top-[-10%] left-0 w-[100vw] h-[120vh] sm:w-[100vw] sm:h-[100vh] bg-[#000000e1] flex justify-center items-center z-[999]" onClick={onClick} >
      {children}
    </motion.div>
  )
};


export default Overlay;

