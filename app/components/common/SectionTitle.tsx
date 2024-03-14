const SectionTitle = ({
    title,
    paragraph,
    paragraphTwo,
    width = "570px",
    center,
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
          className={`w-full ${center ? "mx-auto text-center" : ""}`}
          style={{ maxWidth: width, marginBottom: mb }}
        >
          <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[35px]">
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
  