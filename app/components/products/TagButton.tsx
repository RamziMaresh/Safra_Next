const TagButton = ({ href = "#0", text }: { href?: string; text: string }) => {
    return (
      <a
        href={href}
        className="bg-gradient-to-r from-teal-600 to-teal-800 mb-3 mr-3 inline-flex items-center justify-center rounded-sm px-4 py-2 text-sm text-white duration-300 hover:bg-primary hover:text-yellow-500 dark:bg-[#2C303B] dark:text-white dark:hover:bg-primary"
      >
        {text}
      </a>
    );
  };
  
  export default TagButton;
  