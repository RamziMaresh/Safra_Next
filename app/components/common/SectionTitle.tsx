const SectionTitle = ({
    title,
    paragraph,
    paragraphTwo,
    
    mb = "100px",
  }: {
    title: string;
    paragraph: string;
    paragraphTwo: string;
    width?: string;
    center?: boolean;
    mb?: string;
  }) => {
    return (
      <>
        <div
          className="w-full"
        >
          <h2 className="mb-4 text-xl font-bold !leading-tight text-black sm:text-xl md:text-[20px]">
            {title}
          </h2>
          <p className="tracking-wider text-base !leading-relaxed text-body-color md:text-lg text-justify">
            {paragraph}
          </p>
          <p className="tracking-wider text-base !leading-relaxed text-body-color md:text-lg text-justify">
            {paragraphTwo}
          </p>
        </div>
      </>
    );
  };
  
  export default SectionTitle;
  