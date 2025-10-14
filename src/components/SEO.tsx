import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

interface Props {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
}

const SEO = ({
  title,
  description,
  keywords = "expense splitter, group budget, shared cost, team expenses",
}: Props) => {
  const location = useLocation();

  const pageTitle = title ? `${title} | Expense Splitter` : "Expense Splitter";
  const pageDescription = description || "Manage shared expense effortlessly";

  const baseUrl = "https://localhost:5173";
  const url = `${baseUrl}${location.pathname}`;

  return (
    <Helmet key={location.pathname}>
      {/* Basic Meta */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      {/* <meta property="og:image" content={image} /> */}
      <meta property="og:url" content={url} />

      {/* Twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      {/* <meta name="twitter:image" content={image} /> */}

      {/* Canonical Link */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
