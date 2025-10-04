export default function CustomLink({ href, name }) {
  return (
    <a
      href={href}
      className="block 
    text-center 
    rounded-xl 
    py-3 
    bg-button
    font-font-sans
    text-base 
    leading-5
    text-white 
    transition-colors 
    duration-300 
    ease-in 
    hover:bg-button-hover 
    focus:bg-button-hover max-w-50 mx-0 my-auto"
    >
      {name}
    </a>
  );
}
