import Image from "next/image";
import Link from "next/link";
import React from "react";
import RedirectButton from "../../callToActions/rediredtButton/RedirectButton";
import styles from "./ImageWithDetails.module.scss";
import PlaceHolder from "../../../../helper/placeholder";

const ImageWithDetails = (props: any) => {
  const {
    image,
    title,
    redirectLink,
    dateAvailability,
    date,
    descriptionAvailability,
    description,
    onHoverExtendFromMiddleLine,
    redirectBtnText,
    redirectLinkTarget,
    imageHeight,
    category,
    parts,
    slug,
  } = props;

  const myLoader = ({ src }: { src: any }) => {
    return `${src}`;
  };
  return (
    <div id="ImagewithDetails">
      <div
        className={`${styles.item} ${styles[onHoverExtendFromMiddleLine]} hover:bg-white hover:cursor-pointer`}
      >
        <Link href={redirectLink} target={redirectLinkTarget}>
          <div className={`${styles.image}`}>
            {image ? (
              <Image
                className={
                  imageHeight === "fixedHeight"
                    ? `${styles.fixedImageSize}`
                    : ``
                }
                loader={myLoader}
                src={`${image}`}
                alt={title}
                width={0}
                height={0}
                priority={true}
                unoptimized={false}
                layout={`responsive`}
              />
            ) : (
              PlaceHolder.image.card(
                "image",
                imageHeight === "fixedHeight" ? `${styles.fixedImageSize}` : ``,
                category
              )
            )}
          </div>
        </Link>
        <div className={`${styles.details}`}>

          <h4 className={`${styles.itemTitle} uppercase pt-1 `}>
            <Link href={redirectLink}>{title.substring(0, 60)}</Link>
          </h4>
          <div className={`${descriptionAvailability}`}>
            <div className={`py-3 2xl:min-h-[2rem] lg:min-h-[4rem] ${styles.descriptionLimit}`}>{description}</div>
          </div>
          <div className={`py-3 ${dateAvailability} uppercase fontFeatureSetting opacity-80`}>
            {date}
          </div>

          {parts != "" && (
            <div className={`${styles.smallSeperator}  `}>
              {parts?.map((parts: any, index: number) => (
                <Link
                  key={index}
                  href={`/news/restoration/${slug}/#${parts.title.replace(
                    /\s/g,
                    "_"
                  )}`}
                  onClick={() => myLoader(parts.title.replace(/\s/g, "_"))}
                >
                  {" "}
                  {parts.title}{" "}
                </Link>
              ))}
            </div>
          )}

          <div className="pt-3 ">
            <RedirectButton
              redirectButton={redirectBtnText}
              directedlink={redirectLink}
              target={redirectLinkTarget}
              TextType=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ImageWithDetails;
