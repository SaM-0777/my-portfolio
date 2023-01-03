

type ScrollDotsPropsType = {
  index: number;
}

const NavBarItems = ["Home", "About me", "Works", "Skills"];

function ScrollDots({ index }: ScrollDotsPropsType) {
  return (
    <div className="app__navigation fixed top-0 bottom-0 right-0" >
      {NavBarItems.map((item, i) => (
        <a key={i.toString()} style={index === i ? { backgroundColor: "#313bac" } : {}} className="app__navigation-dot" href={`#${item}`} />
      ))}
    </div>
  )
};


export default ScrollDots;

